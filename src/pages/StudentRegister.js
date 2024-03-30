import React, { Fragment } from "react";
import Menu from "../components/Menu";
import "../assets/css/Register.css";
import bgimg from "../assets/images/back-4.jpg";
import Footer from "../components/footer";

function StudentRegister() {
  return (
    <Fragment>
      <div
        className="backgroundR"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      >
        <div>
          <Menu />
        </div>
        <main className="reg-main">
          <header className="headerR">
            <center>
              <h3>Student Registration</h3>
            </center>
          </header>

          <form className="formR">
            <div className="form_wrapperR">
              <span className="reg-title">Student Name :</span>
              <input
                id="inputR"
                type="text"
                placeholder="Enter Your Fullname "
                required
              />
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student DOB :</span>
              <input id="dateR" type="date" required />
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student Gender :</span>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              &emsp;
              <span class="reg-title" for="flexRadioDefault2">
                Male
              </span>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              &emsp;
              <span class="reg-title" for="flexRadioDefault2">
                Female
              </span>
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student Email :</span>
              <input
                id="emailR"
                type="email"
                placeholder="Enter Valid Email"
                required
              />
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student Contact :</span>
              <input
                type="tel"
                placeholder="Phone No."
                name="Phone"
                pattern="[0-9]{10}"
                id="phoneR"
                required
              />
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student Username :</span>
              <input
                id="inputR"
                type="text"
                required
                placeholder="Set Username"
              />
              <i className="material-icons">person</i>
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student Password :</span>
              <input
                id="passwordR"
                type="password"
                required
                placeholder="Set Password"
              />
              <i className="material-icons">lock</i>
            </div>
            <div className="remember_box">
              <div className="remember">
                <input type="checkbox" />I agree to register for this course
              </div>
            </div>
            <center>
              <button className="buttonR">Register</button>
            </center>
          </form>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
}

export default StudentRegister;
