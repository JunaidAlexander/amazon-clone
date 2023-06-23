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
import AuthContext from "./components/Context/authContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");

    if (userInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  
  return (
    <Router>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
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
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
