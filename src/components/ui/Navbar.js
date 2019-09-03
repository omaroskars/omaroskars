import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

function Navbar({ backgroundColor, color }) {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{
        backgroundColor,
        color: color,
        padding: 15,
        boxShadow: "0 0 30px 0 rgba(32,39,48,.08)"
      }}
    >
      {/* <div className="navbar-brand">
        <h1 className="navbar-item" href="https://bulma.io">
          OO
        </h1>
      </div> */}

      <Link to="/">
        <Title text="Ómar Óskarsson" center />
      </Link>
      {/* <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">Log in</a>
          </div>
        </div>
      </div> */}
    </nav>
  );
}

export default Navbar;
