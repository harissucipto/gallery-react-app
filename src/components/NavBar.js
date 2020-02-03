import React from "react";

import iconPicture from "../images/icon-picture.png";
import iconText from "../images/icon-text.png";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "10vh"
      }}
    >
      <NavItem icon={iconPicture} linkRoute="/" />
      <NavItem icon={iconText} linkRoute="/post" />
    </div>
  );
};

export default NavBar;
