import React, { Fragment, useState } from "react";
import Menu from "../components/Menu";
import "../assets/css/Register.css";
import bgimg from "../assets/images/back-4.jpg";
import Footer from "../components/footer";
import { db } from "../Firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

function StudentRegister() {
  const collRef = collection(db, "users");
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_gender, setGender] = useState("");
  const [user_dob, setDob] = useState("");
  const [user_phone, setPhone] = useState(0);

  const createUser = async () => {
    try {
      await addDoc(collRef, {
        name: user_name,
        email: user_email,
        gender: user_gender,
        dob: user_dob,
        phone: user_phone,
      });
      console.log("User added sucessfully");
    } catch (error) {
      console.log(error);
    }
  };

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
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student DOB :</span>
              <input
                id="dateR"
                type="date"
                required
                onChange={(event) => {
                  setDob(event.target.value);
                }}
              />
            </div>

            <div className="form_wrapperR">
              <span className="reg-title">Student Gender :</span>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Male"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
              &emsp;
              <span class="reg-title" for="flexRadioDefault2">
                Male
              </span>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Female"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
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
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
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
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </div>

            {/* <div className="form_wrapperR">
              <span className="reg-title">Student Username :</span>
              <input
                id="nameR"
                type="text"
                required
                placeholder="Set Username"
              />
              <i className="material-icons">person</i>
            </div> */}

            <div className="form_wrapperR">
              <span className="reg-title">Student Password :</span>
              <input
                id="passwordR"
                type="password"
                required
                placeholder="Set Password"
              />
              {/* <i className="material-icons">lock</i> */}
            </div>
            <div className="remember_box">
              <div className="remember">
                <input type="checkbox" />I agree to register for this course
              </div>
            </div>
            <center>
              <button className="buttonR" onClick={createUser}>
                Register
              </button>
            </center>
          </form>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
}

export default StudentRegister;
