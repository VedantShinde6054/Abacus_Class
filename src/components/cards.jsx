import React, { Fragment } from "react";
import "../assets/css/cards.css";
export const Cards = ({ imgSrc, altimg, ctext }) => {
  return (
    <Fragment>
      <div class="card">
        <img
          src={require("../assets/images/mentorship.png")}
          // src={imgSrc}
          class="card-img-top"
          alt={altimg}
        />
        <div class="card-body">
          {/* <p class="card-text">Abacus Calculations up to 5 digit numbers</p> */}
          <p class="card-text">{ctext}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
