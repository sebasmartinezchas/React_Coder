
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../itemCart/ItemCart";
import './Cart.css'

const Cart = () => {
  const { cart,clearCart,totalPurchase } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <h1>Su Carrito de compras </h1>

      {cart.map((product) => (
        <ItemCart key={product.id} {...product} />
      ))}
      <h2>El total de su compra es:${totalPurchase}</h2>
      <div className="button-cart">
      <button className="create-order">Crear Orden</button>
      <button className="remove-order" onClick={clearCart}>Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;