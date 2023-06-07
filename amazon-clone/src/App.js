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
          <Route path="/home" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/products/:id" component={ProductDetails} />
        </main>
      </div>
    </Router>
  );
};

export default App;
