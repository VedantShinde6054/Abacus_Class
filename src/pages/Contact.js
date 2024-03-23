import React, { Fragment } from "react";
import Menu from "../components/Menu";

import "../assets/css/Contact.css";
import bgimg from "../assets/images/back-3.jpeg";

function Contact() {
  return (
    <Fragment>
      <Menu />
      <div
        className="main-container"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <section id="section-wrapper">
          <div className="box-wrapper">
            <div className="info-wrap">
              <h2 className="info-title">Contact Information</h2>
              <h3 className="info-sub-title">
                Fill up the form and our Team will get back to you within 24
                hours
              </h3>
              <ul className="info-details">
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span>Phone:</span>
                  <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a>
                </li>
                <li>
                  <i className="fas fa-paper-plane"></i>
                  <span>Email:</span>
                  <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                </li>
                <li>
                  <i className="fas fa-globe"></i>
                  <span>Website:</span> <a href="#">yoursite.com</a>
                </li>
              </ul>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="form-wrap">
              <form action="#" method="POST">
                <h2 className="form-title">Send us a message</h2>
                <div className="form-fields">
                  <div className="form-group">
                    <input
                      type="text"
                      className="fname"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="lname"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <input type="email" className="email" placeholder="Mail" />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="phone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Send Message"
                  className="submit-button"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
export default Contact;
