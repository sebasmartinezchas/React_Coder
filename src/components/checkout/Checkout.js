import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  where,
  documentId,
  doc,
} from "firebase/firestore";
import { db } from "../../services/firebase/index";
import CartContext from "../../context/CartContext";
import "./Checkout.css";
import NotificationContext from "../../notification/Notification";
import Spinner from "../spinner/Spinner";



const Checkout = () => {
  const { cart, totalPurchase, clearCart, totalQuantityInCart } =
    useContext(CartContext);
  const setNotification = useContext(NotificationContext);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const objOrder = {
      buyer: data,
      items: cart,
      total: totalPurchase,
    };
    const batch = writeBatch(db);
    const ids = cart.map((product) => product.id);
    const outStock = [];
    const prodColRef = collection(db, "productList");
    getDocs(query(prodColRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prod = cart.find((prod) => prod.id === doc.id);
          const productQuantity = prod.quantity;

          if (dataDoc.stock >= productQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - productQuantity });
          } else {
            outStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outStock.length === 0) {
          const collectionRef = collection(db, "orders");
          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({ type: "out_of_stock", products: outStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        clearCart();
        setNotification(
          "success",
          `Su orden se creo correctamente. El Id de su orden es: ${id}`
        );
      })
      .catch((error) => {
        if (error.type === "out_of_stock") {
          setNotification("error", "Hay productos que no tienen stock");
        } else {
          console.log(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  if (loading) {
    return (
      <div className="spinner">
      <Spinner />
    </div>
    )
  }
  if (!totalQuantityInCart) {
    return (
      <div>
        <h1 className="cart-empty">No hay productos en su carrito pendientes de comprar</h1>
        <Link to="/">
          <button className="button-navigate">Conozca mas de nuestros productos</button>
        </Link>
      </div>
    );
  }
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
