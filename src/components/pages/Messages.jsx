import React from "react";
import {
  Search,
  Send,
  MoreVertical,
  MessageSquare,
} from "lucide-react";

const Messages = () => {
  const messages = [
    {
      id: 1,
      name: "Hasan Mahmud",
      message: "Can you update me on the latest order status?",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      name: "Rahim Ahmed",
      message: "The products have been uploaded successfully.",
      time: "15 min ago",
      unread: false,
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      message: "I need help with my account settings.",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 4,
      name: "Karim Uddin",
      message: "Thank you for your support.",
      time: "3 hours ago",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Messages
          </h1>
          <p className="text-gray-500">
            Manage customer conversations and inquiries.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition">
          <Send size={18} />
          New Message
        </button>
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
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex items-center justify-between p-5 border-b border-gray-100 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <MessageSquare size={20} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-800">
                    {message.name}
                  </h3>

                  {message.unread && (
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  )}
                </div>

                <p className="text-gray-500 text-sm mt-1">
                  {message.message}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                {message.time}
              </span>

              <button className="p-2 rounded-lg hover:bg-gray-100">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;