import React from "react";
import {
  Bell,
  CheckCircle,
  AlertCircle,
  ShoppingCart,
  UserPlus,
  CheckCheck,
} from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New Order Received",
      message: "Order #ORD-1025 has been placed successfully.",
      time: "2 min ago",
      type: "order",
      unread: true,
    },
    {
      id: 2,
      title: "New User Registered",
      message: "Rahim Ahmed has joined the platform.",
      time: "15 min ago",
      type: "user",
      unread: true,
    },
    {
      id: 3,
      title: "Payment Successful",
      message: "Payment of $250 has been received.",
      time: "1 hour ago",
      type: "success",
      unread: false,
    },
    {
      id: 4,
      title: "System Alert",
      message: "Server maintenance is scheduled tonight.",
      time: "3 hours ago",
      type: "alert",
      unread: false,
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "order":
        return (
          <ShoppingCart className="text-blue-600" size={22} />
        );
      case "user":
        return (
          <UserPlus className="text-purple-600" size={22} />
        );
      case "success":
        return (
          <CheckCircle className="text-green-600" size={22} />
        );
      case "alert":
        return (
          <AlertCircle className="text-red-600" size={22} />
        );
      default:
        return <Bell className="text-gray-600" size={22} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Notifications
          </h1>
          <p className="text-gray-500 mt-1">
            Stay updated with the latest activities and alerts.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition">
          <CheckCheck size={18} />
          Mark All as Read
        </button>
      </div>

      {/* Notification List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start justify-between p-5 border-b border-gray-100 hover:bg-gray-50 transition"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                {getIcon(notification.type)}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-800">
                    {notification.title}
                  </h3>

                  {notification.unread && (
                    <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-600">
                      New
                    </span>
                  )}
                </div>

                <p className="text-gray-500 mt-1">
                  {notification.message}
                </p>

                <span className="text-xs text-gray-400 mt-2 block">
                  {notification.time}
                </span>
              </div>
            </div>

            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;