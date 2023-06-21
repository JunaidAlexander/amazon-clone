import React from "react";
import "./Product.css";

const Product = ({ id, image, title, rating, price }) => {
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          <p>{rating}</p>
        </div>
        <p className="product__price">{price}</p>
      </div>
      <button className="product__button">Add to Basket</button>
    </div>
  );
};

export default Product;
