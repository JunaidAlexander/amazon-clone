import "./App.css";
import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layouts/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/layouts/Login";
import NotFoundPage from "./components/NotFoundPage";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import ShoppingContext from "./Shopping/ShoppingContext";
import { auth } from "./firebase.js";

const promise = loadStripe(
  "pk_test_51NNjmmJ0xtNaiBrcYa1WFuSi1lwFo6WavCX0gaTgQb6jLMwfmGNwKanyLuM50i84y1rkpuJ6xnuFSuLTxjkpcjph00rEJbC2ay"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser, getBasket } = shoppingContext;

  useEffect(
    () => {
      const unsubscribe = auth.onAuthStateChanged(authUser => {
        if (authUser) {
          setUser(authUser);
          getBasket();
        } else {
          setUser(null);
        }
      });

      return () => unsubscribe(); // Cleanup function to unsubscribe from the listener
    },
    [setUser, getBasket]
  );

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
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

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
