import React from "react";
import {
  Search,
  Download,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

const Transactions = () => {
  const transactions = [
    {
      id: "TRX-1001",
      customer: "Hasan Mahmud",
      amount: "$250.00",
      type: "Income",
      date: "02 Jul 2026",
      status: "Completed",
    },
    {
      id: "TRX-1002",
      customer: "Rahim Ahmed",
      amount: "$120.00",
      type: "Expense",
      date: "01 Jul 2026",
      status: "Pending",
    },
    {
      id: "TRX-1003",
      customer: "Karim Uddin",
      amount: "$560.00",
      type: "Income",
      date: "30 Jun 2026",
      status: "Completed",
    },
    {
      id: "TRX-1004",
      customer: "Nusrat Jahan",
      amount: "$90.00",
      type: "Expense",
      date: "29 Jun 2026",
      status: "Failed",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Failed":
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
            Transactions
          </h1>
          <p className="text-gray-500">
            Track all payment and transaction activities.
          </p>
        </div>

        <button className="flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
          <Download size={18} />
          Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm">Total Income</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            $12,450
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm">Total Expense</p>
          <h2 className="text-3xl font-bold text-red-600 mt-2">
            $4,280
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm">Net Profit</p>
          <h2 className="text-3xl font-bold text-indigo-600 mt-2">
            $8,170
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Transaction ID</th>
                <th className="text-left p-4">Customer</th>
                <th className="text-left p-4">Amount</th>
                <th className="text-left p-4">Type</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-t border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="p-4 flex items-center gap-2 font-medium text-gray-800">
                    <CreditCard size={16} />
                    {transaction.id}
                  </td>

                  <td className="p-4 text-gray-600">
                    {transaction.customer}
                  </td>

                  <td className="p-4 font-semibold text-gray-800">
                    {transaction.amount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`flex items-center gap-1 font-medium ${
                        transaction.type === "Income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "Income" ? (
                        <ArrowUpRight size={16} />
                      ) : (
                        <ArrowDownLeft size={16} />
                      )}
                      {transaction.type}
                    </span>
                  </td>

                  <td className="p-4 text-gray-600">
                    {transaction.date}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                        transaction.status
                      )}`}
                    >
                      {transaction.status}
                    </span>
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

export default Transactions;