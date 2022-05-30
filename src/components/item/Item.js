import React from 'react'
import '../item/item.css'

const Item = ({name,img,price}) => {
  return (
    <div className='card-container'>
        <img src={img} alt={name}/>
        <div>
        {name}
        </div>
        <div>
        {price}
        </div>
        </div>
  )
}

export default Item