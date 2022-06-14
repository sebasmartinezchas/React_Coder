import React from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";


const CartWidgets = () => {
  const {totalQuantityInCart}=useContext(CartContext)
  // const totalQuantityInCart=getQuantityItemInCart;
  console.log(totalQuantityInCart)
  return (
    <div>
      <a href="/" className="item">
        <div className="group">
          <i className="material-icons">shopping_cart</i>
          <div className="detail">
            Carrito
            <div className="sub">{totalQuantityInCart}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CartWidgets;
