import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const userData = [
  { month: "Jan", users: 1200 },
  { month: "Feb", users: 1800 },
  { month: "Mar", users: 2500 },
  { month: "Apr", users: 3200 },
  { month: "May", users: 4100 },
  { month: "Jun", users: 5000 },
];

const UserGrowthChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md h-[400px]">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-800">
          User Growth
        </h2>
        <p className="text-sm text-gray-500">
          Monthly user registration statistics
        </p>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={userData}>
          <CartesianGrid strokeDasharray="3 3" />
          
          <XAxis dataKey="month" />
          
          <YAxis />
          
          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;