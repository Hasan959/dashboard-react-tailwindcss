import { Routes, Route } from "react-router";

import MainLayout from "../mainLayouts/MainLayouts";
import DashboardLayout from "../components/layout/DashboardLayout";

import Dashboard from "../components/pages/Dashboard";
import Analytics from "../components/pages/Analytics";
import Users from "../components/pages/Users";
import Products from "../components/pages/Products";
import Orders from "../components/pages/Orders";
import Transactions from "../components/pages/Transactions";
import Messages from "../components/pages/Messages";
import Notifications from "../components/pages/Notifications";
import Settings from "../components/pages/Settings";
import Profile from "../components/pages/Profile";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;