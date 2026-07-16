import { X } from "lucide-react";
import { NavLink } from "react-router";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Analytics", path: "/analytics" },
  { name: "Users", path: "/users" },
  { name: "Products", path: "/products" },
  { name: "Orders", path: "/orders" },
  { name: "Transactions", path: "/transactions" },
  { name: "Messages", path: "/messages" },
  { name: "Notifications", path: "/notifications" },
  { name: "Settings", path: "/settings" },
  { name: "Profile", path: "/profile" },
  { name: "Login", path: "/login" },
];
//props receved DashboardLayout.jsx
const MobileSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
      />

      {/* SIDE MENU BAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[var(--bg)] z-50 shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="p-4 space-y-2">
          {menuItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block p-3 rounded-lg hover:bg-[var(--hover)]"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;