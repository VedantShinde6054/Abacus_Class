import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Continuous from "../pages/continuous";
function Menu() {
  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand me-auto" to="/">
              logo
            </Link>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Logo
                </h5>
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
                  <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/StudentRegister">
                      Admission
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/TeacherTraining">
                      Teacher training
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/About">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-lg-2" to="/Contact">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="login-button" to="/Login">
              Account
            </Link>
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
