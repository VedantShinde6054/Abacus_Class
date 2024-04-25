import React, { Fragment } from "react";
import Menu from "../components/Menu";
import "../assets/css/About.css";
import bgimg from "../assets/images/back-4.jpg";
import Footer from "../components/footer";
import Floatingbutton from "../components/Floatingbutton";
import cer from "../assets/images/ISO_Certificate.jpg";
function About() {
  return (
    <Fragment>
      <Menu />
      <div className="bodyA" style={{ backgroundImage: `url(${bgimg})` }}>
        {/* <div className="navA">
          <Menu />
        </div> */}
        <header className="header1">
          <h1>About Us</h1>
        </header>
        <div className="certified">
          An
          <a href={cer} target="_blank" className="iso">
            {" "}
            ISO{" "}
          </a>
          Certified Classes- Learn Abacus and Vedic Math with Experts
        </div>
        <main className="mainA">
          <section id="mission">
            <div class="content">
              <h2 className="headingA">Our Mission</h2>
              <p>
                <ul>
                  <li>
                    To inspire a love for learning, cultivate critical thinking
                    skills, and nurture personal growth in every student we
                    reach.
                  </li>
                  <br />
                  <li>
                    Our mission is to connect learners with the right online
                    tutors through digital means. We're all united in spreading
                    the love of Math, with dedicated leadership, platform, and
                    tutors.{" "}
                  </li>
                  <br />
                  <li>
                    We aim to maintain top-notch instruction, grow steadily, and
                    offer opportunities for devloping students.
                  </li>
                </ul>
              </p>
            </div>
          </section>

          <section id="vision">
            <div class="content">
              <h2 className="headingA">Our Vision</h2>
              <p>
                <ul>
                  <li>
                    To be a global leader in educational innovation, recognized
                    for our commitment to excellence and the success of our
                    learners.
                  </li>
                  <br />
                  <li>
                    Our goal is to create the nation's premier digital platform
                    for linking students and teachers, democratizing education.
                  </li>
                  <br />
                  <li>
                    We prioritize the holistic development of each child,
                    empowering them to shape their future aspirations.
                  </li>
                </ul>
              </p>
            </div>
          </section>
        </main>
        <section className="InfoA">
          <div className="InfoA1">
            <section className="sec-info">
              <div id="about-info">
                <h3>Information that you need to KNOW </h3>
              </div>
              <br />
              <p>
                <strong>"Acharya Abacus Classes"</strong>is aware that every
                child is different and has the capacity to learn. We created the
                curriculum with the student in mind.
              </p>
              <p>
                Acharya Classes understands the unique learning needs of every
                child and designed our curriculum accordingly.
              </p>
              <p>
                To tackle the challenge parents face in finding abacus and Vedic
                math classes, we introduced an online course.
              </p>
              <p>
                Our sessions cater to both young kids and adults, ensuring
                everyone can benefit from well-organized lessons.
              </p>
              <p>
                Continuously updating our curriculum and employing advanced
                teaching methods, we strive to be India's leading eLearning
                platform for abacus and Vedic Maths.
              </p>
            </section>
          </div>
          <div className="InfoA2">
            <section className="sec-info2">
              <img
                src={require("../assets/images/about1.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </section>
          </div>
        </section>
        <div class="containerA">
          <div class="headerA">
            <h1>Our Team</h1>
          </div>
          <div class="sub-containerA">
            <div class="teamsA">
              <img
                src={require("../assets/images/Archana-Bankar.jpg")}
                alt=""
              />
              <div class="nameA">Archana Bankar</div>
              <div class="desigA">Head</div>
              <div class="aboutA">
                Our Endeavour Is - To 'Simplify The Learning Methods' So That
                Every Student Can RISE. Our Philosophy Of Spreading Education is
                RISE - Research, Innovate, Share & Educate.
              </div>

              <ul class="social-links">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/acharya_aabacus_classes?igsh=MXQyanozZTRxdjdmbQ"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="teamsA">
              <img src={require("../assets/images/Sachin-Bankar.jpg")} alt="" />
              <div class="nameA">Sachin Bankar</div>
              <div class="desigA">Manager</div>
              <div class="aboutA">
                Our Endeavour Is - To 'Simplify The Learning Methods' So That
                Every Student Can RISE. Our Philosophy Of Spreading Education is
                RISE - Research, Innovate, Share & Educate.
              </div>

              <ul class="social-links">
                <li>
                  <a
                    href="https://www.instagram.com/acharya_aabacus_classes?igsh=MXQyanozZTRxdjdmbQ"
                    target="_blank"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/acharya_aabacus_classes?igsh=MXQyanozZTRxdjdmbQ"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="teamsA">
              <img src={require("../assets/images/teacher.png")} alt="" />
              <div class="nameA">Nitin More</div>
              <div class="desigA">Advisor</div>
              <div class="aboutA">
                Our Endeavour Is - To 'Simplify The Learning Methods' So That
                Every Student Can RISE. Our Philosophy Of Spreading Education is
                RISE - Research, Innovate, Share & Educate.
              </div>

              <ul class="social-links">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Floatingbutton />
      <div id="footer-about">
        <Footer />
      </div>
    </Fragment>
  );
}

export default About;
