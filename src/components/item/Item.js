import React from "react";
import "../item/item.css";
import { Link } from "react-router-dom";

const Item = ({ description, name, img, price, id }) => {
  return (
    <div>
      <div>
        <img src={img} alt={name} />
        <h2 className="product-description">{description}</h2>

        <p className="product-price">Precio:$ {price}</p>

        <Link to={`/detail/${id}`}>Ver detalle</Link>
      </div>
    </div>
  );
};

export default Item;
