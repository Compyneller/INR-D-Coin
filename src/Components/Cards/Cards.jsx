import React from "react";
import "./Cards.css";
import metamask from "../../Assets/Metamask-icon.png";
import trust from "../../Assets/TWT.png";
import tron from "../../Assets/pngfind.com-tron-png-1370653.png";
import phantom from "../../Assets/phantom-logo-freelogovectors.net_.png";

const Cards = () => {
  return (
    <div
      className="fixed-container py-5"
      id="wallets"
      style={{ overflowX: "hidden", overflowY: "hidden" }}
    >
      <div className="container text-center ">
        <h1 style={{ fontSize: "45px" }} className="text-light mb-3">
          Our trusted wallets
        </h1>
        <p className="text-light mb-5 trusted" style={{ fontSize: "18px" }}>
          With INR(D) get access to your favorite wallet & secure your
          cryptocurrency. Our application provides you with different wallets-
          Metamask, Trust, Phantom & Tronlink Wallet. Exciting? Yes, we are
          building a safe & powerful community to buy, send, receive and store
          cryptocurrencies.
        </p>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
            <a href="https://metamask.io/">
              <div className="myCards">
                <div className="cardContent">
                  <img src={metamask} alt="" />
                  <h5>Metamask</h5>
                  <p>
                    The most popular & safe wallet with over a million users.
                    MetaMask provides essential features to blockchain
                    newcomers, token traders, crypto gamers, and developers.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3" data-aos="fade-down">
            <a href="https://trustwallet.com/">
              <div className="myCards">
                <img src={trust} alt="" />
                <h5>Trust Wallet</h5>
                <p>
                  Trust Wallet is the most trusted & secure crypto wallet that
                  enables easy access to cryptocurrencies, private & secure, and
                  allows you to exchange instantly.
                </p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
            <a href="https://www.tronlink.org/">
              <div className="myCards">
                <img
                  src={tron}
                  alt=""
                  style={{ objectFit: "fill", filter: "invert(1)" }}
                />
                <h5>TronLink</h5>
                <p>
                  TronLink simplifies access to the Tron Blockchain, making it
                  very easy to use. A secure platform where you can send,
                  receive and sign transactions.
                </p>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3" data-aos="fade-down">
            <a href="https://phantom.app/">
              <div className="myCards">
                <img src={phantom} alt="" />
                <h5>Phantom Wallet</h5>
                <p>
                  Phantom makes it safe & easy for you to store, buy, send,
                  receive, swap tokens and collect NFTs on the Solana blockchain
                  with full privacy.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
