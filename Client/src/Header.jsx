// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
            <div className="logo_name"><Link to="/Landing" style={{color: "white"}}>HomiWise</Link></div>
          
          <ul className="navbar-menu">
            <Link to="/Landing">Home</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Listing">Listing</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
