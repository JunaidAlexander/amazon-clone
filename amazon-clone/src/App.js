import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layouts/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/layouts/Login";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("userInfo", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <>
        <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/products">
              <Products />
            </Route>

            <Route path="/products/:id">
              <ProductDetails />
            </Route>

            <Route path="/login">
              <Login onLogin={loginHandler} />
            </Route>

            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </main>
      </>
    </Router>
  );
};

export default App;


// checkout {isLogin  > Payment }