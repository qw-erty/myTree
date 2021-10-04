import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navContainer">
      <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
      <div className="navContainer__leftPart">
      <img
          src="https://www.graphicsprings.com/filestorage/stencils/398af33ebbf9ac1c6daa0093ade9b28e.png?width=500&height=500"
          className="leftPart__logo"
          alt="logo"
        />
      </div></Link>
      <div className="navContainer__rightPart">
        <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link></li>
        <li><Link style={{ textDecoration: 'none', color: 'black'}} to="/contact">Contact Us</Link></li>
        <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/about">About Us</Link></li>
      </div>
    </nav>
  );
};

export default Navbar;
