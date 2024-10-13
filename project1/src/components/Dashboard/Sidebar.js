import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ onPageChange }) => {
  return (
    <nav className="bg-blue-500 text-white w-64 h-full">
      {/* App Name Header */}
      <div className="p-4 text-lg font-bold">App name</div>
      <ul className="mt-6">
        <li>
          <Link
            to="/dashboard"
            onClick={() => onPageChange("Dashboard")}
            className="block py-2.5 px-4 hover:bg-blue-600"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            onClick={() => onPageChange("Profile")}
            className="block py-2.5 px-4 hover:bg-blue-600"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            onClick={() => onPageChange("Settings")}
            className="block py-2.5 px-4 hover:bg-blue-600"
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
