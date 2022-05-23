import React from 'react'
import IitemListContainer from '../container/itemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer