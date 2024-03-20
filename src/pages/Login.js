import React, { Fragment } from "react";
import Menu from "./Menu";
function Login() {
  return (
    <Fragment>
      <div
        className="backgroundL"
        style={{
          backgroundImage: 'url("assests/images/back-3.jpeg")',
        }}
      >
        <div>
          <Menu />
        </div>
        <main className="mainL">
          <header className="headerL">
            <h4>Login</h4>
          </header>
          <form className="formL">
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
