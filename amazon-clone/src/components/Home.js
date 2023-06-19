import React from "react";
import { Route } from "react-router-dom";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/41s-DsYgxDL._SX1500_.jpg"
          alt="hero image"
        />
        <Product />
      </div>
    </div>
  );
};

export default Home;
