import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./../ContextAPI/StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo on left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option1">
              Hello, {!user ? "Guest" : user?.email}
            </span>
            <span className="header__option2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__option1">Returns</span>
            <span className="header__option2">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option1">Your</span>
            <span className="header__option2">Prime</span>
          </div>
        </Link>

        {/* Basket icon */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__optionBasket--icon" />
            <span className="header__option2 header__optionBasket--count ">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
