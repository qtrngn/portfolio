import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img
          src={Logo}
          alt="logo"
          className="w-30 h-auto absolute top-2 left-4"
        />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
