import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = ({ isAuthenticated, onLogout }) => {
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
        {isAuthenticated
          ? <div className="header__option" onClick={onLogout}>
              <span className="header__optionOne">Hello User</span>
              <span className="header__optionTwo">Sign Out</span>
            </div>
          : <Link to="/login">
              <div className="header__option">
                <span className="header__optionOne">Hello Guest</span>
                <span className="header__optionTwo">Sign In</span>
              </div>
            </Link>}

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
          <span className="header__optionTwo header__basketCount">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
