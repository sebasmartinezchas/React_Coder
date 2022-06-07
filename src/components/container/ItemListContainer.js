import React from "react";
import { useEffect, useState } from "react";
import itemListContainer from "../container/itemListContainer.css";
import { getProductsAsync, getProductsAsyncByCategory } from "../../asyncmock";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);

  const[searching,setSearching]=useState(true)
  const {categoryId}=useParams()

  useEffect(() => {
    setSearching(true)
    if(!categoryId){
      getProductsAsync().then((product) => {
        setProductList(product)
      }).catch(error=>{
        console.log(error)
      }).finally(()=>{
        setSearching(false)
      })

    }else{
      getProductsAsyncByCategory(categoryId).then((product) => {
        setProductList(product)
      }).catch(error=>{
        console.log(error)
      }).finally(()=>{
        setSearching(false)
      })

    }
   
  }, [categoryId]);
  if(searching){
    return<h1>Buscando tus productos...</h1>
  }

  return (
    <div className="card-container">
      <h1>{greeting}</h1>

      <ItemList productList={productList} />
    </div>
  );
};

export default ItemListContainer;
