import React from "react";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="" srcset="" />
      </Link>
      <div className="input-icon">
        <input className="search-input" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default NavBar;
