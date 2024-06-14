import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './NewsletterSignup.css';  // Import the CSS file for styling

const Newslettersection = () => {
  const [email, setEmail] = useState('');

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

    setEmail('');
  };

  return (
    <section class="team_section layout_padding">
        <div class="container-fluid">
            <div class="heading_container heading_center">
                <h2 class="">
                Subscribe to our<span> Newsletter</span>
                </h2>
            </div>

            <div class="team_container">
                <div class="row">
                    <form onSubmit={sendEmail} className="newsletter-form">
                        <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="newsletter-input"
                        />
                        <button type="submit" className="newsletter-button">Subscribe</button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Newslettersection;
