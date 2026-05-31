import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* MOBILE SIDEBAR */}
      <MobileSidebar
        isOpen={mobileOpen}
        setIsOpen={setMobileOpen}
      />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar toggleSidebar={() => setMobileOpen(true)} />

        {/* CONTENT */}
        <main className="pt-16 p-4">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;