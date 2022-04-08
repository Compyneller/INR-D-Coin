import React from "react";
import code from "../../Assets/code.mp4";
import "./secondCard.css";

const SecondCard = () => {
  return (
    <div className="fixed-container py-5" style={{ overflowX: "hidden" }}>
      <div className="container">
        <div className="secondCard">
          <div className="row">
            <div
              className="col-12 col-lg-6 d-flex align-items-center text-center  flex-column justify-content-center "
              data-aos="fade-right"
              id="mobileCard"
            >
              <h1 className="mb-3">Enter the world of sustainability</h1>
              <button>Build Now</button>
            </div>
            <div
              className="col-12 col-lg-6 d-flex align-items-center justify-content-center mt-3"
              data-aos="fade-left"
            >
              <video
                muted
                autoPlay
                loop
                src={code}
                className="codeVideo"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
