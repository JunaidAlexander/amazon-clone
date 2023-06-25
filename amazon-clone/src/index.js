import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import AuthContext from "./components/Context/authContext";
import ShoppingState from "./Shopping/ShoppingState"

ReactDOM.render(
  <BrowserRouter>
    <AuthContext.Provider>
      <ShoppingState>
        <Route path="/" component={App} />
      </ShoppingState>
    </AuthContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
