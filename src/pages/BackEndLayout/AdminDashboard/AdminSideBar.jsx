import {
  LayoutDashboard,
  ClipboardList,
  Repeat,
  Users,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

export default function AdminSideBar() {
  return (
    <aside className="ad-side">
      <div className="ad-side__brand">
        <div className="ad-side__logo">🐾</div>
        <div className="fw-bolder">毛日和</div>
      </div>

      <nav className="ad-side__nav">
        <a
          className="ad-side__link is-active"
          href="#overview"
          onClick={(e) => e.preventDefault()}
        >
          <LayoutDashboard size={18} />
          <span>數據總覽</span>
        </a>
        <a
          className="ad-side__link"
          href="#orders"
          onClick={(e) => e.preventDefault()}
        >
          <ClipboardList size={18} />
          <span>訂單管理</span>
        </a>
        <a
          className="ad-side__link"
          href="#subs"
          onClick={(e) => e.preventDefault()}
        >
          <Repeat size={18} />
          <span>訂閱管理</span>
        </a>

        <button className="ad-side__link ad-side__linkBtn" type="button">
          <Users size={18} />
          <span>會員管理</span>
          <ChevronDown size={16} className="ms-auto opacity-75" />
        </button>

        <a
          className="ad-side__subLink"
          href="#admins"
          onClick={(e) => e.preventDefault()}
        >
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
            <div className="fw-bold small">圓圓</div>
            <div className="small">yuan_yuan@gmail.com</div>
          </div>
        </div>

        <button
          className="btn btn-outline-orange w-100 rounded-pill fw-bold"
          type="button"
        >
          <LogOut size={16} className="me-2" />
          登出
        </button>
      </div>
    </aside>
  );
}
