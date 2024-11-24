import React, { useState } from "react";
import { Tooltip } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  ToolOutlined,
  ProfileOutlined,
  EditOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Sidemenu = () => {
  // State to manage the active menu item
  const [activeMenu, setActiveMenu] = useState("home");

  // Menu items
  const menuItems = [
    { key: "home", icon: <HomeOutlined />, label: "Home", path: "/" },
    { key: "education", icon: <FileTextOutlined />, label: "education", path: "/education" },
    { key: "experience", icon: <ToolOutlined />, label: "experience", path: "/experience" },
    { key: "projects", icon: <ProfileOutlined />, label: "projects", path: "/projects" },
    { key: "contact", icon: <EditOutlined />, label: "contact", path: "/contact" },
  ];

  return (
    <div className="h-[80%] w-20 flex flex-col items-center py-4 border-r bg-white rounded-full border-gray-300 shadow-lg gap-8">
      {/* Top Section */}
      <div className="mb-10">
        <button
          className="p-3 rounded-full bg-gray-200 hover:bg-purple-500 transition-all duration-300 text-xl"
          onClick={() => console.log("Toggle theme")}
        >
          🌗 {/* Add a theme toggle icon here */}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-6">
        {menuItems.map((item) => (
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
        ))}
      </div>
    </div>
  );
};
