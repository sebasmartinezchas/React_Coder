import React from 'react'
import '../itemDetail/ItemDetail.css'



const ItemDetail = ({ name,description2,img,description,price,priceStr}) => {
  return (
    <>
        <h1>{name}</h1>
        <div><img src={img} alt={name} className='image-detail'/></div>
        <h2>{description}</h2>
        <p>{description2}</p>
        <h4>{priceStr}{price}</h4>
      
    
        
    </>
  )
}

export default ItemDetail