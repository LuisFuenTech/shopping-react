import React from "react";

const NavBar = ({ counters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Shopping Cart{" "}
          <span className="badge badge-pill badge-secondary">{counters}</span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
