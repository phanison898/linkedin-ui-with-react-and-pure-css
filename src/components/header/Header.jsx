import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://raw.githubusercontent.com/phanison898/github-drive/refs/heads/main/logo.png"
          alt="it's a logo"
        />
      </div>
      <div className="search__user">
        <SearchRoundedIcon />
        <input type="text" placeholder="Search username" />
      </div>
      <div className="icons">
        <HomeRoundedIcon />
        <PeopleAltRoundedIcon />
        <WorkRoundedIcon />
        <ChatRoundedIcon />
        <NotificationsNoneRoundedIcon />
        <AccountCircleRoundedIcon />
        <AppsRoundedIcon />
      </div>
      {children}
    </div>
  );
};

export default Header;
