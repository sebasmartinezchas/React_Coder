import React from 'react'
import Item from '../item/Item'


const ItemList = ({productList}) => {
  return (
    <div>
           {productList.map(product=><Item key={product.id} {...product}/>)}
    </div>
  )
}

export default ItemList