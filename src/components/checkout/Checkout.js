import React, { useState, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/index";
import CartContext from "../../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart, totalPurchase } = useContext(CartContext);
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    adress: "",
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const sendData = (e) => {
    e.preventDefault();
  };
  const handleCreateOrder = () => {
    const objOrder = {
      buyer: data,
      items: cart,
      total: totalPurchase,
    };
  
    const collectionRef = collection(db, "orders");

    addDoc(collectionRef,objOrder).then(({ id } )=>{
        console.log(id)

    })
  };
  return (
    <>
      <h1> Ingrese sus datos y finalize su orden de compra</h1>
      <form className="form-group" onSubmit={sendData}>
        <div>
          <label htmlFor="fullname">Nombre Completo</label>
        </div>
        <input
          type="text"
          id="fullname"
          placeholder="Ingrese su nombre completo"
          name="fullname"
          onChange={handleInputChange}
        />

        <div>
          <label htmlFor="email">Email</label>
        </div>
        <input
          type="email"
          placeholder="ingrese su email"
          id="email"
          name="email"
          onChange={handleInputChange}
        />

        <div>
          <label htmlFor="phone">Telefono</label>
        </div>
        <input
          type="text"
          id="phone"
          placeholder="Su teléfono"
          name="phone"
          onChange={handleInputChange}
        />

        <div>
          <label htmlFor="adress">Dirección</label>
        </div>
        <input
          type="text"
          placeholder="Ingrese su dirección"
          id="adress"
          name="adress"
          onChange={handleInputChange}
        />
        <div>
          <button
            className="create-order"
            type="submit"
            onClick={handleCreateOrder}
          >
            Crear Orden
          </button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
