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
<img className="header__logo" src="data:image/png;base64,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" alt="amazon logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__input" />
        <SearchIcon className="header__searchIcon" />
      </div>

<div className="header__nav">    
    <Link to={!user ? "/login" :""}>

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
