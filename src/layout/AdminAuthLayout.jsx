import { Outlet } from "react-router-dom";

export default function AdminAuthLayout() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <main className="w-100" style={{ maxWidth: 420 }}>
        <Outlet />
      </main>
    </div>
  );
}