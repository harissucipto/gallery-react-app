import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const NavItem = ({ icon, linkRoute = "/" }) => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const handleNavigate = () => push(linkRoute);
  const isSelected = linkRoute === pathname;

  return (
    <div
      onClick={handleNavigate}
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "center",
        alignItems: "center",
        borderTop: isSelected && "2px solid #EBA100",
        cursor: "pointer"
      }}
    >
      <img
        src={icon}
        width={25}
        height={25}
        alt="nav-icon"
        style={{ backgroundColor: isSelected && "#EBA100" }}
      />
    </div>
  );
};

export default NavItem;
