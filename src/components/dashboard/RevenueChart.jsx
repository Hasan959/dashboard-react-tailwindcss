import React from "react";

const RevenueChart = () => {
  const revenueData = [40, 70, 50, 90, 80, 120, 100];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Revenue Overview
          </h2>
          <p className="text-sm text-gray-500">
            Monthly revenue performance
          </p>
        </div>

        <button className="px-4 py-2 text-sm bg-indigo-100 text-indigo-600 rounded-lg">
          This Month
        </button>
      </div>

      {/* Chart Area */}
      <div className="h-72 flex items-end justify-between gap-3">
        {revenueData.map((value, index) => (
          <div
            key={index}
            className="flex-1 bg-indigo-500 rounded-t-lg hover:opacity-80 transition-all duration-300"
            style={{ height: `${value * 2}px` }}
          ></div>
        ))}
      </div>

      {/* Labels */}
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
  );
};

export default RevenueChart;