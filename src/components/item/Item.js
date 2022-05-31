import React from "react";
import "../item/item.css";

const Item = ({ name, img, price }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

export default Item;
