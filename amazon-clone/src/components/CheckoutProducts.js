import React, { useContext } from "react";
import ShoppingContext from "../Shopping/ShoppingContext";
import "./CheckoutProducts.css";

const CheckoutProducts = ({ id, image, title, rating, price, hideButton }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContext;

  const addToBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  return (
    <div className="checkout__product">
      <img className="checkout__product__image" src={image} alt="" />
      <div className="checkout__product__info">
        <p className="checkout__product__title">{title}</p>
        <div className="checkout__product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
        <p className="checkout__product__price">
          <small>R</small>
          <strong>{price}</strong>
        </p>

        
      <button className="checkout__product__button" onClick={addToBasketHandler}>
        Add to Basket
      </button>
      {!hideButton && (
        <button onClick={removeFromBasketHandler}>Remove from Basket</button>
      )}
      </div>
    </div>
  );
};

export default CheckoutProducts;
