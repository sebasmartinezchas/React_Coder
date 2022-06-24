import React from "react";
import { useEffect, useState } from "react";
import itemListContainer from "../container/itemListContainer.css"; //eslint-disable-line
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import Spinner from "../spinner/Spinner";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  const [searching, setSearching] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setSearching(true);
    const collectionRef = categoryId
      ? query(
          collection(db, "productList"),
          where("category", "==", categoryId)
        )
      : collection(db, "productList");
    getDocs(collectionRef)
      .then((response) => {
        const productListFormatted = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProductList(productListFormatted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSearching(false);
      });
  }, [categoryId]);
  if (searching) {
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="card-container">
      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;
