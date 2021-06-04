import React, { Component } from "react";

const NavBar = ({ counters }) => {
  console.log("NavBar");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        NAVBAR <span className="badge-pill badge-secondary">{counters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
