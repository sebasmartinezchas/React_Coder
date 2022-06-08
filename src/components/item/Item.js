import React from "react";
import "../item/item.css";
import { Link } from "react-router-dom";

const Item = ({ description, name, img, price, id,priceStr }) => {
  return (
    <div>
      <div>
        <img src={img} alt={name} />
        <h2 className="product-description">{description}</h2>

        <p className="product-price">{priceStr}{price}</p>

        <Link to={`/detail/${id}`} className='link_detail' ><h3 className='product_detail'>Ver detalle</h3></Link>
      </div>
    </div>
  );
};

export default Item;
