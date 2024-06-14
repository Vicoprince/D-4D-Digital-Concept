import React from 'react';
import "../css/style2.css";

const ContactForm = () => {
  return (
    <>
      <section class="contact-section">
        <div class="section-header">
          <div class="container">
            <h2>Contact Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div class="contact-container">
          <div class="contact-row">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-home"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Address</h4>
                  <p>
                    Isolo, Lagos, Nigeria.
                  </p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-phone"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Phone</h4>
                  <p>+(234) 913 222 2267, +(234) 913 444 4463</p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-envelope"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Email</h4>
                  <p>gn4ddigitalconceptsenterprises@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <form action="" id="contact-form">
                <h2>Reach Out To Us!</h2>
                <div class="input-box">
                  <input type="text" required="true" name="" />
                  <span>Full Name</span>
                </div>

                <div class="input-box">
                  <input type="email" required="true" name="" />
                  <span>Email</span>
                </div>

                <div class="input-box">
                  <textarea required="true" name=""></textarea>
                  <span>Type your Message...</span>
                </div>

                <div class="input-box">
                  <input type="submit" value="Send" name="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm