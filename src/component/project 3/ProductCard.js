import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="item-info">
      <img width="310px" height="500px" src={item?.img}></img>
      <div className="Collection">
        {item?.choice == true ? "Studio Collection" : ""}
      </div>
      <div className="item-title">{item?.title}</div>
      <div className="item-price">₩{item?.price}</div>
      <div className="new-item">{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
