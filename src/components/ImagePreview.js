import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const ImagePreview = () => {
  const { isOpenImage, linkImagePreview } = useStoreState(state => state.app);
  const { closeImagePreview } = useStoreActions(actions => actions.app);

  return isOpenImage ? (
    <div
      onClick={closeImagePreview}
      style={{
        backgroundColor: "rgba(0, 0, 0, .7)",
        position: "absolute",
        height: "100vh",
        width: "480px",
        padding: "20px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div>
        <img src={linkImagePreview} width="100%" alt="gambar preview" />
      </div>
    </div>
  ) : null;
};

export default ImagePreview;
