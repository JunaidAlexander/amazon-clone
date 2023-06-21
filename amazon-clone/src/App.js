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
  return (
    <Router>
      <>
        <Header />
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
              <Login />
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
