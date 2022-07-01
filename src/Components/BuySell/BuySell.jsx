import React from "react";
import { useContext } from "react";
import video from "../../Assets/video_preview_h264.mp4";
import { Data } from "../../Context/DataContext";
const BuySell = () => {
  const { inrd } = useContext(Data);
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
              <h1 style={{ fontSize: "45px" }}>
                {inrd?.data?.buysell?.heading}
              </h1>
              <p style={{ fontSize: "18px" }}>{inrd?.data?.buysell?.text}</p>
              <div className="d-flex w-75 justify-content-between ">
                <a
                  target="_blank"
                  href=" https://stablecoin.co.in/"
                  className="cex"
                >
                  {" "}
                  CEX
                </a>
                <a
                  target="_blank"
                  href="https://www.doubledex.org/"
                  className="dex"
                >
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
