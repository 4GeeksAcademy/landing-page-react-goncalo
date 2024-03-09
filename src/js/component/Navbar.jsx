import React from "react";

const Navbar = ({ title }) => {
  const navBarLinksArray = ["Home", "About", "Services", "Contact"];

  const navBarLinks = () => {
    return navBarLinksArray.map((navLink) => {
      return (
        <a className="navbar-brand text-light font-small" href="#">
          {navLink}
        </a>
      );
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand text-light font-small ml-lg-5"
          href="#"
        >
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{marginRight: "200px"}}>{navBarLinks()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
