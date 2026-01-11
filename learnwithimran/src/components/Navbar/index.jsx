import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = ({ theme }) => {
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: theme.theme === "light" ? "white" : "black",
        color: theme.theme === "light" ? "black" : "white",
      }}
    >
      <div className="navbar-links">
        <Link
          to="/"
          style={{ color: theme.theme === "light" ? "black" : "white" }}
        >
          Home
        </Link>
        <Link
          to="/products"
          style={{ color: theme.theme === "light" ? "black" : "white" }}
        >
          Products
        </Link>
        <Link
          to="/products/123/large-size"
          style={{ color: theme.theme === "light" ? "black" : "white" }}
        >
          Product
        </Link>
        <Link
          to="/signup"
          style={{ color: theme.theme === "light" ? "black" : "white" }}
        >
          Signup
        </Link>
      </div>
      <div className="navbar-toggle-theme">
        <button
          onClick={() =>
            theme.setTheme(theme.theme === "light" ? "dark" : "light")
          }
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
