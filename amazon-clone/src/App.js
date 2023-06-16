import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Header from "./components/layouts/Header";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/product">
            <Product />
          </Route>

          <Route path="/product-details/:id">
            <ProductDetails />
          </Route>
        </main>
      </div>
    </Router>
  );
};

export default App;
