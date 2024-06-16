import React from 'react';
import { Nav } from "react-bootstrap";

const CoreValue = () => {
  return (
    <>
      <section class="service_section layout_padding">
        <div class="service_container">
          <div class="container ">
            <div class="heading_container heading_center">
              <h2>
                Our Core <span>Values</span>
              </h2>
              <p>
                At G & 4D's Digital Concepts Limited, our core values are the
                foundation of everything we do. These values guide our actions
                and define our commitment to our clients and partners.
              </p>
            </div>
            <div class="row">
              <div class="col-md-4 ">
                <div class="box ">
                  <div class="img-box">
                    <img src="images/s1.png" alt="Innovation" />
                  </div>
                  <div class="detail-box">
                    <h5>Innovation</h5>
                    <p>
                      We embrace creativity and continuous improvement,
                      pioneering new ideas, technologies, and approaches to
                      drive transformational change.
                    </p>
                    <Nav.Link href="/about">Read More</Nav.Link>
                  </div>
                </div>
              </div>
              <div class="col-md-4 ">
                <div class="box ">
                  <div class="img-box">
                    <img src="images/colaboration.png" alt="Collaboration" />
                  </div>
                  <div class="detail-box">
                    <h5>Collaboration</h5>
                    <p>
                      We believe in the power of partnership, working closely
                      with clients, partners, and stakeholders to co-create
                      solutions and achieve shared success.
                    </p>
                    <Nav.Link href="/about">Read More</Nav.Link>
                  </div>
                </div>
              </div>
              <div class="col-md-4 ">
                <div class="box ">
                  <div class="img-box">
                    <img src="images/integrity.png" alt="Integrity" />
                  </div>
                  <div class="detail-box">
                    <h5>Integrity</h5>
                    <p>
                      We uphold the highest ethical standards, fostering trust,
                      transparency, and accountability in all our interactions
                      and business practices.
                    </p>
                    <Nav.Link href="/about">Read More</Nav.Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-box">
              <Nav.Link href="/about">
                View All
              </Nav.Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoreValue