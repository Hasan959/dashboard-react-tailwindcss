import React from "react";

const orders = [
  {
    id: "#ORD-1001",
    customer: "John Doe",
    product: "Premium Watch",
    amount: "$120",
    status: "Delivered",
  },
  {
    id: "#ORD-1002",
    customer: "Sarah Smith",
    product: "Sports Jersey",
    amount: "$85",
    status: "Pending",
  },
  {
    id: "#ORD-1003",
    customer: "Michael Lee",
    product: "Leather Wallet",
    amount: "$45",
    status: "Shipped",
  },
  {
    id: "#ORD-1004",
    customer: "Emma Wilson",
    product: "Smart Watch",
    amount: "$210",
    status: "Delivered",
  },
];

const RecentOrders = () => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Recent Orders
          </h2>
          <p className="text-sm text-gray-500">
            Latest customer orders
          </p>
        </div>

        <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-3 text-gray-600">Order ID</th>
              <th className="pb-3 text-gray-600">Customer</th>
              <th className="pb-3 text-gray-600">Product</th>
              <th className="pb-3 text-gray-600">Amount</th>
              <th className="pb-3 text-gray-600">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-4 font-medium text-gray-800">
                  {order.id}
                </td>

                <td className="py-4 text-gray-700">
                  {order.customer}
                </td>

                <td className="py-4 text-gray-700">
                  {order.product}
                </td>

                <td className="py-4 font-semibold text-gray-800">
                  {order.amount}
                </td>

                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;