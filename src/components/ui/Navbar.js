import React from "react";
import Title from "./Title";

function Navbar() {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{
        backgroundColor: "#373d48",
        color: "#fff",
        padding: 10
      }}
    >
      {/* <div className="navbar-brand">
        <h1 className="navbar-item" href="https://bulma.io">
          OO
        </h1>
      </div> */}

      <Title text="Ómar Óskarsson" style={{ color: "#fff" }} />
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
