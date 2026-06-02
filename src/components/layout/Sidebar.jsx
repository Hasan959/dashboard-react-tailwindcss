// components/layout/Sidebar.jsx

import { NavLink } from "react-router";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  ShoppingCart,
  CreditCard,
  MessageSquare,
  Bell,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Users",
    path: "/users",
    icon: Users,
  },
  {
    title: "Products",
    path: "/products",
    icon: Package,
  },
  {
    title: "Orders",
    path: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: CreditCard,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: MessageSquare,
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  return (
    <motion.aside
      animate={{
        width: collapsed ? 90 : 280,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        hidden lg:flex
        h-screen
        sticky top-0
        flex-col
        border-r
        border-[var(--border)]
        bg-[var(--card)]
        text-[var(--text)]
        backdrop-blur-xl
        shadow-2xl
        transition-all duration-300
      "
    >
      {/* LOGO */}
      <div
        className="
          flex items-center
          justify-between
          px-6 py-6
          border-b
          border-[var(--border)]
        "
      >
        {!collapsed && (
          <div>
            <h1
              className="
                text-2xl
                font-bold
                tracking-tight
                bg-gradient-to-r
                from-indigo-500
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              Nova Admin
            </h1>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Enterprise Dashboard
            </p>
          </div>
        )}

        {/* COLLAPSE BUTTON */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            flex items-center justify-center
            w-10 h-10
            rounded-xl
            bg-[var(--hover)]
            hover:scale-105
            border border-[var(--border)]
            transition-all
            cursor-pointer
          "
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `
                  group relative
                  flex items-center
                  gap-4
                  px-4 py-3
                  rounded-2xl
                  transition-all duration-300
                  overflow-hidden

                  ${
                    isActive
                      ? `
                        bg-gradient-to-r
                        from-indigo-500/20
                        to-cyan-500/20
                        border border-indigo-500/20
                        text-indigo-500
                        shadow-lg
                      `
                      : `
                        text-gray-500
                        hover:text-[var(--text)]
                        hover:bg-[var(--hover)]
                      `
                  }
                `
              }
            >
              {/* HOVER GLOW */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  bg-gradient-to-r
                  from-indigo-500/5
                  to-cyan-500/5
                "
              />

              {/* ICON */}
              <Icon
                size={22}
                className="
                  relative z-10
                  shrink-0
                "
              />

              {/* TEXT */}
              {!collapsed && (
                <span
                  className="
                    relative z-10
                    text-sm
                    font-medium
                    tracking-wide
                  "
                >
                  {item.title}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* USER CARD */}
      <div
        className="
          p-4
          border-t
          border-[var(--border)]
        "
      >
        <div
          className="
            flex items-center
            gap-3
            rounded-2xl
            bg-[var(--hover)]
            border border-[var(--border)]
            p-3
          "
        >
          {/* AVATAR */}
          <div
            className="
              flex items-center justify-center
              w-12 h-12
              rounded-xl
              bg-gradient-to-br
              from-indigo-500
              to-cyan-500
              text-white
              font-bold
            "
          >
            H
          </div>

          {!collapsed && (
            <div>
              <h4 className="text-sm font-semibold text-[var(--text)]">
                Hasan Mahmud
              </h4>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                Frontend Engineer
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;