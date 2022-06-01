import React from "react";
import "../item/item.css";

const Item = ({ description,name, img, price }) => {
  return (
    
    <div>
    <div>
      <img src={img} alt={name} />
    <h2 className="product-description">{description}</h2>
    <p className="product-price">Precio:$ {price}</p>
    </div>
    </div>
  );
};

export default Item;
