import React from "react";
import { useContext } from "react";

import CartContext from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import "../itemDetail/ItemDetail.css";
import NotificationContext from "../../notification/Notification";

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
  const { addItemToCart, isItemInCart } = useContext(CartContext);
  const setNotification = useContext(NotificationContext);
  const isItemAdded = isItemInCart(id);

  const handleCart = (quantity) => {
    setNotification("success", `Se agregaron ${quantity} ${name}`);
    addItemToCart({ name, price, quantity, id });
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
        {!isItemAdded ? (
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
