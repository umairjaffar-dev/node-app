import { Outlet } from "react-router";

const AdminDashboard = () => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] gap-1">
      <div>
        <h1 className="text-center font-semibold text-lg">Admin Dashboard</h1>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <h1 className="text-center text-sm font-semibold">footer</h1>
      </div>
    </div>
  );
};

export default AdminDashboard;
