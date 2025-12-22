import React from "react";
import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>This is header.</h2>
      <nav>
        {/* <a href="/">Home</a>
        <a href="/mobiles">Mobile</a>
        <a href="/laptops">Laptop</a>
        <a href="/">Home</a> */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/Mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;
