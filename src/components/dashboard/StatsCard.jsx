import React from "react";

const StatsCard = ({
  title,
  value,
  icon,
  growth = 0,
  bgColor = "bg-white",
}) => {
  return (
    <div
      className={`${bgColor} rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-gray-500 text-sm font-medium">
            {title}
          </h4>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
            {value}
          </h2>

          <p
            className={`mt-2 text-sm font-medium ${
              growth >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {growth >= 0 ? "↗" : "↘"} {Math.abs(growth)}%
            from last month
          </p>
        </div>

        <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl">
          {icon || "📊"}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;