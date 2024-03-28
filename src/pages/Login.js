import React, { Fragment } from "react";
import Menu from "../components/Menu";
import "../assets/css/login.css";
import bgimg from "../assets/images/back-4.jpg";

function Login() {
  return (
    <Fragment>
      <div
        className="backgroundL"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      >
        <div>
          <Menu />
        </div>
        <main className="mainL">
          <header className="headerL">
            <center>
              <h3>Login</h3>
            </center>
          </header>
          <form className="formL">
            <div className="form_wrapperL">
              <select class="form-select selectR">
                <option selected disabled>
                  Login As
                </option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="form_wrapperL">
              <input id="inputL" type="text" required />
              <label for="input">Username</label>
              <i className="material-icons">person</i>
            </div>
            <div className="form_wrapperL">
              <input id="passwordL" type="password" required />
              <label for="password">Password</label>
              <i className="material-icons">lock</i>
            </div>
            <div className="remember_box">
              <div className="remember">
                <input type="checkbox" />
                Remember me
              </div>
              <a href="#">Forgot Password ?</a>
            </div>
            <button className="buttonL">Login</button>
            <div className="new_account">
              Don't have account ? <a href="#">Register</a>
            </div>
          </form>
        </main>
      </div>
    </Fragment>
  );
}
export default Login;
