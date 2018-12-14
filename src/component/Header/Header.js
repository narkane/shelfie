import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

export default function Header() {
  return (
    <div>
      Header
      <nav className="nav">
        <div>WestSide University</div>
        <div className="link-wrap">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/form" className="links">
            Form
          </Link>
        </div>
      </nav>
      {routes}
    </div>
  );
}
