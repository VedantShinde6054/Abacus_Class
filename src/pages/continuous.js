import React, { Fragment } from "react";

function Continuous() {
  return (
    <Fragment>
      <div className="marquee1" style={{ position: "fixed" }}>
        <marquee
          className="marquee"
          scrolldelay="0"
          scrollamount="5"
          behavior="scroll"
          direction="left"
          onmouseover="this.stop()"
          onmouseout="this.start()"
        >
          "I promise that I will serve My knowledge for Nation Building."
        </marquee>
      </div>
    </Fragment>
  );
}
export default Continuous;
