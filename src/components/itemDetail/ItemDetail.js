import React from 'react'



const ItemDetail = ({id, name,description2,img}) => {
  return (
    <>
        <h2>Card de detalle</h2>
      
       {name}
       {id}
<img src={img} alt={name}/>
{description2}
        
    </>
  )
}

export default ItemDetail