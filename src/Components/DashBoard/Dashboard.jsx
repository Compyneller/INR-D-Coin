import React from "react";
import NavBar from "../NavBar/NavBar";
import background from "../../Assets/BG.mp4";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="mainDashboard" style={{ overflowX: "hidden" }}>
      <video muted autoPlay loop src={background}></video>

      <div className="container text-light d-flex align-items-center justify-content-start ">
        <div className="dashboard-content ">
          <h1 data-aos="fade-right">
            SEND INR(D) <br /> WORLDWIDE
          </h1>
          <p data-aos="fade-right">
            INR(D) is a global innovation functioning on seven blockchains to
            lead the way of modern capitalism.
          </p>
          <button data-aos="fade-up">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
