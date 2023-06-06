import React from "react";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div>
      <h1>Product list</h1>
      <ul>
        <li>
          <Link to="/product/:id">Product 1</Link>
        </li>
        <li>
          <Link to="/product/:id">Product 2</Link>
        </li>
        <li>
          <Link to="/product/:id">Product 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
