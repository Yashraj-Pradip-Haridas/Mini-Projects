import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Drawer from "./Drawer"; // New Drawer component
import DashboardHome from "./DashboardHome";
import Profile from "./Profile";
import Settings from "./Settings";

const Dashboard = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard"); // Default page is "Dashboard"
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 850);

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  // Function to render the active page based on the state
  const renderPage = () => {
    switch (activePage) {
      case "Profile":
        return <Profile />;
      case "Settings":
        return <Settings />;
      case "Dashboard":
      default:
        return <DashboardHome />;
    }
  };

  // Function to handle changing pages
  const handlePageChange = (page) => {
    setActivePage(page);
    if (isSmallScreen) {
      setIsDrawerVisible(false); // Close drawer when changing pages on small screens
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 850);
      if (window.innerWidth >= 850) {
        setIsDrawerVisible(false); // Hide drawer on larger screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for larger screens */}
      <div
        className={`hidden lg:block transition-all duration-300 bg-blue-500 w-64`}
      >
        <Sidebar onPageChange={handlePageChange} />
      </div>

      {/* Drawer for small screens */}
      {isSmallScreen && (
        <Drawer
          isVisible={isDrawerVisible}
          toggleDrawer={toggleDrawer}
          onPageChange={handlePageChange}
        />
      )}

      <div className="flex flex-col w-full">
        <Header toggleDrawer={toggleDrawer} />
        <main className="p-6 bg-gray-100 flex-grow">{renderPage()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
