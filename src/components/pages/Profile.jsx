import React from "react";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Edit,
  Award,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My Profile
        </h1>
        <p className="text-gray-500 mt-2">
          View and manage your personal information.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/200"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100"
              />

              <button className="absolute bottom-0 right-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition">
                <Camera size={18} />
              </button>
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              Hasan Mahmud
            </h2>

            <p className="text-gray-500">
              Frontend Developer
            </p>

            <button className="mt-6 flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
              <Edit size={18} />
              Edit Profile
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center bg-gray-50 rounded-xl p-4">
              <h3 className="text-xl font-bold text-indigo-600">
                128
              </h3>
              <p className="text-sm text-gray-500">Projects</p>
            </div>

            <div className="text-center bg-gray-50 rounded-xl p-4">
              <h3 className="text-xl font-bold text-green-600">
                580
              </h3>
              <p className="text-sm text-gray-500">Tasks</p>
            </div>

            <div className="text-center bg-gray-50 rounded-xl p-4">
              <h3 className="text-xl font-bold text-orange-600">
                98%
              </h3>
              <p className="text-sm text-gray-500">Performance</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Info icon={<Mail size={18} />} title="Email" value="hasan@example.com" />
              <Info icon={<Phone size={18} />} title="Phone" value="+880 1700-000000" />
              <Info icon={<MapPin size={18} />} title="Location" value="Rajshahi, Bangladesh" />
              <Info icon={<Calendar size={18} />} title="Joined" value="January 2026" />
              <Info icon={<Briefcase size={18} />} title="Position" value="Frontend Developer" />
              <Info icon={<Award size={18} />} title="Experience" value="3+ Years" />
            </div>
          </div>

          {/* About */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              About Me
            </h2>

            <p className="text-gray-600 leading-7">
              Passionate Frontend Developer with experience in React,
              Tailwind CSS, JavaScript, and UI/UX Design. I enjoy
              building modern, responsive, and user-friendly web
              applications with clean code and beautiful interfaces.
            </p>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Recent Activity
            </h2>

            <div className="space-y-4">
              <Activity
                title="Uploaded 21 new products"
                time="Today • 2 hours ago"
              />

              <Activity
                title="Reviewed team product uploads"
                time="Today • 3 hours ago"
              />

              <Activity
                title="Trained 3 new team members"
                time="Today • 5 hours ago"
              />

              <Activity
                title="Completed Analytics Dashboard"
                time="Yesterday"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ icon, title, value }) => (
  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
    <div className="text-indigo-600">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h4 className="font-semibold text-gray-800">{value}</h4>
    </div>
  </div>
);

const Activity = ({ title, time }) => (
  <div className="flex items-start gap-4">
    <div className="w-3 h-3 rounded-full bg-indigo-600 mt-2"></div>

    <div>
      <h4 className="font-medium text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  </div>
);

export default Profile;