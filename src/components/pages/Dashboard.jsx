import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 shadow-lg">
      <h1 className="text-3xl font-bold text-[var(--text)]">
        Dashboard Home
      </h1>

      <p className="mt-2 text-slate-500">
        Welcome to your admin dashboard.
      </p>
    </div>
  );
};

export default Dashboard;