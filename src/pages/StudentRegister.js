import React, { Fragment, useState } from "react";
import Menu from "../components/Menu";
import "../assets/css/Register.css";
import bgimg from "../assets/images/back-4.jpg";
import Footer from "../components/footer";
import { auth, db } from "../Firebase-config";
// import { collection, addDoc } from "firebase/firestore";
// import { async } from "@firebase/util";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";

function StudentRegister() {
  // const collRef = collection(db, "users");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState(0);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
          gender: gender,
          dob: dob,
          phone: phone,
          status: false,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      setTimeout(function () {
        window.location.href = "/";
      }, 5000);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
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

          <form className="formR" onSubmit={handleRegister}>
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
                required
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
              <span className="reg-title">Student Password :</span>
              <input
                id="passwordR"
                type="password"
                required
                placeholder="Set Password"
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />
            </div>
            <center>
              <button type="submit" className="buttonR">
                Register
              </button>
            </center>
          </form>
        </main>
      </div>
      <Footer />
      <ToastContainer />
    </Fragment>
  );
}

export default StudentRegister;
