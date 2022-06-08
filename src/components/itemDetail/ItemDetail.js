import React from 'react'



const ItemDetail = ({id, name,description2,img,description,price,priceStr}) => {
  return (
    <>
        <h1>{name}</h1>
        <div><img src={img} alt={name}/></div>
        <h2>{description}</h2>
        <h3>{description2}</h3>
        <h4>{priceStr}{price}</h4>
      
    
        
    </>
  )
}

export default ItemDetail