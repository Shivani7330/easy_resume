import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.scss";


const Navbar = () => {
 
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            Resume_Creator
          </Link>
        </div>
        <div className="navbar-menu">
          <NavLink
            to="/templates"
            className={({ isActive }) =>
              `${isActive ? "active" : "not-active"} navbar-item`
            }
          >
            Templates
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "active" : "not-active"} navbar-item`
            }
          >
            About Us
          </NavLink>
         
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
