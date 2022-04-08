import React from "react";
import "./Strip.css";
const Strip = () => {
  return (
    <div className="strip-container py-5" style={{ overflowX: "hidden" }}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-3" data-aos="zoom-in">
            <h1>600ms</h1>
            <p>Transaction Time</p>
          </div>
          <div className="col-6 col-lg-3 " data-aos="zoom-in">
            <h1>High</h1>
            <p>Transaction throughput</p>
          </div>
          <div className="col-6 col-lg-3" data-aos="zoom-in">
            <h1>No</h1>
            <p>Transaction Fees</p>
          </div>
          <div className="col-6 col-lg-3" data-aos="zoom-in">
            <h1>High</h1>
            <p>Scalability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strip;
