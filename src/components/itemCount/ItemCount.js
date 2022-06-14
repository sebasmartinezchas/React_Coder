import "./itemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial = 0, addToCart }) => {
  const [quantity, setQuantity] = useState(initial);

  const addItem = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const deduct = () => {
    if (quantity > 0) setQuantity(quantity - 1);
    console.log("hice click");
  };

  return (
    <div>
      <div className="button-group">
        <button onClick={deduct} className='button-count'>-</button>
        <h4 className="item-quantity">{quantity}</h4>
        <button onClick={addItem} className='button-count'>+</button>
      </div>
      <div>
        <button className="button-add" onClick={() => addToCart(quantity)}>
          <span className="text-add">Agregar al carrito</span>
          
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
