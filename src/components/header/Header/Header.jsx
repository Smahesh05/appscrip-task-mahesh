import React from "react";
import { FaChevronDown, FaSearch, FaShoppingBag } from "react-icons/fa";
import { FaHeart, FaUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

import "./Header.css";

const Header = () => {
  return (
    <div className="main-header">
      <div className="">
        <span className="hamicon">
          <RxHamburgerMenu />
        </span>
        <img src="/assets/logo.png" alt="Symbol" className="logo-symbol" />
      </div>

      <div className="center-logo">LOGO</div>

      <div className="header-icons">
        <FaSearch className="1" />
        <FaHeart className="2" />
        <FaShoppingBag className="3" />
        <FaUser className="usericon" />
        <div className="lang">
          ENG <FaChevronDown size={12} />
        </div>
      </div>
    </div>
  );
};

export default Header;
