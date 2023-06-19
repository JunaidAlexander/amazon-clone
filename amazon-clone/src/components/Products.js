import React from "react";
import "./Products.css";


const Products = () => {
  return (
    <div className="products">
      <img
        src="https://m.media-amazon.com/images/I/71WC8BRp3wL._AC_SX425_.jpg"
        alt=""
      />
      <div className="product__info">
        <p>
          {" "}Snpurdiri 60% Wireless Gaming Keyboard and Mouse Combo,LED
          Backlit Rechargeable 2000mAh Battery,Mini Mechanical Feel
          Anti-ghosting Keyboard + 6D 3200DPI Mouse for PC Gamer (White)
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
        <p className="product__price">R700</p>
      </div>
    </div>
  );
};

export default Products;
