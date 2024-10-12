import React from "react";
import "./Sidebar.css";

const SidebarLeft = ({ children }) => {
  return (
    <div className="sidebar__left">
      <div className="user__details"></div>
      <div className="insights"></div>
      <div className="options"></div>
      {children}
    </div>
  );
};

export default SidebarLeft;
