import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activated" : "link")}
           end >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activated" : "link")}
              to="/About"
              end
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;