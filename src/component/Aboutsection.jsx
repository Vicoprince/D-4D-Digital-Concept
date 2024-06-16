import React from "react";
import { Nav } from "react-bootstrap";

const Aboutsection = () => {
  return (
    <>
      <section class="about_section layout_padding">
        <div class="container  ">
          <div class="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Welcome to G & 4D's Digital Concepts Limited, a proudly African
              company dedicated to empowering businesses through exceptional
              digital services.
            </p>
          </div>
          <div class="row">
            <div class="col-md-6 ">
              <div class="img-box">
                <img src="images/ab1.png" alt="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="detail-box">
                <h3>We Are G & 4D's Digital Concepts Limited</h3>
                <p>
                  G & 4D's Digital Concepts Limited is an indigenous company
                  legally registered with corporate affair commission (CAC) with
                  the goal of assisting other businesses by offering tailored
                  business support - we are proudly African, and our digital
                  services are exceptional.
                </p>
                <p>
                  Our primary responsibility is to assist businesses in
                  embracing the digital era, utilizing cutting-edge
                  technologies, and streamline her operations to increase
                  productivity and competitiveness in the marketplace – we
                  facilitate an organic growth of other businesses throughout
                  their digital lifecycle.
                </p>
                <Nav.Link className="btn-link" href="/about#read_about2">
                  Read More
                </Nav.Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutsection;
