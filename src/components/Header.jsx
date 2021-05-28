import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar_menu fixed-top">
        <a href="###" className="logo">
          <strong>L</strong>ogo
        </a>
        <ul className="arama">
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
        </ul>
      </nav>
    </div>
  );
};

export default Header;
