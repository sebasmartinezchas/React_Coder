import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../itemCart/ItemCart";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalPurchase, totalQuantityInCart } =
    useContext(CartContext);

  if (!totalQuantityInCart) {
    return (
      <div>
        <h1 className="cart-empty">No hay productos en su carrito</h1>
        <Link to="/">
          <button className="button-navigate">Conozca nuestros productos</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Su Carrito de compras </h1>

      {cart.map((product) => (
        <ItemCart key={product.id} {...product} />
      ))}
      <h2>El total de su compra es:${totalPurchase}</h2>
      <div className="button-cart">
        <Link to='/checkout'>     
          <button className="checkout">Checkout</button>
        </Link>

        <button className="remove-order" onClick={clearCart}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
