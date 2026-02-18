import { Outlet } from "react-router-dom";
import AdminSideBar from "../pages/BackEndLayout/AdminDashboard/AdminSideBar";
export default function AdminLayout() {
  return (
    <>
      <div className="ad-dashboard">

        <AdminSideBar />

        <main className="ad-main">
          <Outlet></Outlet>
        </main>
        
      </div>
    </>
  );
}
