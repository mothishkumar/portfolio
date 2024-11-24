import React, { useState,useEffect } from "react";
import { Tooltip } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  ToolOutlined,
  ProfileOutlined,
  EditOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Sidemenu = ({ isDarkMode, toggleDarkMode }) => {
  // State to manage the active menu item
  const [activeMenu, setActiveMenu] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  // Menu items
  const menuItems = [
    { key: "home", icon: <HomeOutlined />, label: "Home", path: "/" },
    { key: "education", icon: <FileTextOutlined />, label: "education", path: "/education" },
    { key: "experience", icon: <ToolOutlined />, label: "experience", path: "/experience" },
    { key: "projects", icon: <ProfileOutlined />, label: "projects", path: "/projects" },
    { key: "contact", icon: <EditOutlined />, label: "contact", path: "/contact" },
  ];

  // Detect if the device is mobile
  const detectDevice = () => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth < 1024);
  };

  // Check device on initial load and window resize
  useEffect(() => {
    detectDevice();
    window.addEventListener('resize', detectDevice);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', detectDevice);
    };
  }, []);

  return (
    <div className="h-[80%] w-100 p-2 lg:w-18 flex lg:flex-col items-center py-4 border-r bg-white rounded-2xl border-gray-300 shadow-lg gap-2 lg:gap-8 dark:bg-slate-600">
      {/* Top Section */}
      <div className="lg:mb-10">
        <button
          className="p-3 rounded-full bg-gray-200 hover:bg-purple-500 transition-all duration-300 text-xl"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex lg:flex-col gap-2 lg:gap-6">
        {menuItems.map((item) => (
          // Conditionally render Tooltip only on larger screens
          isMobile ? (
            <Link
              to={item.path} // Update to use the correct path
              className={`bg-purple-400 text-white p-4 rounded-full text-sm flex items-center justify-center transition-all duration-300 ${
                activeMenu === item.key ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-500"
              } hover:bg-purple-400 hover:text-white`}
              onClick={() => setActiveMenu(item.key)}
              key={item.key}
            >
              {item.icon}
            </Link>
          ) : (
            <Tooltip title={item.label} placement="right" key={item.key}>
              <Link
                to={item.path} // Update to use the correct path
                className={`bg-purple-400 text-white p-4 rounded-full text-sm flex items-center justify-center transition-all duration-300 ${
                  activeMenu === item.key ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-500"
                } hover:bg-purple-400 hover:text-white`}
                onClick={() => setActiveMenu(item.key)}
              >
                {item.icon}
              </Link>
            </Tooltip>
          )
        ))}
      </div>
    </div>
  );
};
