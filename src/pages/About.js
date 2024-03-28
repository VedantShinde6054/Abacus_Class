import React, { Fragment } from "react";
import Menu from "../components/Menu";
import "../assets/css/About.css";
import bgimg from "../assets/images/back-4.jpg";

function About() {
  return (
    <Fragment>
      <div className="bodyA" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="navA">
          <Menu />
        </div>
        <header className="header1">
          <h1>About Us</h1>
        </header>

        <main className="mainA">
          <section id="mission">
            <div class="content">
              <h2>Our Mission</h2>
              <p>
                To inspire a love for learning, cultivate critical thinking
                skills, and nurture personal growth in every student we reach.
              </p>
            </div>
          </section>

          <section id="vision">
            <div class="content">
              <h2>Our Vision</h2>
              <p>
                To be a global leader in educational innovation, recognized for
                our commitment to excellence and the success of our learners.
              </p>
            </div>
          </section>
        </main>
        <div class="containerA">
          <div class="headerA">
            <h1>Our Team</h1>
          </div>
          <div class="sub-containerA">
            <div class="teamsA">
              <img src="download.jpeg" alt="" />
              <div class="nameA">Esmay Stace</div>
              <div class="desigA">Developer</div>
              <div class="aboutA">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                labore quam reprehenderit vitae aliquam dicta!
              </div>

              <div class="social-links">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-github"></i>
                </a>
              </div>
            </div>

            <div class="teamsA">
              <img src="rahul.jpg" alt="" />
              <div class="nameA">Cloe Cisneros</div>
              <div class="desigA">Designer</div>
              <div class="aboutA">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                labore quam reprehenderit vitae aliquam dicta!
              </div>

              <div class="social-links">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-github"></i>
                </a>
              </div>
            </div>

            <div class="teamsA">
              <img src="labad.jpg" alt="" />
              <div class="nameA">Sanjay Mullen</div>
              <div class="desigA">Manager</div>
              <div class="aboutA">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                labore quam reprehenderit vitae aliquam dicta!
              </div>

              <div class="social-links">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
