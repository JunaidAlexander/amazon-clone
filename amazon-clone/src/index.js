import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import ShoppingState from "./Shopping/ShoppingState"

ReactDOM.render(
  <BrowserRouter>
    
      <ShoppingState>
        <Route path="/" component={App} />
      </ShoppingState>
  </BrowserRouter>,
  document.getElementById("root")
);
