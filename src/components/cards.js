import React, { Fragment } from "react";
import "../assets/css/cards.css";
function Cards() {
  return (
    <Fragment>
      <div class="card">
        <img
          src={require("../assets/images/teacher.png")}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">Abacus Calculations up to 5 digit numbers</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Cards;
