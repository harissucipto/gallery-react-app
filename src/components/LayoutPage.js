import React from "react";
import Header from "./Header";
import ImagePreview from "./ImagePreview";

const LayoutPage = ({ title, children }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flex: 1,
        flexDirection: "column"
      }}
    >
      <ImagePreview />
      <Header title={title} />
      <div
        style={{
          height: "75vh",
          backgroundColor: "#EDEAE2",
          overflowY: "auto",
          padding: "10px"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutPage;
