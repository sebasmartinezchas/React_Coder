import React from "react";

const CartWidgets = () => {
  return (
    <div>
      <a href="/" className="item">
        <div className="group">
          <i className="material-icons">shopping_cart</i>
          <div className="detail">
            Carrito
            <div className="sub">$ 0.0</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CartWidgets;
