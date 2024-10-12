import React from "react";
import "./Sidebar.css";

const SidebarRight = ({ children }) => {
  return (
    <div className="sidebar__right">
      <div className="trending"></div>
      <div className="promoted"></div>
      <div className="tip"></div>
      {children}
    </div>
  );
};

export default SidebarRight;
