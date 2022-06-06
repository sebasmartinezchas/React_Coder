import React from 'react'



const ItemDetail = ({id, name}) => {
  return (
    <>
        <h2>Card de detalle</h2>
      
       {name}
       {id}
        
    </>
  )
}

export default ItemDetail