import React from 'react';
import "../css/style.css";
import "../css/style.scss";
import "../css/responsive.css";
import { Link } from "react-router-dom";

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

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  ">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    Who We Are
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/our-services">
                    What We Do
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/why-us">
                    Why Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact-us">
                    Contact
                  </Link>
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
