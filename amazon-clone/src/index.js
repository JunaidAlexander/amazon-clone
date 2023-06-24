import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import AuthContext from "./components/Context/authContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthContext.Provider>
      <Route path="/" component={App} />
    </AuthContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
