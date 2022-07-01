import React from "react";
import "./Cards.css";
import metamask from "../../Assets/Metamask-icon.png";
import trust from "../../Assets/TWT.png";
import tron from "../../Assets/pngfind.com-tron-png-1370653.png";
import phantom from "../../Assets/phantom-logo-freelogovectors.net_.png";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";

const Cards = () => {
  const { inrd } = useContext(Data);
  return (
    <div
      className="fixed-container py-5"
      id="wallets"
      style={{ overflowX: "hidden", overflowY: "hidden" }}
    >
      <div className="container text-center ">
        <h1 style={{ fontSize: "45px" }} className="text-light mb-3">
          {inrd?.data?.wallet?.heading}
        </h1>
        <p className="text-light mb-5 trusted" style={{ fontSize: "18px" }}>
          {inrd?.data?.wallet?.text}
        </p>
        <div className="row">
          {inrd?.data?.wallet?.conten_boxes?.map((items, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
                <a target="_blank" href={items.link}>
                  <div className="myCards">
                    <div className="cardContent">
                      <img src={items.icon} alt="" />
                      <h5>{items.heading}</h5>
                      <p>{items.text}</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
