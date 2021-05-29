import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar_menu fixed-top">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        {/* <ul className="arama">
          <li className="input-group">
            <input
              type="search"
              name="ara"
              className="form-control"
              placeholder="Enter country name here"
            />
            <button className="btn">
              <span className="material-icons">search</span>
            </button>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Header;
