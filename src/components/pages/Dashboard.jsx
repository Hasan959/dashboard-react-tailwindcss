import ActivityTimeline from "../dashboard/ActivityTimeline";
import RecentOrders from "../dashboard/RecentOrders";
import RevenueChart from "../dashboard/RevenueChart";
import StatsCard from "../dashboard/StatsCard";
import UserGrowthChart from "../dashboard/UserGrowthChart";


const Dashboard = () => {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          Dashboard Overview
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Welcome back! Here’s what’s happening with your business.
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Revenue" value="$24,500" />
        <StatsCard title="Total Users" value="1,200" />
        <StatsCard title="Orders" value="320" />
        <StatsCard title="Products" value="89" />
      </div>

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart/>
        <UserGrowthChart />
      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* RECENT ORDERS */}
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>

        {/* ACTIVITY */}
        <ActivityTimeline />

      </div>

    </div>
  );
};

export default Dashboard;