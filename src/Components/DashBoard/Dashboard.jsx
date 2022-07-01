import React from "react";
import NavBar from "../NavBar/NavBar";
import background from "../../Assets/BG.mp4";
import "./Dashboard.css";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";

const Dashboard = () => {
  const { inrd } = useContext(Data);

  return (
    <div className="mainDashboard" style={{ overflowX: "hidden" }}>
      <video muted autoPlay loop src={background}></video>

      <div className="container text-light d-flex align-items-center justify-content-start ">
        <div className="dashboard-content ">
          <h1 data-aos="fade-right">{inrd?.data?.main_heading}</h1>
          <p data-aos="fade-right">{inrd?.data?.sub_heading}</p>
          <br />
          <br />
          <a target="_blank" href="https://stablecoin.co.in/">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
