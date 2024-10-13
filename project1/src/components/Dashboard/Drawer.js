import React from "react";
import { Link } from "react-router-dom";

const Drawer = ({ isVisible, toggleDrawer, onPageChange }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-blue-500 bg-opacity-90 transition-transform transform ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl font-bold text-white">Menu</h2>
        <button className="text-white text-2xl" onClick={toggleDrawer}>
          ✖
        </button>
      </div>
      <nav className="mt-10">
        <Link
          to="/dashboard"
          onClick={() => {
            onPageChange("Dashboard");
            toggleDrawer();
          }}
          className="block py-2.5 px-4 text-white hover:bg-blue-600"
        >
          Dashboard
        </Link>
        <Link
          to="/profile"
          onClick={() => {
            onPageChange("Profile");
            toggleDrawer();
          }}
          className="block py-2.5 px-4 text-white hover:bg-blue-600"
        >
          Profile
        </Link>
        <Link
          to="/settings"
          onClick={() => {
            onPageChange("Settings");
            toggleDrawer();
          }}
          className="block py-2.5 px-4 text-white hover:bg-blue-600"
        >
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Drawer;
