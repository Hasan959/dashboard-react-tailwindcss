import { Routes, Route } from "react-router";

import MainLayout from "../mainLayouts/MainLayouts";
import DashboardLayout from "../components/layout/DashboardLayout";

import Dashboard from "../components/pages/Dashboard";
import Sidebar from "../components/layout/Sidebar";
import Analytics from "../components/pages/Analytics";
import Users from "../components/pages/Users";
import Products from "../components/pages/Products";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTE */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Sidebar />} />
        {/* <Route path="/dashboardlayout" element={<Sidebar/>} /> */}
      </Route>

      {/* DASHBOARD ROUTE */}
      <Route element={<DashboardLayout />}>
        <Route path="/sidebar" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
