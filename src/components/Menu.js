import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Continuous from "./continuous";
import { auth, db } from "../Firebase-config";
import { getDoc, doc } from "firebase/firestore";
function Menu() {
  const user = auth.currentUser;
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    try {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);
        if (user) {
          const docRef = doc(db, "Admin", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("Error");
          }
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand me-auto" to="/">
              <img
                className="Clogo"
                src={require("../assets/images/classlogo.png")}
              />
            </Link>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <img
                  className="offcanvas-title"
                  id="offcanvasNavbarLabel"
                  src={require("../assets/images/classlogo.png")}
                />

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link mx-lg-2" to="/">
                      Home
                    </Link>
                  </li>
                  {!userDetails ? (
                    <li className="nav-item">
                      <Link className="nav-link mx-lg-2" to="/StudentRegister">
                        Admission
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}

                  <li className="nav-item">
                    <Link className="nav-link mx-lg-2" to="/TeacherTraining">
                      Teacher training
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link mx-lg-2" to="/About">
                      About
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link mx-lg-2" to="/Contact">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {userDetails ? (
              <Link className="login-button" to="/dashboard">
                Dashboard
              </Link>
            ) : (
              // <Link className="login-button" to="/Login">
              //   Account
              // </Link>
              ""
            )}

            {user && !userDetails ? (
              <Link className="login-button" to="/Profile">
                Account
              </Link>
            ) : (
              // <Link className="login-button" to="/Login">
              //   Account
              // </Link>
              ""
            )}

            {!userDetails && !user ? (
              <Link className="login-button" to="/Login">
                Account
              </Link>
            ) : (
              ""
            )}

            <button
              className="navbar-toggler pe-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <Continuous />
        </nav>
      </div>
    </Fragment>
  );
}

export default Menu;
