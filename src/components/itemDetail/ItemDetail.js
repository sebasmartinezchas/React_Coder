import React from "react";
import { useContext, useState } from "react";

import CartContext from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import "../itemDetail/ItemDetail.css";

const ItemDetail = ({
  name,
  description2,
  img,
  description,
  price,
  priceStr,
  stock,
  id,
}) => {
  const [quantityAddedToCart, setQuantityAddedToCart] = useState(0);
  const { addItemToCart } = useContext(CartContext);

  const handleCart = (quantity) => {
    console.log(`Se agregaron ${quantity} ${name}`);
    addItemToCart({ name, price, quantity, id });
    setQuantityAddedToCart(quantity);
  };
  return (
    <>
      <div className="product-detail">
        <h1 className="name-detail">{name}</h1>
        <div>
          <img src={img} alt={name} className="image-detail" />
        </div>
        <h2 className="description-detail">{description}</h2>
        <p className="description">{description2}</p>
        <span className="product-price">
          {priceStr}
          {price}
        </span>
        {quantityAddedToCart === 0 ? (
          <ItemCount addToCart={handleCart} stock={stock} />
        ) : (
          <div>
            <Link to="/cart">
              <button className="go-to-cart">Terminar Compra</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
