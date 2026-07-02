import React from "react";
import {
  Search,
  ShoppingCart,
  Eye,
  Filter,
} from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: "#ORD-1001",
      customer: "Hasan Mahmud",
      date: "02 Jul 2026",
      amount: "$120",
      status: "Delivered",
    },
    {
      id: "#ORD-1002",
      customer: "Rahim Ahmed",
      date: "01 Jul 2026",
      amount: "$85",
      status: "Pending",
    },
    {
      id: "#ORD-1003",
      customer: "Karim Uddin",
      date: "30 Jun 2026",
      amount: "$220",
      status: "Processing",
    },
    {
      id: "#ORD-1004",
      customer: "Nusrat Jahan",
      date: "29 Jun 2026",
      amount: "$65",
      status: "Cancelled",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Processing":
        return "bg-blue-100 text-blue-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Orders
          </h1>
          <p className="text-gray-500">
            Manage and track all customer orders.
          </p>
        </div>

        <button className="flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
          <ShoppingCart size={18} />
          Total Orders
        </button>
      </div>

      {/* Search & Filter */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Order ID
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Customer
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Date
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Amount
                </th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-center p-4 font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium text-gray-800">
                    {order.id}
                  </td>

                  <td className="p-4 text-gray-600">
                    {order.customer}
                  </td>

                  <td className="p-4 text-gray-600">
                    {order.date}
                  </td>

                  <td className="p-4 font-semibold text-gray-800">
                    {order.amount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button className="p-2 rounded-lg hover:bg-gray-100">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;