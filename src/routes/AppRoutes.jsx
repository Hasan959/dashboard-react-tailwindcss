import { Routes, Route } from "react-router";

import MainLayout from "../mainLayouts/MainLayouts";
import DashboardLayout from "../components/layout/DashboardLayout";


import Dashboard from "../components/pages/Dashboard";
import Sidebar from "../components/layout/Sidebar";

const AppRoutes = () => {
  return (
    <Routes>

      {/* PUBLIC ROUTE */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Sidebar />} />
      </Route>

      {/* DASHBOARD ROUTE */}
      <Route element={<DashboardLayout />}>
        <Route path="/sidebar" element={<Dashboard />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;