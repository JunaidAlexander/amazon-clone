import React, { useContext } from "react";
import "./Product.css";
import { Star } from "@mui/icons-material";
import ShoppingContext from "../Shopping/ShoppingContext";




const Product = ({ id, image, title, rating, price }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;

  const addToBasketHandler = () => {
    addToBasket({
      item: { id, title, image, rating, price },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Star key={i} />
              
            )
       
            )
            
            }
        </div>
        <p className="product__price"><small>R</small><strong>{price}</strong></p>
      </div>
      <button className="product__button" onClick={addToBasketHandler}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
