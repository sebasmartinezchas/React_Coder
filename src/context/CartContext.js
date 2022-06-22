import { useState, useEffect, createContext } from "react";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const [totalQuantityInCart, setTotalQuantityInCart] = useState(0);
  const [totalPurchase, setTotalPurchase] = useState(0);
  useEffect(() => {
    updatePurchase();
    updateTotalProductInCart();
  }, [cart]); //eslint-disable-line

  const updateTotalProductInCart = () => {
    let totalQuantityInCart = 0;
    cart.forEach((product) => {
      totalQuantityInCart += product.quantity;
    });
    setTotalQuantityInCart(totalQuantityInCart);
  };

  const addItemToCart = (itemToAdd) => {
    if (!isItemInCart(itemToAdd.id)) {
      setCart([...cart, itemToAdd]);
    }
  };
  const removeItemFromCart = (id) => {
    const cartAfterRemoveItem = cart.filter((product) => product.id !== id);
    setCart(cartAfterRemoveItem);
  };

  const isItemInCart = (id) => {
    return cart.some((product) => product.id === id);
  };
  const clearCart = () => {
    setCart([]);
  };
  const updatePurchase = () => {
    let total = 0;
    cart.forEach((products) => {
      total += products.quantity * products.price;
    });
    setTotalPurchase(total);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        isItemInCart,
        totalQuantityInCart,
        clearCart,
        totalPurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
