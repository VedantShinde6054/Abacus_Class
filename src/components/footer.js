import React, { Fragment } from "react";
import "../assets/css/footer.css";

function Footer() {
  return (
    <Fragment>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Acharya <span>Abacus</span> Classes
          </h3>

          <p className="footer-links">
            <li>
              <a href="http://localhost:3000/" className="link-1">
                Home
              </a>

              <a href="http://localhost:3000/StudentRegister">Admision</a>

              <a href="http://localhost:3000/TeacherTraining">
                TeacherTraining
              </a>

              {/* <a href="http://localhost:3000/About">About</a> */}

              {/* <a href="#">Faq</a> */}

              <a href="http://localhost:3000/Contact">Contact Us</a>
            </li>
          </p>

          <p className="footer-company-name">Acharya Abacus Classes © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Prefix Tower</span> Guldagad Estate, Rahuri
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 7709774300</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">Ceoprefix@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the Classes</span>
            An market leading Abacus classes for students and teachers.
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://youtube.com/@user-ji2hp2re7y?si=rWwh8NBGuP_gHBZn"
              target="_blank"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="Ender">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.485171340868!2d74.6562494!3d19.3914323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc9389f2473067%3A0xa351171b5c514733!2sAcharya%20Research%20Institute!5e0!3m2!1sen!2sin!4v1711731729214!5m2!1sen!2sin"
            style={{
              width: "250",
              height: "200",
              style: "border: 0",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </div>
      </footer>
    </Fragment>
  );
}
export default Footer;
