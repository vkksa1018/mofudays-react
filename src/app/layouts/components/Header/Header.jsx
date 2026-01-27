import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  useEffect(() => {
    if (window.lucide?.createIcons) window.lucide.createIcons();
  }, []);

  return (
    <header className="container" id="top">
      <nav className="navbar navbar-expand-lg bg-body-white border navbar shadow-sm py-5 px-7">
        <div className="container-fluid d-flex justify-content-between">
          <Logo />

          {/* 右邊（手機）：menu + cart */}
          <MobileTopActions />

          {/* 右邊（桌機）：nav + cart */}
          <DesktopMenu />
        </div>

        <NewsModal />
      </nav>

      <MobileOffcanvasMenu />
    </header>
  );
}

/* ------------------ Desktop menu ------------------ */

function DesktopMenu() {
  return (
    <div className="desktop-menu ms-auto align-items-center">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavNewsItem />
          <NavBlogItem />

          {/*這裡：原本 NavLoginItem() 改成 AuthMenu */}
          <AuthMenu variant="desktop" />

          <NavCartItem />
        </ul>
      </div>
    </div>
  );
}

/* ------------------ Mobile Offcanvas ------------------ */

function MobileOffcanvasMenu() {
  return (
    <div
      className="offcanvas offcanvas-top offcanvas-mobile-full d-md-none"
      tabIndex={-1}
      id="mobileMenu"
      aria-labelledby="mobileMenuLabel"
      data-bs-scroll="true"
    >
      <div className="offcanvas-body d-flex flex-column align-items-center justify-content-between px-4 py-4">
        <nav className="w-100" aria-label="Mobile main">
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 mt-3 me-3 z-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />

          <ul className="list-mb list-unstyled mb-4">
            <li className="nav-item py-3 border-bottom text-center">
              <a
                className="nav-link active"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#newsModal"
                aria-current="page"
              >
                <IconNewspaper />
                最新消息
              </a>
            </li>

            <li className="nav-item text-center py-3">
              <a className="nav-link" href="blog.html">
                <IconHeartPlus />
                毛孩照護
              </a>
            </li>
          </ul>
        </nav>

        {/*這裡：原本固定顯示登入按鈕，改成 AuthMenu */}
        <div className="w-100 text-center my-2">
          <AuthMenu variant="mobile" />
        </div>
      </div>
    </div>
  );
}

/* =======================================================
   AuthMenu：登入前/後切換（Desktop + Mobile 共用）
   ======================================================= */

function AuthMenu({ variant = "desktop" }) {
  const { isAuthed, user, logout } = useAuth();

  // 未登入：顯示按鈕
  if (!isAuthed) {
    // desktop 是 <li>，mobile 在 offcanvas 裡也可以用 <li> 以保持樣式一致
    return (
      <li className={`nav-item ${variant === "desktop" ? "me-5" : ""}`}>
        <a href="login.html">
          <button className="btn login-btn rounded-pill" type="button">
            登入會員
          </button>
        </a>
      </li>
    );
  }

  // 已登入：顯示姓名下拉
  // 如果是在 offcanvas 裡，點選 dropdown item 後最好順便把 offcanvas 關掉
  const handleLogout = () => {
    logout();
    closeOffcanvasIfAny();
  };

  const handleClickLink = () => {
    closeOffcanvasIfAny();
  };

  return (
    <li className={`nav-item dropdown ${variant === "desktop" ? "me-5" : ""}`}>
      <button
        className="btn login-btn rounded-pill dropdown-toggle d-flex align-items-center gap-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="icon-user" aria-hidden="true" />
        <span>{user?.name || "會員"}</span>
      </button>

      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <a className="dropdown-item" href="/orders" onClick={handleClickLink}>
            訂單管理
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/member" onClick={handleClickLink}>
            個人資料修改
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="/member/exclusive"
            onClick={handleClickLink}
          >
            會員專屬活動
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="/coupons"
            onClick={handleClickLink}
          >
            我的折扣碼
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button
            className="dropdown-item text-danger"
            type="button"
            onClick={handleLogout}
          >
            登出
          </button>
        </li>
      </ul>
    </li>
  );
}

// 在 mobile offcanvas 點選選單後希望自動關閉
function closeOffcanvasIfAny() {
  const el = document.getElementById("mobileMenu");
  if (!el) return;
  // bootstrap offcanvas instance
  const instance = window.bootstrap?.Offcanvas?.getInstance(el);
  if (instance) instance.hide();
}
