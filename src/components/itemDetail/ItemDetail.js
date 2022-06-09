import React from "react";
import "../itemDetail/ItemDetail.css";

const ItemDetail = ({
  name,
  description2,
  img,
  description,
  price,
  priceStr,
}) => {
  return (
    <>
      <div className="product-detail">
        <h1>{name}</h1>
        <div>
          <img src={img} alt={name} className="image-detail" />
        </div>
        <h2>{description}</h2>
        <p className="description">{description2}</p>
         <span className="product-price">
          {priceStr}
          {price}
        </span>
      </div>
    </>
  );
};

export default ItemDetail;
