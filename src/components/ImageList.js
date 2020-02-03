import React, { useState } from "react";
import { useInfiniteScroll } from "react-infinite-scroll-hook";
import { useStoreActions } from "easy-peasy";

const ImageList = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const { openImagePreview } = useStoreActions(actions => actions.app);

  const handleLoadMore = async () => {
    setLoading(true);
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=8`
    );
    const newItems = await result.json();
    setLoading(false);
    setPage(page + 1);
    setItems([...items, ...newItems]);
  };

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage: true,
    onLoadMore: handleLoadMore,
    scrollContainer: window
  });

  return (
    <div
      ref={infiniteRef}
      style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
    >
      {items.map(item => (
        <img
          onClick={() => openImagePreview(item.url)}
          src={item.thumbnailUrl}
          key={item.id}
          style={{ width: `calc(50% - ${2}rem)`, margin: "1rem" }}
          alt="img-"
        />
      ))}
      {loading && <p style={{ marginLeft: "1rem" }}>Loading...</p>}
    </div>
  );
};

export default ImageList;
