import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img
          src={Logo}
          alt="logo"
          className="w-50 h-auto absolute top-2 left-2 phone-lg:right-7"
        />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-white"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
