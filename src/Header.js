import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon></SearchIcon>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HomeRoundedIcon />
        <AddBoxOutlinedIcon />
        <ExploreOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
        <Avatar sx={{ height: "25px", width: "25px" }} />
      </div>
    </div>
  );
}

export default Header;
