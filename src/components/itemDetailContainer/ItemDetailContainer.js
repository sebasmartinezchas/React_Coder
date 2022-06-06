import React from "react";
import { useEffect, useState } from "react";
import { getProductsAsyncById } from "../../asyncmock";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const params = useParams()

  console.log(params)
  useEffect(() => {
    getProductsAsyncById(params.productId).then(response => {
        setProduct(response)
        
    })
}, [])

  return (
    <>
      <h1>Detalle del producto</h1>
      <ItemDetail {...product}/>
    </>
  );
};

export default ItemDetailContainer;
