import { useState,useEffect,createContext } from "react"

 const CartContext=createContext()
export const CartProvider=({children})=>{
    const[cart,setCart]=useState([])
    console.log(cart)  
    useEffect(()=>{
        let totalQuantityInCart=0;
        cart.forEach(product=>{
        totalQuantityInCart+=product.quantity
        })
        setTotalQuantityInCart(totalQuantityInCart)
         
    },[cart])
    
    const[totalQuantityInCart,setTotalQuantityInCart]=useState(0)
    const addItemToCart=(itemToAdd)=>{
      if(!isItemInCart(itemToAdd.id)){
        setCart([...cart,itemToAdd])
      }
    }
    const removeItemFromCart=(id)=>{
        const cartAfterRemoveItem=cart.filter(product=>product.id!==id)
        setCart(cartAfterRemoveItem)
    } 
    
    const isItemInCart=(id)=>{
        return cart.some(product=>product.id===id)
    }
    // const getQuantityItemInCart=()=>{
    //     let totalQuantityInCart=0;
    //     cart.forEach(product=>{
    //         totalQuantityInCart+=product.quantity
    //     })
    //     return totalQuantityInCart

    // }
    return(
        <CartContext.Provider value={{cart,addItemToCart,removeItemFromCart,isItemInCart,totalQuantityInCart}}>
            {children}
             </CartContext.Provider>
    )
}

export default CartContext