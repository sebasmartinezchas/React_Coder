import React from "react";
import Item from "../item/Item";

const ItemList = ({ productList }) => {
  return (
    <>
      {productList.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </>
  );
};

export default ItemList;
