import React, { Fragment, useState } from "react";
import "../assets/css/Teacher.css";
import bgimg from "../assets/images/back-4.jpg";
import Menu from "../components/Menu";
import Footer from "../components/footer";
import Floatingbutton from "../components/Floatingbutton";
import { auth, db } from "../Firebase-config";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import methodology1 from "../assets/images/teacher.png";

function TeacherTraining() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inst, setInst] = useState("");
  const [phone, setPhone] = useState("");

  const user = auth.currentUser;
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // await addDoc(collection(db, "teachers"),
      await setDoc(doc(db, "teachers", name), {
        email: email,
        name: name,
        institute: inst,
        phone: phone,
      });
      console.log("Registration Completed !! ");
      toast.success("Registration Completed !! ", {
        position: "top-center",
        autoClose: 5000,
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
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
                  <h1>Program Methodology</h1>
                </div>
                <div className="teacher-pro2">
                  <div className="tbox-1 ">
                    <img
                      className="methodologyimg"
                      // src={methodology1}
                      src={require("../assets/images/teacher.png")}
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
                  <div className="tbox-1 ">
                    <img
                      className="methodologyimg"
                      src={require("../assets/images/test.png")}
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
                  <div className="tbox-1 ">
                    <img
                      className="methodologyimg"
                      src={require("../assets/images/observation.png")}
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
                  <div className="tbox-1">
                    <img
                      className="methodologyimg"
                      src={require("../assets/images/query.png")}
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
              <div className="teacher-fea">
                <div className="teacher-pro1">
                  <h1>Features </h1>
                </div>
                <div className="teacher-col1">
                  <div className="teacher-fea ">
                    <div className="featureT">
                      <div className="pro-fea">
                        <div className="tbox-1 f1">
                          <h2 className="Ti">Learn from experts</h2>
                          <p className="pi">
                            Achieve your career goals with subject experts and
                            advanced learning methodologies.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="featureT">
                      <div className="pro-fea">
                        <div className="tbox-1 f1">
                          <h2 className="Ti">Access to Course</h2>
                          <p className="pi">
                            Teachers will get one year access to abacus Course.
                            And they will be able to access the code whenever
                            they require.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="featureT">
                      <div className="pro-fea">
                        <div className="tbox-1 f1">
                          <h2 className="Ti">Certification</h2>
                          <p className="pi">
                            With Certification You’ll be able to accelerate your
                            professional growth easily as never before.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="featureT">
                      <div className="pro-fea">
                        <div className="tbox-1 f1">
                          <h2 className="Ti">Flexible timing</h2>
                          <p className="pi">
                            As the course is designed as one to one training,
                            timing can be adjusted according to convenience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="teacher-col2">
                  <div className="teacher-fea-img">
                    <img
                      id="fea-img"
                      src={require("../assets/images/template1.jpg")}
                      alt="teacher training pomplate"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {!user ? (
            <>
              <div className="Teacher-Registration">
                <main className="reg-main-Teacher">
                  <header className="headerR">
                    <center>
                      <h3>Teacher Registration</h3>
                    </center>
                  </header>

                  <form className="formR" onSubmit={handleRegister}>
                    <div className="form_wrapperR">
                      <span className="reg-title">Teacher Name :</span>
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
                      <span className="reg-title">Institute Name :</span>
                      <input
                        id="inputR"
                        type="text"
                        placeholder="Enter Your College/School Name"
                        required
                        onChange={(event) => {
                          setInst(event.target.value);
                        }}
                      />
                    </div>

                    <div className="form_wrapperR">
                      <span className="reg-title">Teacher Contact :</span>
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
                      <span className="reg-title">Teacher Email :</span>
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

                    <center>
                      <button type="submit" className="buttonR">
                        Register For Training
                      </button>
                    </center>
                  </form>
                </main>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
      <Floatingbutton />
      <Footer />
      <ToastContainer />
    </Fragment>
  );
}

export default TeacherTraining;
