import { Outlet } from "react-router";
import UserSidebar from "../components/Navbars/UserSidebar";

const UserDashboard = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-[auto_1fr_auto] gap-1 bg-white">
      <div className="w-48 h-full bg-gray-300 grid grid-rows-[auto_1fr] py-3 px-1">
        <h1 className="text-sm font-semibold text-black text-center bg-gray-100">
          User Dashboard
        </h1>
        <UserSidebar />
      </div>
      <div className="w-full h-full bg-gray-50">
        <Outlet />
      </div>
      <div className="w-20 h-full bg-gray-50"></div>
    </div>
  );
};

export default UserDashboard;
