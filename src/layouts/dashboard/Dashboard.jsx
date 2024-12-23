import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="md:grid lg:grid-cols-12">
      <div className="col-span-2 bg-red-400">
        <Sidebar />
      </div>
      <div className="col-span-10 p-12">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
