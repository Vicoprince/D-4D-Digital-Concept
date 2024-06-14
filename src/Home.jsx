import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import "./css/style.scss";
import "./css/responsive.css";
import Navbar from "./component/Navbar";
import Script from "./component/Script";
import Footer from "./component/Footer";
import Aboutsection from "./component/Aboutsection";
import CoreValue from "./component/CoreValue";
import WhySection from "./component/WhySection";
import Newslettersection from "./component/Newslettersection";
import Clientsection from "./component/Clientsection";

const Home = () => {
  return (
    <>
      <div class="hero_area">
        <Navbar />

        <section class="slider_section ">
          <div id="customCarousel1" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="detail-box">
                        <h1>
                          Unleashing <br />
                          Digital Potentials
                        </h1>
                        <p>
                          Harness cutting-edge technologies to boost your
                          business productivity and competitiveness.
                        </p>
                        <div class="btn-box">
                          <a href="/about" class="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-box">
                        <img src="images/vector-2.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="detail-box">
                        <h1>
                          Top-Notch Services,
                          <br />
                          Always Available
                        </h1>
                        <p>
                          Providing great service consistently and supporting
                          your digital journey.
                        </p>
                        <div class="btn-box">
                          <a href="/about" class="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-box">
                        <img src="images/vector-2.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="detail-box">
                        <h1>
                          Your Partner in
                          <br />
                          Digital Transformation
                        </h1>
                        <p>
                          Assisting companies in starting or improving their
                          digital journeys.
                        </p>
                        <div class="btn-box">
                          <a href="/about" class="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="img-box">
                        <img src="images/vector-2.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol class="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </section>
      </div>

      <CoreValue />
      <Aboutsection />
      <WhySection />
      <Newslettersection />
      <Clientsection />

      <Footer />
      <Script />
    </>
  );
};

export default Home;
