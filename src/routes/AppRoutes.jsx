import { Routes, Route } from "react-router";

import MainLayout from "../mainLayouts/MainLayouts";
import DashboardLayout from "../components/layout/DashboardLayout";

import Home from "../components/pages/Home";
import Dashboard from "../components/pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>

      {/* PUBLIC ROUTE */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* DASHBOARD ROUTE */}
      <Route element={<DashboardLayout />}>
        <Route path="/sidebar" element={<Dashboard />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;