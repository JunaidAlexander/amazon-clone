import React from "react";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
<div className="Products">
    <div className="products__row">
      <Product
        id="1"
        title="Snpurdiri 60% Wireless Gaming Keyboard and Mouse Combo,LED Backlit Rechargeable 2000mAh Battery,Mini Mechanical Feel Anti-ghosting Keyboard + 6D 3200DPI Mouse for PC Gamer (White)"
        image="https://m.media-amazon.com/images/I/71WC8BRp3wL._AC_SX425_.jpg"
        rating={5}
        price={70.99}
      />

<Product
        id="2"
        title="Razer BlackWidow V4 Pro Wired Mechanical Gaming Keyboard: Yellow Mechanical Switches - Linear & Silent - Doubleshot ABS Keycaps - Command Dial - Programmable Macros - Chroma RGB - Magnetic Wrist Rest"
        image="https://m.media-amazon.com/images/I/81L4FpeS3VL._AC_SX679_.jpg"
        rating={4.5 }
        price={229.99}
      />
    </div>
<div className="products__row">
        <Product
        id="3"
        title="Ractous RTK61P 60% Mechanical Gaming Keyboard RGB Backlit PBT Pudding keycaps 61key Ultra-Compact Wired Keyboard Programmable for PC/Mac Gamers,Hot-Swappable Gateron Optical Brown Switch (White)"
        image="https://m.media-amazon.com/images/I/61HZO9UIIbL._AC_SX679_.jpg"
        rating={4.6}
        price={26.99}
      />

        <Product
        id="2"
        title="Womier 60% Percent Keyboard, WK61 Mechanical RGB Wired Gaming Keyboard, Hot-Swappable Keyboard Blue Sea Theme with PBT Keycaps for Windows PC Gamers - Red Switch"
        image="https://m.media-amazon.com/images/I/71PB7gOSePL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
        rating={4.5 }
        price={229.99}
      />
      </div>
      </div>
  );
};

export default Products;
