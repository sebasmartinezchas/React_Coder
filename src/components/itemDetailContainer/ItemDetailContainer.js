import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productList", productId);
    getDoc(docRef)
      .then((doc) => {
        const productFormatted = { id: doc.id, ...doc.data() };
        setProduct(productFormatted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailContainer;
