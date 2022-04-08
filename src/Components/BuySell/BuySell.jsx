import React from "react";
import video from "../../Assets/video_preview_h264.mp4";
const BuySell = () => {
  return (
    <div
      className="fixed-container py-5"
      id="buysell"
      style={{ overflowX: "hidden" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <video
              muted
              loop
              autoPlay
              className="w-100 buysellVideo"
              src={video}
              data-aos="zoom-in-right"
            ></video>
          </div>
          <div className="col-12 col-lg-6" data-aos="zoom-in-left">
            <div className="d-flex w-100 align-items-center justify-content-center text-center flex-column text-light buySellContentContainer">
              <h1 style={{ fontSize: "45px", fontWeight: "700" }}>
                How to Buy/Sell?
              </h1>
              <p style={{ fontSize: "20px" }}>
                INR(D) provides you with a system of centralized & decentralized
                exchange platforms. Now, complete your business transactions
                with high trading volume or control your funds by operating
                their functions, anywhere & anytime, just with a click! We
                provide you with a limitless system to buy & sell INR(D) from
                one country to another without any huge process at almost zero
                cost. Signup within minutes, buy the coin, select the recipient
                & send it to another country. Yes, it is as easy as it sounds!
              </p>
              <div className="d-flex w-75 justify-content-between ">
                <a href=" https://stablecoin.co.in/" className="cex">
                  {" "}
                  CEX
                </a>
                <a href="http://www.doubledex.org/" className="dex">
                  {" "}
                  DEX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
