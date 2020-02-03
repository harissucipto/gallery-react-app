import React from "react";

import LayoutPage from "../components/LayoutPage";
import ImageList from "../components/ImageList";

const Photos = () => {
  return (
    <LayoutPage title="my favorite photos">
      <div>
        <ImageList />
      </div>
    </LayoutPage>
  );
};

export default Photos;
