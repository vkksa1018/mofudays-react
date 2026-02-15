import React, { useMemo } from "react";
import "./adminDashboard.scss";

//（可選）想要圖示更像設計稿：你專案若已有 lucide-react 可直接用；沒有也不影響版面
import {
  LayoutDashboard,
  ClipboardList,
  Repeat,
  Users,
  ShieldCheck,
  Bell,
  Settings,
  LogOut,
  MessageCircle,
  Pencil,
  Info,
  ChevronDown,
} from "lucide-react";

function StatCard({ title, value, unit }) {
  return (
    <div className="card shadow-sm border-0 rounded-4 h-100 ad-card">
      <div className="card-body d-flex flex-column gap-2">
        <div className="d-flex align-items-start justify-content-between">
          <div className="text-secondary small fw-semibold">{title}</div>
          <button type="button" className="btn btn-link p-0 ad-iconLink" aria-label="info">
            <Info size={16} />
          </button>
        </div>
        <div className="d-flex align-items-end gap-2">
          <div className="display-6 fw-bolder ad-orange">{value}</div>
          <div className="text-secondary fw-semibold pb-2">{unit}</div>
        </div>
      </div>
    </div>
  );
}

function Dot({ variant = "warning" }) {
  return <span className={`ad-dot ad-dot--${variant}`} aria-hidden />;
}

function SoftBadge({ variant, children }) {
  return <span className={`badge rounded-pill ad-badge ad-badge--${variant}`}>{children}</span>;
}

export default function AdminDashboard() {
  const stats = useMemo(
    () => ({
      todayOrders: 150,
      pendingOrders: 38,
      monthNewMembers: 15,
    }),
    []
  );

  const latestOrders = useMemo(
    () => [
      {
        id: "20092788168493768",
        date: "2026/02/01",
        plan: "新手嘗鮮安心盒#2, 青春",
        qty: 3,
        amount: 699,
        status: "待處理",
        buyer: "陳建宏",
      },
      {
        id: "20092788168493769",
        date: "2026/02/15",
        plan: "牛奶補給能量盒#7, 專業",
        qty: 5,
        amount: 999,
        status: "待處理",
        buyer: "李美瑜",
      },
      {
        id: "20092788168493771",
        date: "2026/01/25",
        plan: "溫暖起跑療癒盒#1, 回饋",
        qty: 4,
        amount: 999,
        status: "待處理",
        buyer: "王中明",
      },
      {
        id: "20092788168493772",
        date: "2026/04/05",
        plan: "玩更會跑體驗盒#2, 知識",
        qty: 6,
        amount: 3299,
        status: "已處理",
        buyer: "張曉雯",
      },
      {
        id: "20092788168493770",
        date: "2026/03/10",
        plan: "親子活動盒#3, 親親",
        qty: 2,
        amount: 1299,
        status: "已處理",
        buyer: "何子豪",
      },
    ],
    []
  );

  const latestSubs = useMemo(
    () => [
      {
        id: "20092788168493768",
        plan: "新手嘗鮮安心盒#2, 青春",
        start: "2026/02/01",
        qty: 3,
        period: 1,
        shipStatus: "已出貨",
        shipDate: "2026/02/15",
        nextShip: "2026/03/15",
        subStatus: "訂閱中",
      },
      {
        id: "20092788168493769",
        plan: "牛奶補給能量盒#7, 專業",
        start: "2026/02/15",
        qty: 5,
        period: 2,
        shipStatus: "待處理",
        shipDate: "-",
        nextShip: "-",
        subStatus: "訂閱中",
      },
      {
        id: "20092788168493771",
        plan: "溫暖起跑療癒盒#1, 回饋",
        start: "2026/01/25",
        qty: 4,
        period: 1,
        shipStatus: "處理中",
        shipDate: "-",
        nextShip: "-",
        subStatus: "訂閱中",
      },
      {
        id: "20092788168493772",
        plan: "玩更會跑體驗盒#2, 知識",
        start: "2026/04/05",
        qty: 6,
        period: 3,
        shipStatus: "已完成",
        shipDate: "2026/04/15",
        nextShip: "2026/05/15",
        subStatus: "已取消",
      },
      {
        id: "20092788168493770",
        plan: "親子活動盒#3, 親親",
        start: "2026/03/10",
        qty: 2,
        period: 1,
        shipStatus: "已完成",
        shipDate: "2026/04/15",
        nextShip: "2026/05/15",
        subStatus: "訂閱中",
      },
    ],
    []
  );

  const latestMembers = useMemo(
    () => [
      {
        id: "MN0000001",
        name: "陳建宏",
        birthday: "1998/02/10",
        phone: "0912345678",
        email: "Huhming@gmail.com",
        address: "台北市中山區建國一路 18 巷 17 號",
        createdAt: "2026/02/15 10:43",
      },
      {
        id: "MN0000002",
        name: "李美瑜",
        birthday: "1995/03/01",
        phone: "0923456789",
        email: "LiMeihua@gmail.com",
        address: "高雄市苓雅區和平一路 56 號",
        createdAt: "2026/03/12 12:04",
      },
      {
        id: "MN0000003",
        name: "王中明",
        birthday: "1992/04/21",
        phone: "0934567890",
        email: "WangZhiMin@gmail.com",
        address: "台南市東區中華東路 100 號",
        createdAt: "2026/04/10 21:10",
      },
      {
        id: "MN0000004",
        name: "張曉雯",
        birthday: "1988/05/12",
        phone: "0945678901",
        email: "ChangJingYi@gmail.com",
        address: "新北市三重區重新路 22 號",
        createdAt: "2026/05/20 20:49",
      },
      {
        id: "MN0000005",
        name: "何子豪",
        birthday: "1990/06/30",
        phone: "0956789012",
        email: "GuoZiHao@gmail.com",
        address: "桃園市中壢區青埔路 888 號",
        createdAt: "2026/06/30 23:50",
      },
    ],
    []
  );

  return (
    <div className="ad-dashboard">
      {/* 左側欄 */}
      <aside className="ad-side">
        <div className="ad-side__brand">
          <div className="ad-side__logo">🐾</div>
          <div className="fw-bolder">毛日和</div>
        </div>

        <nav className="ad-side__nav">
          <a className="ad-side__link is-active" href="#overview" onClick={(e) => e.preventDefault()}>
            <LayoutDashboard size={18} />
            <span>數據總覽</span>
          </a>
          <a className="ad-side__link" href="#orders" onClick={(e) => e.preventDefault()}>
            <ClipboardList size={18} />
            <span>訂單管理</span>
          </a>
          <a className="ad-side__link" href="#subs" onClick={(e) => e.preventDefault()}>
            <Repeat size={18} />
            <span>訂閱管理</span>
          </a>

          <button className="ad-side__link ad-side__linkBtn" type="button">
            <Users size={18} />
            <span>會員管理</span>
            <ChevronDown size={16} className="ms-auto opacity-75" />
          </button>

          <a className="ad-side__subLink" href="#admins" onClick={(e) => e.preventDefault()}>
            管理員列表
          </a>
        </nav>

        <div className="ad-side__bottom">
          <button className="ad-side__mini" type="button">
            <Bell size={18} />
            <span>通知中心</span>
          </button>
          <button className="ad-side__mini" type="button">
            <Settings size={18} />
            <span>系統設定</span>
          </button>

          <div className="ad-side__user">
            <div className="ad-side__avatar" />
            <div className="lh-sm">
              <div className="fw-bold small">Gill</div>
              <div className="text-secondary small">Gillbeauty@gmail.com</div>
            </div>
          </div>

          <button className="btn btn-outline-orange w-100 rounded-pill fw-bold" type="button">
            <LogOut size={16} className="me-2" />
            登出
          </button>
        </div>
      </aside>

      {/* 右側內容 */}
      <main className="ad-main">
        <div className="ad-main__inner">
          <div className="small text-secondary mb-2">後台-總覽頁</div>

          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="h5 fw-bolder m-0">數據總覽</h2>
          </div>

          {/* 統計卡 */}
          <div className="row g-3 mb-3">
            <div className="col-12 col-lg-4">
              <StatCard title="本日訂單數" value={stats.todayOrders} unit="筆" />
            </div>
            <div className="col-12 col-lg-4">
              <StatCard title="代處理訂單數" value={stats.pendingOrders} unit="筆" />
            </div>
            <div className="col-12 col-lg-4">
              <StatCard title="本月新增會員" value={stats.monthNewMembers} unit="名" />
            </div>
          </div>

          {/* 最新訂單資料 */}
          <section className="card shadow-sm border-0 rounded-4 mb-3 ad-card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="fw-bolder">最新訂單資料</div>
                <a className="ad-link" href="#all-orders" onClick={(e) => e.preventDefault()}>
                  查看所有訂單
                </a>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0 ad-table">
                  <thead>
                    <tr className="small text-secondary">
                      <th>訂單編號</th>
                      <th>訂單日期</th>
                      <th>訂購方案</th>
                      <th className="text-end">訂購數量</th>
                      <th className="text-end">總費金額</th>
                      <th>訂單狀態</th>
                      <th>訂購人</th>
                      <th className="text-end">操作</th>
                    </tr>
                  </thead>
                  <tbody className="small">
                    {latestOrders.map((o) => (
                      <tr key={o.id}>
                        <td>
                          <a className="ad-link fw-bold" href="#order" onClick={(e) => e.preventDefault()}>
                            {o.id}
                          </a>
                        </td>
                        <td>{o.date}</td>
                        <td className="text-truncate" style={{ maxWidth: 260 }}>{o.plan}</td>
                        <td className="text-end">{o.qty}</td>
                        <td className="text-end">${o.amount}</td>
                        <td>
                          {o.status === "待處理" ? <Dot variant="warning" /> : <Dot variant="success" />}
                          <span className="ms-2">{o.status}</span>
                        </td>
                        <td>{o.buyer}</td>
                        <td className="text-end">
                          <button type="button" className="btn btn-light border rounded-circle ad-iconBtn me-2" title="留言">
                            <MessageCircle size={16} />
                          </button>
                          <button type="button" className="btn btn-light border rounded-circle ad-iconBtn" title="編輯">
                            <Pencil size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 最新訂閱資料 */}
          <section className="card shadow-sm border-0 rounded-4 mb-3 ad-card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="fw-bolder">最新訂閱資料</div>
                <a className="ad-link" href="#all-subs" onClick={(e) => e.preventDefault()}>
                  查看所有訂閱
                </a>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0 ad-table">
                  <thead>
                    <tr className="small text-secondary">
                      <th>訂單編號</th>
                      <th>訂購方案</th>
                      <th>訂閱起始日</th>
                      <th className="text-end">訂購數量</th>
                      <th className="text-end">目前期數</th>
                      <th>出貨狀態</th>
                      <th>出貨日</th>
                      <th>下次出貨</th>
                      <th className="text-end">訂閱狀態</th>
                    </tr>
                  </thead>
                  <tbody className="small">
                    {latestSubs.map((s) => (
                      <tr key={s.id}>
                        <td>
                          <a className="ad-link fw-bold" href="#sub" onClick={(e) => e.preventDefault()}>
                            {s.id}
                          </a>
                        </td>
                        <td className="text-truncate" style={{ maxWidth: 260 }}>{s.plan}</td>
                        <td>{s.start}</td>
                        <td className="text-end">{s.qty}</td>
                        <td className="text-end">{s.period}</td>
                        <td>
                          {s.shipStatus === "已出貨" && <Dot variant="success" />}
                          {s.shipStatus === "待處理" && <Dot variant="warning" />}
                          {s.shipStatus === "處理中" && <Dot variant="orange" />}
                          {s.shipStatus === "已完成" && <Dot variant="muted" />}
                          <span className="ms-2">{s.shipStatus}</span>
                        </td>
                        <td>{s.shipDate}</td>
                        <td>{s.nextShip}</td>
                        <td className="text-end">
                          {s.subStatus === "訂閱中" ? (
                            <SoftBadge variant="orange">訂閱中</SoftBadge>
                          ) : (
                            <SoftBadge variant="gray">已取消</SoftBadge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 最新會員資料 */}
          <section className="card shadow-sm border-0 rounded-4 ad-card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="fw-bolder">最新會員資料</div>
                <a className="ad-link" href="#all-members" onClick={(e) => e.preventDefault()}>
                  查看所有會員
                </a>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0 ad-table">
                  <thead>
                    <tr className="small text-secondary">
                      <th>會員編號</th>
                      <th>姓名</th>
                      <th>生日</th>
                      <th>聯絡電話</th>
                      <th>Email</th>
                      <th>地址</th>
                      <th>註冊時間</th>
                      <th className="text-end">操作</th>
                    </tr>
                  </thead>
                  <tbody className="small">
                    {latestMembers.map((m) => (
                      <tr key={m.id}>
                        <td className="ad-orange fw-bold">{m.id}</td>
                        <td>{m.name}</td>
                        <td>{m.birthday}</td>
                        <td>{m.phone}</td>
                        <td className="text-truncate" style={{ maxWidth: 200 }}>{m.email}</td>
                        <td className="text-truncate" style={{ maxWidth: 280 }}>{m.address}</td>
                        <td>{m.createdAt}</td>
                        <td className="text-end">
                          <button type="button" className="btn btn-light border rounded-circle ad-iconBtn" title="編輯">
                            <Pencil size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
