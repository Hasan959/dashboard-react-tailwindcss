import React from "react";
import {
  BarChart3,
  Users,
  ShoppingCart,
  DollarSign,
} from "lucide-react";

const Analytics = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,280",
      icon: <DollarSign size={24} />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Users",
      value: "12,450",
      icon: <Users size={24} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Orders",
      value: "3,280",
      icon: <ShoppingCart size={24} />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Growth Rate",
      value: "+24%",
      icon: <BarChart3 size={24} />,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Analytics Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Monitor your business performance and growth.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h2 className="text-2xl font-bold text-gray-800 mt-2">
                  {item.value}
                </h2>
              </div>

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Chart Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Revenue Analytics
        </h2>

        <div className="h-72 flex items-end justify-between gap-3">
          {[45, 70, 55, 90, 80, 120, 95].map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-indigo-500 rounded-t-lg hover:opacity-80 transition-all"
              style={{ height: `${value * 2}px` }}
            />
          ))}
        </div>

        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
        </div>
      </div>
    </div>
  );
};

export default Analytics;