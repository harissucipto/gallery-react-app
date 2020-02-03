import React from "react";

import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: `480px`,
        height: "100vh",
        border: "1px solid #EDEAE2",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
      }}
    >
      {children}
      <NavBar />
    </div>
  );
};

export default Layout;
