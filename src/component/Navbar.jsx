import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import "../css/style.scss";
import "../css/responsive.css";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="./images/bg2.png" alt="background hero" />
        </div>
      </div>

      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <span>D & 4D Digital Concept</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Nav.Link as={Link} to="/" className="nav-link">
                    HOME
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={Link} to="/about" className="nav-link">
                    Who We Are
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={Link} to="/our-services" className="nav-link">
                    What We Do
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={Link} to="/why-us" className="nav-link">
                    Why Us
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link as={Link} to="/contact-us" className="nav-link">
                    Contact
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;