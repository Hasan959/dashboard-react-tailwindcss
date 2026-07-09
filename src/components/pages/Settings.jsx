import React, { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Moon,
  Globe,
  Lock,
  Save,
} from "lucide-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    emailUpdates: false,
    twoFactor: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const Toggle = ({ checked, onChange }) => (
    <button
      onClick={onChange}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
        checked ? "bg-indigo-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
          checked ? "translate-x-6" : ""
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Settings
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your account preferences and system settings.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Menu */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-semibold text-gray-800 mb-5">
            Settings Menu
          </h2>

          <div className="space-y-3">
            {[
              { icon: User, label: "Profile" },
              { icon: Bell, label: "Notifications" },
              { icon: Shield, label: "Security" },
              { icon: Globe, label: "Language" },
              { icon: Moon, label: "Appearance" },
            ].map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-5">
              Profile Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Hasan Mahmud"
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="hasan@example.com"
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-5">
              Preferences
            </h2>

            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Dark Mode</h4>
                  <p className="text-sm text-gray-500">
                    Enable dark theme
                  </p>
                </div>
                <Toggle
                  checked={settings.darkMode}
                  onChange={() => toggleSetting("darkMode")}
                />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Push Notifications</h4>
                  <p className="text-sm text-gray-500">
                    Receive app notifications
                  </p>
                </div>
                <Toggle
                  checked={settings.notifications}
                  onChange={() => toggleSetting("notifications")}
                />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Email Updates</h4>
                  <p className="text-sm text-gray-500">
                    Receive email newsletters
                  </p>
                </div>
                <Toggle
                  checked={settings.emailUpdates}
                  onChange={() => toggleSetting("emailUpdates")}
                />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-500">
                    Improve account security
                  </p>
                </div>
                <Toggle
                  checked={settings.twoFactor}
                  onChange={() => toggleSetting("twoFactor")}
                />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-5">
              <Lock className="text-indigo-600" />
              <h2 className="text-xl font-semibold">
                Security
              </h2>
            </div>

            <button className="px-5 py-3 rounded-xl border hover:bg-gray-50 transition">
              Change Password
            </button>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition shadow-lg">
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;