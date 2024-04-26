import React, { Fragment, useState, useEffect } from "react";
import Menu from "../components/Menu";
import "../assets/css/Contact.css";
import bgimg from "../assets/images/back-4.jpg";
import Footer from "../components/footer";
import Floatingbutton from "../components/Floatingbutton";
import { auth, db } from "../Firebase-config";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [userDetails, setUserDetails] = useState(null);
  const user = auth.currentUser;
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const [msg, setMsg] = useState("");
  const handleQuery = async (e) => {
    const user = auth.currentUser;
    e.preventDefault();
    try {
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Query", user.uid), {
          email: user.email,
          name: userDetails.name,
          phone: userDetails.phone,
          msg: msg,
        });
      }
      console.log("Your Response has been recorded !! ");
      toast.success("Your Response has been recorded !! ", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("Some Error Ocurred !!", {
        position: "bottom-center",
      });
    }
  };

  return (
    <Fragment>
      <Menu />

      <div
        className="main-container"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <section id="section-wrapper">
          <div className="box-wrapper">
            <div className="info-wrap">
              <h2 className="info-title">Contact Information</h2>
              <h3 className="info-sub-title">
                Fill up the form and our Team will get back to you within 24
                hours
              </h3>
              <ul className="info-details">
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <span>Phone:</span>
                  <a href="tel:+91 7709774300">+91 7709774300</a>
                </li>
                <li>
                  <i className="fas fa-paper-plane"></i>
                  <span>Email:</span>
                  <a href="mailto:Ceoprefix@gamil.com">Ceoprefix@gamil.com</a>
                </li>
                <li>
                  <i className="fas fa-globe"></i>
                  <span>Website:</span> <a href="#">yoursite.com</a>
                </li>
              </ul>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="form-wrap">
              {userDetails ? (
                <form action="#" onSubmit={handleQuery}>
                  <h2 className="form-title">Send us a message</h2>
                  <div className="form-fields">
                    <div className="form-group">
                      <input
                        type="text"
                        className="fname"
                        placeholder="First Name"
                        readOnly
                        required
                        value={user ? userDetails.name : ""}
                      />
                    </div>
                    {/* <div className="form-group">
                    <input
                      type="text"
                      className="lname"
                      placeholder="Last Name"
                    />
                  </div> */}
                    <div className="form-group">
                      <input
                        type="email"
                        className="email"
                        placeholder="Mail"
                        value={user ? userDetails.email : ""}
                        readOnly
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="phone"
                        placeholder="Phone"
                        value={user ? userDetails.phone : ""}
                        readOnly
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        id=""
                        placeholder="Write your message"
                        required
                        onChange={(event) => {
                          setMsg(event.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Send Message"
                    className="submit-button"
                  />
                </form>
              ) : (
                <form action="#">
                  <h2 className="form-title">Send us a message</h2>
                  <div className="form-fields">
                    <div className="form-group">
                      <input
                        type="text"
                        className="fname"
                        placeholder="First Name"
                        readOnly
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="email"
                        placeholder="Mail"
                        readOnly
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="phone"
                        placeholder="Phone"
                        readOnly
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        id=""
                        placeholder="Write your message"
                        required
                        onChange={(event) => {
                          setMsg(event.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Send Message"
                    className="submit-button"
                  />
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
      <Floatingbutton />
      <Footer />

      <ToastContainer />
    </Fragment>
  );
}
export default Contact;
