import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      to_name: "D & 4D Digital Concept",
    };

    emailjs
      .send(
        "service_ympac2i",
        "template_5amc9d8",
        templateParams,
        "WjXFTEx9D_FLBa_Cx"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Thank you for subscribing!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Failed to subscribe. Please try again.");
      });

    setEmail("");
  };

  return (
    <>
      <section class="info_section layout_padding2">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 info_col">
              <div class="info_contact">
                <h4>Address</h4>
                <div class="contact_link_box">
                  <a href="#">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>
                  <a href="#">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +(234) 913 222 2267, +(234) 913 444 4463</span>
                  </a>
                  <a href="#">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>gn4ddigitalconceptsenterprises@gmail.com</span>
                  </a>
                </div>
              </div>
              <div class="info_social">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 info_col">
              <div class="info_detail">
                <h4>Info</h4>
                <p>
                  We are dedicated to providing you with nothing less than great
                  service at all times, and always available to support.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 mx-auto info_col">
              <div class="info_link_box">
                <h4>Links</h4>
                <div class="info_links">
                  <Link to="/">Home</Link>
                  <Link to="/about">
                    Who We Are
                  </Link>
                  <Link to="/our-services">
                    What We Do
                  </Link>
                  <Link to="/why-us">
                    Why Us
                  </Link>
                  <Link to="/contact-us">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 info_col ">
              <h4>Subscribe</h4>
              <form onSubmit={sendEmail}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>

      <section class="footer_section">
        <div class="container">
          <p>
            &copy; <span id="displayYear">2024</span> All Rights Reserved x Tolakins Global Limited 
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
