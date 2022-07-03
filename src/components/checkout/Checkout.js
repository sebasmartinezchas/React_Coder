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
  doc,//eslint-disable-line
} from "firebase/firestore";
import { db } from "../../services/firebase/index";
import CartContext from "../../context/CartContext";
import "./Checkout.css";
import NotificationContext from "../../notification/Notification";
import Spinner from "../spinner/Spinner";
import FormInput from "../formInput/FormInput";

const Checkout = () => {
  const { cart, totalPurchase, clearCart, totalQuantityInCart } =
    useContext(CartContext);
  const setNotification = useContext(NotificationContext);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    adress: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Nombre Completo",
      errorMessage:
        "Ingrese su nombre sin espacios ni caracteres especiales,minimo de 4 letras y máximo de 30",
      label: "Nombre",
      pattern: "^[A-Za-z0-9]{4,30}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Ingrese un email válido",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "Telefono",
      errorMessage: "Ingrese su número de telefono",
      label: "Telefono",
      required: true,
    },
    {
      id: 4,
      name: "adress",
      type: "text",
      placeholder: "Dirección",
      errorMessage: "No olvide su dirección",
      label: "Dirección",
      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleCreateOrder = () => {
    setLoading(true);
    const objOrder = {
      buyer: values,
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
    );
  }
  if (!totalQuantityInCart) {
    return (
      <div>
        <h1 className="cart-empty">
          No hay productos en su carrito pendientes de comprar
        </h1>
        <Link to="/">
          <button className="button-navigate">
            Conozca mas de nuestros productos
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form onClick={handleSubmit}>
        <h1>Ingrese sus datos</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button className="create-order" onClick={handleCreateOrder}>
          Crear Orden
        </button>
      </form>
    </div>
  );
};

export default Checkout;
