import React, { Fragment } from "react";
import "../assets/css/Home.css";
import bgimg from "../assets/images/back-4.jpg";

import Menu from "../components/Menu";
import Footer from "../components/footer";

function Index() {
  return (
    <Fragment>
      <Menu />

      <section className="hero-section">
        <div
          className="back"
          style={{
            backgroundImage: `url(${bgimg})`,
          }}
        >
          <div className="d-flex align-items-center justify-content-center fs-1">
            <div className="container">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
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

                  <div className="carousel-item">
                    <img
                      src={require("../assets/images/img-2.jpg")}
                      // className="d-block w-100"
                      className="d-block w-100 object-fit-xl-fill border rounded corr-img1"
                      alt="..."
                    />
                    <div className="black-effect"></div>
                    <img
                      src={require("../assets/images/img-2.jpg")}
                      // className="d-block w-100"
                      className="d-block w-100 object-fit-xl-contain border rounded corr-img2"
                      alt="..."
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src={require("../assets/images/img-3.jpg")}
                      // className="d-block w-100"
                      className="d-block w-100 object-fit-xl-fill border rounded corr-img1"
                      alt="..."
                    />
                    <div className="black-effect"></div>
                    <img
                      src={require("../assets/images/img-3.jpg")}
                      // className="d-block w-100"
                      className="d-block w-100 object-fit-xl-contain border rounded corr-img2"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div class="container text-center container-content">
            <div class="row">
              <h1>About Abacus</h1>
            </div>
            <div class="row ab-info">
              <div class="col ab-info-txt ">
                <h4>
                  {" "}
                  <span id="span1">What is ABACUS ?</span>{" "}
                </h4>
                <strong>The Abacus</strong> is a historic calculation tool with
                rods and beads that represent numbers when slid along the rods.
                It's utilized in modern times to enhance mental math skills,
                particularly in children aged 5 to 14. <br /> It facilitates
                various arithmetic operations, including addition, subtraction,
                multiplication, and division, as well as decimal calculations
                and handling negative numbers.
              </div>
              <div class="col ab-info-img">
                <img
                  src={require("../assets/images/advantages1.png")}
                  className="advan1"
                  alt="..."
                />
              </div>
            </div>
            <div class="container text-center">
              <div class="row ab-info">
                <div class="col ab-info-img">
                  <img
                    src={require("../assets/images/mentalArithematics.png")}
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
          </div>
          {/* <div className="slate-info">
            <div className="slate-info-txt">
              <h4>Parts of ABACUS :- </h4>
              <li>
                The boundary on all 4 sides of the abacus is called the Frame.
              </li>
              <li>
                The abacus which we are using has 17 rods. Each rod has 5 beads.
              </li>
              <li>
                The abacus is divided into the upper and the lower part by a
                horizontal bar called the Beam.
              </li>
              <li>
                The beads in the lower part are the Lower Beads or the Earth
                Beads.
              </li>
              <li>
                The beads in the upper part are the Upper Beads or the Heaven
                Beads.
              </li>
            </div>
            <div className="slate-info-img">
              <img
                src={require("../assets/images/parts-of-abacus.jpg")}
                className="slate1"
                alt=".."
              />
            </div>
          </div> */}
          <div class="container text-center">
            <div class="row benifites">
              <div class="col benifites-txt ">
                <h4>Benifites of Abacus :-</h4>
                <li>The process improves the listening ability</li>
                <li>It Enhances the level of concentration</li>
                <li>Develops the ability to visualize</li>
                <li>Builds photographic memory</li>
                <li>Enables perfect recall</li>
                <li>The child becomes confident</li>
                <li>Promotes Logical Thinking</li>
              </div>
              <div className=" col benifites-img">
                <img
                  src={require("../assets/images/abacus-advantages .png")}
                  className="benifites1"
                  alt=".."
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </Fragment>
  );
}
export default Index;
