import React, { Fragment } from "react";
import "../assets/css/floatingbutton.css";

function Floatingbutton() {
  return (
    <Fragment>
      <div className="registerbutton">
        <a href="http://localhost:3000/StudentRegister">
          {" "}
          <button className="Reg-btn">Register !</button>
        </a>
      </div>
    </Fragment>
  );
}
export default Floatingbutton;
