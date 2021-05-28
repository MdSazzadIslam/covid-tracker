import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <nav className="navbar_bottom_menu fixed-bottom">
        <h6 className="footer_title">
          Copyright &copy; {new Date().getFullYear()} Md Sazzadul Islam
        </h6>
      </nav>
    </div>
  );
};

export default Footer;
