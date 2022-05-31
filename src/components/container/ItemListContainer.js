import React from "react";
import { useEffect, useState } from "react";
import itemListContainer from "../container/itemListContainer.css";
import { getProductsAsync } from "../../asyncmock";
import ItemList from "../itemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProductsAsync().then((response) => {
      setProductList(response);
    });
  }, []);

  return (
    <div className="card-container">
      <h1>{greeting}</h1>

      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;
