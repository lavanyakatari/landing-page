import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-10 shadow-xl h-20  sticky top-0 bg-white">
      <div>
        <NavLink to="/">LOGO</NavLink>
      </div>
      <div>
        <ul className="flex  items-center gap-4">
          <li>
            <NavLink to="/" className={`active:font-bold active:text-red-500`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
