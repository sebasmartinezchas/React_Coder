import React from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidgets = () => {
  const {totalQuantityInCart}=useContext(CartContext)
  // const totalQuantityInCart=getQuantityItemInCart;
  console.log(totalQuantityInCart)
  return (
    <div>
      <Link to="/cart" className="item">
        <div className="group">
          <i className="material-icons">shopping_cart</i>
          <div className="detail">
            Carrito
            <div className="sub">{totalQuantityInCart}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartWidgets;
