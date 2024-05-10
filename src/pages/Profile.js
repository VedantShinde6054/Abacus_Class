import React, { Fragment, useState, useEffect } from "react";
import Menu from "../components/Menu";
import "../assets/css/Register.css";
import bgimg from "../assets/images/back-4.jpg";
import Footer from "../components/footer";
import { auth, db } from "../Firebase-config";
import { getDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const user = auth.currentUser;
  const fetchUserData = async () => {
    try {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);
        if (user) {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            toast.error("User is not logged in", {
              position: "bottom-center",
            });
          }
        }
      });
    } catch (error) {
      console.log(error.message);
      toast.error("User not signed-in !!", {
        position: "bottom-center",
      });
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <Fragment>
      {userDetails ? (
        <>
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
                  <h3>Student Account</h3>
                </center>
              </header>

              <form className="formR  ">
                <div className="form_wrapperR align-items-center justify-content-center">
                  <img
                    src={require("../assets/images/student.gif")}
                    alt=""
                    style={{
                      width: "35%",
                      marginBottom: "2.5rem",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="form_wrapperR">
                  <span className="reg-title">Student Name :</span>
                  <input
                    id="inputR"
                    type="text"
                    readOnly
                    value={user ? userDetails.name : ""}
                  />
                </div>

                <div className="form_wrapperR">
                  <span className="reg-title">Student DOB :</span>
                  <input
                    id="inputR"
                    type="text"
                    readOnly
                    value={user ? userDetails.dob : ""}
                  />
                </div>

                <div className="form_wrapperR">
                  <span className="reg-title">Student Gender :</span>
                  <input
                    id="inputR"
                    type="text"
                    readOnly
                    value={user ? userDetails.gender : ""}
                  />
                </div>

                <div className="form_wrapperR">
                  <span className="reg-title">Student Contact :</span>
                  <input
                    type="tel"
                    name="Phone"
                    id="phoneR"
                    readOnly
                    value={user ? userDetails.phone : ""}
                  />
                </div>

                <div className="form_wrapperR">
                  <span className="reg-title">Student Email :</span>
                  <input
                    id="emailR"
                    type="email"
                    readOnly
                    value={user ? userDetails.email : ""}
                  />
                </div>

                <center>
                  <input
                    type="button"
                    value="Logout"
                    className="btn logout"
                    style={{
                      width: "42%",
                      height: "4rem",
                      marginTop: "2.5rem",
                      fontSize: "1.5rem",
                    }}
                    onClick={handleLogout}
                  />
                </center>
              </form>
            </main>
          </div>
          <Footer />
          <ToastContainer />
        </>
      ) : (
        <center>
          <img src={require("../assets/images/student.gif")} alt="" />
        </center>
      )}
    </Fragment>
  );
}

export default Profile;
