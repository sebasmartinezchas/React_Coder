import React,{useContext} from "react";
import CartContext from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ id,name, quantity, price }) => {
  const{removeItemFromCart}=useContext(CartContext)
  const handleRemoveItem=(e)=>{
    e.stopPropagation()
    removeItemFromCart(id)
  }
  return (
    <div>
      <div className="cart-details">
        <div className="cart-item">{name}</div>
        <div className="cart-item" >Cantidad:{quantity}</div>
        <div className="cart-item">Precio:${price}</div>
        <div className="cart-item">Subtotal:${price * quantity}</div>
        <div className="cart-item remove" onClick={handleRemoveItem}>X</div>
      </div>
    </div>
  );
};

export default ItemCart;