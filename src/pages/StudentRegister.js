import React, { Fragment } from "react";
import Menu from "../components/Menu";
import "../assets/css/Register.css";
import bgimg from "../assets/images/back-4.jpg";

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
                id="inputL"
                type="text"
                placeholder="Enter Your Fullname "
                required
              />
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student DOB :</span>
              <input id="dateL" type="date" required />
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student Email :</span>
              <input
                id="emailL"
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
                id="phoneL"
                required
              />
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student Username :</span>
              <input id="inputL" type="text" required />
              <label for="input">Set Username</label>
              <i className="material-icons">person</i>
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student Password :</span>
              <input id="passwordL" type="password" required />
              <label for="password">Set Password</label>
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
    </Fragment>
  );
}

export default StudentRegister;
