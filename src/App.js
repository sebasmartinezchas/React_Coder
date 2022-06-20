import React from "react";
// import { useState,createContext } from "react";
import "./App.css";
import ItemListContainer from "./components/container/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{CartProvider} from'./context/CartContext'
import Cart from "./components/cart/Cart";



function App() {

  return (
    <div className="App">
     <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
     
    </div>
  );
}

export default App;
