import { useState } from "react";
import Sidebar from "./Sidebar";
import AdvancedAdminNavbar from "./Navbar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">

      {/* SIDEBAR */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <AdvancedAdminNavbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        {/* CONTENT */}
        <main className="pt-20 p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;