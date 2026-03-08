import { useState, useMemo } from "react";
import axios from "axios";
import AdminFormModal from "../AdminUsers/components/UserFormModal";
import OrderFormModal from "../AdminOrders/components/OrderFormModal";
import LatestOrders from "./components/LatestOrders";
import LatestSubscriptions from "./components/LatestSubscriptions";
import LatestMembers from "./components/LatestMembers";
import "../../../styles/AdminStyle/adminDashboard.scss";

import { Info, RefreshCw } from "lucide-react";
import { adminToast, getErrorMessage } from "../utils/adminToast";
import { isToday, isThisMonth, sortByDateDesc } from "../utils/adminDashboard";

const API_BASE = import.meta.env.VITE_API_BASE;

function StatCard({ title, value, unit }) {
  return (
    <div className="card shadow-sm border-0 rounded-4 h-100 ad-card">
      <div className="card-body d-flex flex-column gap-2">
        <div className="d-flex align-items-start justify-content-between">
          <div className="small fw-semibold">{title}</div>
          <button
            type="button"
            className="btn btn-link p-0 ad-iconLink"
            aria-label="info"
          >
            <Info size={16} />
          </button>
        </div>
        <div className="d-flex align-items-end gap-2">
          <div className="display-6 fw-bolder ad-orange">{value}</div>
          <div className="fw-semibold pb-2">{unit}</div>
        </div>
      </div>
    </div>
  );
}

function isPendingStatus(raw) {
  const s = String(raw ?? "");
  return s.includes("待") || s.includes("處理中") || s.includes("pending");
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [members, setMembers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [refreshing, setRefreshing] = useState(false); // toast用

  const fetchDashboardData = useCallback(async () => {
    const [ordersRes, subscriptionsRes, usersRes] = await Promise.all([
      axios.get(`${API_BASE}/orders`),
      axios.get(`${API_BASE}/subscriptions`),
      axios.get(`${API_BASE}/users`, { params: { role: "user" } }),
    ]);

    return {
      orders: Array.isArray(ordersRes.data) ? ordersRes.data : [],
      subscriptions: Array.isArray(subscriptionsRes.data)
        ? subscriptionsRes.data
        : [],
      members: Array.isArray(usersRes.data) ? usersRes.data : [],
    };
  }, []);

  useEffect(() => {
    let alive = true;

    const init = async () => {
      try {
        setLoading(true);
        setErrorMsg("");

        const data = await fetchDashboardData();
        if (!alive) return;

        setOrders(data.orders);
        setSubscriptions(data.subscriptions);
        setMembers(data.members);
      } catch (error) {
        console.error("AdminDashboard 載入失敗:", error);
        if (!alive) return;

        const message = getErrorMessage(error, "資料載入失敗，請稍後再試");
        setErrorMsg(message);

        // 初次載入失敗時給一顆 toast（避免重複可加 toastId）
        adminToast.error(message, { toastId: "dashboard-init-fail" });
      }
      // finally {
      //   if (!alive) return;
      //   setLoading(false);
      // }
    };

  const latestSubs = useMemo(
    () => sortByDateDesc(subscriptions, "createdAt").slice(0, 5),
    [subscriptions],
  );

  const latestMembers = useMemo(
    () => sortByDateDesc(members, "createdAt").slice(0, 5),
    [members],
  );

  /* 統計卡 */
  const stats = useMemo(() => {
    // 取得當日最新訂單資料
    const todayOrders = orders.filter((o) => isToday(o?.orderDate)).length;
    // 過濾有效訂單資料
    const ordersHasStatus = orders.some(
      (o) => o?.orderStatus != null || o?.shippingStatus != null,
    );
    // 取得待處理訂單/訂閱數量
    const pendingOrders = ordersHasStatus
      ? orders.filter((o) =>
          isPendingStatus(o?.orderStatus ?? o?.shippingStatus),
        ).length
      : subscriptions.filter((s) => isPendingStatus(s?.shippingStatus)).length;
    //取得最新會員資料
    const monthNewMembers = members.filter((m) =>
      isThisMonth(m?.createdAt),
    ).length;

    return { todayOrders, pendingOrders, monthNewMembers };
  }, [orders, subscriptions, members]);

  /* 打開會員Modal 用 */
  const [memberModalOpen, setMemberModalOpen] = useState(false);
  const [editingMemberId, setEditingMemberId] = useState(null);
  const [editingMemberData, setEditingMemberData] = useState(null);

  const openMemberEdit = (id) => {
    setEditingMemberId(id);

    const found = members.find((m) => m.id === id) ?? null;
    setEditingMemberData(found);

    setMemberModalOpen(true);
  };

  const closeMemberModal = () => {
    setMemberModalOpen(false);
    setEditingMemberId(null);
    setEditingMemberData(null);
  };

  const saveMember = async (formData) => {
    if (!editingMemberId) throw new Error("缺少會員 ID");

    const payload = {
      ...formData,
      updatedAt: nowISO(),
    };

    // edit 模式通常不送 password（避免空字串覆蓋）
    delete payload.password;

    await axios.patch(`${API_BASE}/users/${editingMemberId}`, payload);

    refresh();
  };

  // 訂單 modal 用
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editingOrderData, setEditingOrderData] = useState(null);

  const openOrderEdit = (id) => {
    setEditingOrderId(id);

    const found = orders.find((o) => o.id === id) ?? null;
    setEditingOrderData(found);

    setOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setOrderModalOpen(false);
    setEditingOrderId(null);
    setEditingOrderData(null);
  };

  const saveOrder = async (formData) => {
    if (!editingOrderId) throw new Error("缺少訂單 ID");

    const payload = {
      ...formData,
      updatedAt: nowISO?.() ?? new Date().toISOString(),
    };

    await axios.patch(`${API_BASE}/orders/${editingOrderId}`, payload);

    refresh();
  };

  return (
    <div
      className={`ad-main__inner ad-dashboard-page ${loading ? "is-loading" : "is-ready"}`}
    >
      <div className="d-flex align-items-center justify-content-start mb-3 gap-2">
        <h2 className="h5 fw-bolder m-0">數據總覽</h2>

        <button
          type="button"
          className="btn btn-sm btn-refresh d-inline-flex align-items-center gap-2"
          onClick={handleRefresh}
          disabled={loading || refreshing}
          title="重新整理資料"
        >
          <RefreshCw size={16} className={refreshing ? "spin" : ""} />
          {refreshing ? "重新整理中..." : "重新整理"}
        </button>
      </div>

          <button
            type="button"
            className="btn btn-sm ad-btn-refresh d-inline-flex align-items-center gap-2"
            onClick={refresh}
            disabled={loading || refreshing}
            title="重新整理資料"
          >
            <RefreshCw size={16} className={refreshing ? "spin" : ""} />
            {refreshing ? "重新整理中..." : "重新整理"}
          </button>
        </div>

        {errorMsg && (
          <div
            className="alert alert-warning rounded-4 border-0 mb-3"
            role="alert"
          >
            {errorMsg}
          </div>
        )}

        <div className="row g-3 mb-3">
          <div className="col-12 col-lg-4">
            <StatCard title="本日訂單數" value={stats.todayOrders} unit="筆" />
          </div>
          <div className="col-12 col-lg-4">
            <StatCard
              title="代處理訂單數"
              value={stats.pendingOrders}
              unit="筆"
            />
          </div>
          <div className="col-12 col-lg-4">
            <StatCard
              title="本月新增會員"
              value={stats.monthNewMembers}
              unit="名"
            />
          </div>
        </div>
      </div>

      {/* 最新訂單資料 */}
      <LatestOrders loading={loading} latestOrders={latestOrders} />

      {/* 最新訂閱資料 */}
      <LatestSubscriptions loading={loading} latestSubs={latestSubs} />

      {/* 最新會員資料 */}
      <LatestMembers loading={loading} latestMembers={latestMembers} />
    </div>
  );
}
