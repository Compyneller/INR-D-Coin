import React from "react";
import "./why.css";
import binance from "../../Assets/oie_spuhnoTuhqbT.png";
import avax from "../../Assets/avalanche-avax-logo.png";
import tron from "../../Assets/pngfind.com-tron-png-1370653.png";
import phantom from "../../Assets/fantom-ftm-logo.png";
import solana from "../../Assets/solana-sol-logo.png";
import ether from "../../Assets/etherscan-logo-light-circle.png";
import circle from "../../Assets/bg_img-1.png";
import logo from "../../Assets/INR_Logo.png";

const Why = () => {
  return (
    <div
      className="fixed-container py-5"
      id="multichain"
      style={{ overflowX: "hidden", overflowY: "hidden" }}
    >
      <div className="container custom-why-container">
        <div className="row">
          <div className="col-12 col-lg-12 col-xl-6">
            <div className="circleContaier ">
              <img src={circle} className="w-100 circleRotate" alt="" />
              <img className="INRDLogo  " src={logo} alt="" />
              <div className="allLogos">
                <div className="binance" data-aos="zoom-in">
                  <a href="https://www.binance.com/en">
                    <img className="binanceImage" src={binance} alt="" />
                    <h1>Binance</h1>
                  </a>
                </div>
                <div
                  className="waveContainer"
                  data-aos="zoom-out-right"
                  data-aos-delay="500"
                >
                  <a href="https://waves.tech/">
                    <div className="wave">
                      <h1>waves</h1>
                      <div className="waveStar"></div>
                    </div>
                  </a>
                </div>
                <div
                  className="solana"
                  data-aos="zoom-in-left"
                  data-aos-delay="1000"
                >
                  <a href="https://solana.com/">
                    <img src={solana} alt="" />
                    <h1>Solana</h1>
                  </a>
                </div>
                <div
                  className="tron"
                  data-aos="zoom-in-up"
                  data-aos-delay="1500"
                >
                  <a href="https://tron.network/">
                    <img src={tron} alt="" />
                    <h1>Tron Networks</h1>
                  </a>
                </div>
                <div
                  className="fantom"
                  data-aos="zoom-out-down"
                  data-aos-delay="2000"
                >
                  <a href="https://fantom.foundation/">
                    <img src={phantom} alt="" />
                    <h1>Fantom</h1>
                  </a>
                </div>
                <div
                  className="avax"
                  data-aos="zoom-out-left"
                  data-aos-delay="2500"
                >
                  <a href="https://www.avax.network/">
                    <img src={avax} alt="" />
                    <h1>Avalanche</h1>
                  </a>
                </div>
                <div
                  className="ether"
                  data-aos="zoom-out-right"
                  data-aos-delay="3000"
                >
                  <a href="https://etherscan.io/">
                    <img src={ether} alt="" />
                    <h1>Etherscan</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-12 col-xl-6 text-light d-flex align-items-center justify-content-center flex-column circleContainer-content">
            <h1 style={{ fontWeight: "700", fontSize: "45px" }}>
              Available on Multi-chains
            </h1>
            <p style={{ fontSize: "20px" }}>
              INR(D) is locked with seven prominent blockchains and nobody can
              access it except you. The blockchains that are available on INR(D)
              are- Binance Smart Chain, Avalanche, Fantom, Tron, Waves, Solana &
              Etherscan.
            </p>
          </div>
          <div className="col-12 col-lg-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Why;
