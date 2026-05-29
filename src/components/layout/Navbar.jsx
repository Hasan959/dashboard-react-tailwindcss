import React, { useState, useEffect } from "react";
import {
  Bell,
  Search,
  Menu,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Sun,
  Moon,
  Globe,
  Shield,
  Sparkles,
  Check,
  Clock,
} from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // 🌙 GLOBAL THEME TOGGLE
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // ⏰ CLOCK
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // ⌨️ SEARCH SHORTCUT
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("navbar-search")?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav className="bg-[var(--bg)] text-[var(--text)] border-b border-[var(--border)] fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between px-4 sm:px-6 transition-all duration-300">

     

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-xl hover:bg-[var(--hover)] lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-blue-600 to-violet-600 p-2 rounded-xl">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold hidden sm:block">
            Admin<span className="text-blue-500">Panel</span>
          </span>
        </div>
      </div>

      {/* CENTER SEARCH */}
      <div className="flex-1 max-w-lg mx-6 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            id="navbar-search"
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-12 py-2 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--text)] focus:outline-none"
          />
          <kbd className="absolute right-3 top-2 text-xs text-slate-400">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2">

        {/* CLOCK */}
        <div className="hidden lg:flex items-center gap-1 text-xs px-3 py-1 bg-[var(--card)] border border-[var(--border)] rounded-lg">
          <Clock className="w-4 h-4 text-blue-500" />
          {currentTime || "00:00"}
        </div>

        {/* THEME TOGGLE */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-xl hover:bg-[var(--hover)]"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* NOTIFICATION */}
        <div className="relative">
          <button
            onClick={() => {
              setIsNotificationOpen(!isNotificationOpen);
              setIsProfileOpen(false);
            }}
            className="p-2 rounded-xl hover:bg-[var(--hover)] relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          {isNotificationOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-[var(--bg)] border border-[var(--border)] rounded-xl shadow-lg">
              <div className="p-3 border-b border-[var(--border)]">
                Notifications
              </div>

              <div className="p-3 flex gap-2 hover:bg-[var(--hover)]">
                <Check className="w-4 h-4 text-green-500" />
                Server backup completed
              </div>

              <div className="p-3 flex gap-2 hover:bg-[var(--hover)]">
                <Shield className="w-4 h-4 text-yellow-500" />
                Login blocked
              </div>
            </div>
          )}
        </div>

        {/* PROFILE */}
        <div className="relative">
          <button
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
              setIsNotificationOpen(false);
            }}
            className="flex items-center gap-2 p-1 rounded-xl hover:bg-[var(--hover)]"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50"
              className="w-8 h-8 rounded-lg"
            />
            <ChevronDown className="w-4 h-4" />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-52 bg-[var(--bg)] border border-[var(--border)] rounded-xl shadow-lg">
              <div className="p-2 border-b border-[var(--border)] text-sm">
                sarah@example.com
              </div>

              <button className="w-full text-left p-2 hover:bg-[var(--hover)] flex gap-2">
                <User className="w-4 h-4" /> Profile
              </button>

              <button className="w-full text-left p-2 hover:bg-[var(--hover)] flex gap-2">
                <Settings className="w-4 h-4" /> Settings
              </button>

              <button className="w-full text-left p-2 text-red-500 hover:bg-red-50">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;