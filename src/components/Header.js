import React from "react";

const Header = ({ title = "" }) => {
  return (
    <div
      style={{
        height: "15vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      }}
    >
      <p
        style={{
          fontSize: "12px",
          color: "#98BDD3",
          margin: 0,
          padding: 0,
          letterSpacing: "4px"
        }}
      >
        GALLERY
      </p>
      <p
        style={{
          fontSize: "24px",
          color: "#1D3589",
          fontWeight: "800",
          margin: 0,
          padding: 0
        }}
      >
        {title.toUpperCase()}
      </p>
    </div>
  );
};

export default Header;
