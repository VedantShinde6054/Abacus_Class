import React, { Fragment } from "react";
import "../assets/css/Teacher.css";
import bgimg from "../assets/images/back-4.jpg";
import Menu from "../components/Menu";
import Footer from "../components/footer";
// import "../assets/images/teacher.png";
function TeacherTraining() {
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
          {/* <div className="navT">
            <Menu />
          </div> */}
          <section className="teacherT">
            <div className="teacher-container">
              <div className="teacher-heading">
                <h1>Abacus Teacher-Training Program</h1>
              </div>
              <div className="teacher-content">
                <p className="contentT">
                  Our program aims to provide you with the best quality teacher
                  training and adequate branded abacus content for effective
                  education. A three-month training program helps you to
                  understand the whole abacus methods, calculations and
                  techniques as well as helps you to train children and run a
                  business.
                </p>
              </div>
              <div className="teacher-program">
                <div className="teacher-pro1">
                  <h2 id="P-method">Program Methodology</h2>
                </div>
                <div className="teacher-pro2">
                  <div className="tbox-1 c1">
                    <img
                      imgSrc="../assets/images/teacher.png"
                      alt="Images of methodology"
                    />
                    <h2 className="Ti">Learn</h2>
                    <p className="pi">
                      Learn is the process where you are given the actual
                      training by one of our expert teacher.
                    </p>
                  </div>
                </div>
                <div className="teacher-pro3">
                  <div className="tbox-1 c1">
                    <img
                      src="..assets/image/mentorship.png"
                      alt="Images of methodology"
                    />
                    <h2 className="Ti">Test</h2>
                    <p className="pi">
                      Test is the process where your knowledge is tested and
                      evaluated.
                    </p>
                  </div>
                </div>
                <div className="teacher-pro4">
                  <div className="tbox-1 c1">
                    <img
                      src="..assets/image/mentorship.png"
                      alt="Images of methodology"
                    />
                    <h2 className="Ti">Observe</h2>
                    <p className="pi">
                      Observe is a process where you will be given a chance to
                      participate in an actual live class.
                    </p>
                  </div>
                </div>
                <div className="teacher-pro5">
                  <div className="tbox-1 c1">
                    <img
                      src="..assets/image/mentorship.png"
                      alt="Images of methodology"
                    />
                    <h2 className="Ti">Practice</h2>
                    <p className="pi">
                      This stage puts everything together and enables you to
                      revise and review all that you have learned so far.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default TeacherTraining;
