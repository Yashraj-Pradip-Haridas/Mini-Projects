import React from "react";

const Header = ({ toggleDrawer }) => {
  return (
    <header className="bg-white shadow px-4 py-4 flex justify-between items-center">
      <button
        onClick={toggleDrawer}
        className="block text-2xl lg:hidden focus:outline-none"
      >
        ☰
      </button>
      <h1 className="text-xl font-bold">App Name</h1>
      <div className="flex items-center">
        <p className="mr-4 hidden lg:block">Welcome, User</p>
        <button className="bg-red-500 text-white px-3 py-1 rounded-lg">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
