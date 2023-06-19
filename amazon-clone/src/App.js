import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Header from "./components/layouts/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/layouts/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <switch>
          <Route path="/" exact>
            <Redirect to="/home" />

          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/product">
            <Product />
          </Route>

          <Route path="/products/:id">
            <ProductDetails />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          </switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
