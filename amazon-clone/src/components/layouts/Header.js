import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingContext from "../../Shopping/ShoppingContext";  
import { auth } from "../../firebase";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;
  
  const handlerAuthenticaton = () => {
    if(user){
      auth.signOut();

    }
  
  }
  
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src="" alt="amazon logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__input" />
        <SearchIcon className="header__searchIcon" />
      </div>

<div className="header__nav">    
    <Link to={!user  && "/login"}>

    <div className="header__option" onClick={handlerAuthenticaton}>

<span
 className="header__optionOne">
  Hello {!user  ? "Guest" : user.email } 
  </span> 

<span className="header__optionTwo">
  {user ? "Sign Out": "Sign In"}
  </span>
</div>
</Link>



<div className="header__option">
<span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionTwo header__basketCount">{basket?.length}</span>

        </div>
      </div>
    </header>
  );
};

export default Header;
