import React, { Fragment } from "react";
import "../assets/css/Home.css";
import Menu from "../components/Menu";
import Footer from "../components/footer";
import Cards1 from "../components/cards";
import Floatingbutton from "../components/Floatingbutton";
import feature1 from "../assets/images/calculations.png";
import feature2 from "../assets/images/mentorship.png";
import feature3 from "../assets/images/exam.png";
import feature4 from "../assets/images/test.png";
import feature5 from "../assets/images/teacher.png";
import feature6 from "../assets/images/query.png";

function Index() {
  return (
    <Fragment>
      <Menu />

      <section className="hero-section">
        <div className="back-filter">
          <div className="carousal-space  align-items-center justify-content-center">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide "
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={require("../assets/images/template1.jpg")}
                    className="d-block w-100 object-fit-xl-fill border rounded corr-img1"
                    alt="..."
                  />
                  <div className="black-effect"></div>
                  <img
                    src={require("../assets/images/template1.jpg")}
                    className="d-block w-100 object-fit-xl-contain border rounded corr-img2"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={require("../assets/images/template2.jpg")}
                    className="d-block w-100 object-fit-xl-fill border rounded corr-img1"
                    alt="..."
                  />
                  <div className="black-effect"></div>
                  <img
                    src={require("../assets/images/template2.jpg")}
                    className="d-block w-100 object-fit-xl-contain border rounded corr-img2"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={require("../assets/images/ISO_Certificate.jpg")}
                    className="d-block w-100 object-fit-xl-fill border rounded corr-img1"
                    alt="..."
                  />
                  <div className="black-effect"></div>
                  <img
                    src={require("../assets/images/ISO_Certificate.jpg")}
                    className="d-block w-100 object-fit-xl-contain border rounded corr-img2"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class=" text-center container-content">
            <div class="row">
              <h1>About Abacus</h1>
            </div>
            <div className="bg-space">
              <div class="row ab-info">
                <div class="col ab-info-txt ">
                  <h4>
                    {" "}
                    <span id="span1">What is ABACUS ?</span>{" "}
                  </h4>
                  <strong>The Abacus</strong> is a historic calculation tool
                  with rods and beads that represent numbers when slid along the
                  rods. It's utilized in modern times to enhance mental math
                  skills, particularly in children aged 5 to 14. <br /> It
                  facilitates various arithmetic operations, including addition,
                  subtraction, multiplication, and division, as well as decimal
                  calculations and handling negative numbers.
                </div>
                <div class="col ab-info-img">
                  <img
                    src={require("../assets/images/abacus.png")}
                    className="advan1"
                    alt="..."
                  />
                </div>
              </div>

              <div class="row ab-info">
                <div class="col ab-info-img">
                  <img
                    src={require("../assets/images/maths.png")}
                    className="mental1"
                    alt=".."
                  />
                </div>
                <div class="col ab-info-txt ">
                  <h4>What is Mental Arithmetic ?</h4>
                  <li>
                    Mental Arithmetic is a term used in Abacus for the
                    calculations done in mind.
                  </li>
                  <li>
                    Even large numbers can be calculated in mind, that too
                    within seconds.
                  </li>{" "}
                  <li>
                    Mental arithmetic improves student's imagination skills
                    Effective in cracking competitive time based tests.
                  </li>{" "}
                  <li>
                    Mind calculation enhances the concentration level of child.
                  </li>
                </div>
              </div>
            </div>

            <div class="row">
              <h1>What we Offer</h1>
            </div>
            <div className="bg-space">
              <div class="row">
                <div class="col">
                  <center>
                    <Cards1
                      imgSrc={feature1}
                      altimg="Features of classes"
                      ctext="Abacus Calculations up to 5 digit numbers."
                    />
                  </center>
                </div>
                <div class="col">
                  <center>
                    <Cards1
                      imgSrc={feature2}
                      altimg="Features of classes"
                      ctext="Mentorship support for students."
                    />
                  </center>
                </div>
                <div class="col">
                  <center>
                    <Cards1
                      imgSrc={feature3}
                      altimg="Features of classes"
                      ctext="Semi-Olympiyad Exam pratice."
                    />
                  </center>
                </div>
              </div>

              <div class="row">
                <div class="col ">
                  <center>
                    <Cards1
                      imgSrc={feature4}
                      altimg="Features of classes"
                      ctext="Test series for students and Teachers."
                    />
                  </center>
                </div>
                <div class="col ">
                  <center>
                    <Cards1
                      imgSrc={feature5}
                      altimg="Features of classes"
                      ctext="Best Faculty for Teaching and Mentoring."
                    />
                  </center>
                </div>
                <div class="col">
                  <center>
                    <Cards1
                      imgSrc={feature6}
                      altimg="Features of classes"
                      ctext="Doubt solving session on every Sunday."
                    />
                  </center>
                </div>
              </div>
            </div>
          </div>

          <Floatingbutton />

          <Footer />
        </div>
      </section>
    </Fragment>
  );
}
export default Index;
