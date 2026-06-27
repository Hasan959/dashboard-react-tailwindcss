import React from "react";

const activities = [
  {
    id: 1,
    title: "New User Registered",
    description: "John Doe created a new account.",
    time: "5 min ago",
  },
  {
    id: 2,
    title: "New Order Received",
    description: "Order #ORD-1005 has been placed.",
    time: "20 min ago",
  },
  {
    id: 3,
    title: "Payment Successful",
    description: "Payment received for Order #ORD-1003.",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Product Added",
    description: "A new product was added to inventory.",
    time: "2 hours ago",
  },
  {
    id: 5,
    title: "Profile Updated",
    description: "Customer updated account information.",
    time: "3 hours ago",
  },
];

const ActivityTimeline = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Activity Timeline
        </h2>
        <p className="text-sm text-gray-500">
          Recent activities across the platform
        </p>
      </div>

      <div className="relative">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex gap-4 relative pb-8">
            {/* Timeline Line */}
            {index !== activities.length - 1 && (
              <div className="absolute left-[11px] top-6 w-0.5 h-full bg-gray-200"></div>
            )}

            {/* Timeline Dot */}
            <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-blue-100 z-10 flex-shrink-0"></div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">
                  {activity.title}
                </h3>

                <span className="text-xs text-gray-500">
                  {activity.time}
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;