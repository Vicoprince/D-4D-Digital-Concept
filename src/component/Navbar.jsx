import React from 'react';
import "../css/style.css";
import "../css/style.scss";
import "../css/responsive.css";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <div class="hero_bg_box">
        <div class="bg_img_box">
          <img src="./images/bg2.png" alt="background hero" />
        </div>
      </div>

      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="/">
              <span>D & 4D Digital Concept</span>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class=""> </span>
            </button>

            {/* <Nav>
              <Nav.Link href="/">HOME</Nav.Link>
            </Nav> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  ">
                <li class="nav-item">
                  <Nav.Link class="nav-link" href="/">HOME</Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link class="nav-link" href="/about">Who We Are</Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link class="nav-link" href="/our-services">What We Do</Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link class="nav-link" href="/why-us">Why Us</Nav.Link>
                </li>
                <li class="nav-item">
                  <Nav.Link class="nav-link" href="/contact-us">Contact</Nav.Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar
