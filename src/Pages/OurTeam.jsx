import React from "react";
import "./OurTeam.css";
import ceo from "../Assets/1649752017849.jpg";
import devi from "../Assets/1649752036539.jpg";
import me from "../Assets/me.jpg";
import shruti from "../Assets/shruti.jpg";
import ashish from "../Assets/ashish.jpg";
import NavBar from "../Components/NavBar/NavBar";
import logo from "../Assets/oie_kSoUmOOW5h9s.png";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
const OurTeam = () => {
  return (
    <>
      <NavBar />
      <div
        className="fixed-container d-flex align-items-center justify-content-center flex-column"
        style={{ minHeight: "100vh" }}
      >
        <div className="container py-5">
          <h1 className="text-light text-center mb-5">Our Team</h1>
          <div className="d-flex justify-content-center mb-5 w-100">
            <div className="teamImageContainer">
              <img src={ceo} alt="" />
              <h5>Manjot Chowdhary,(CEO)</h5>
              <a href="https://www.linkedin.com/in/manjot-chowdhary-0604a5237/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="ourteamImageContainer">
                <img src={devi} alt="" />
                <h5>Devi Sharma, (Solutions Consultant)</h5>
                <a href="https://www.linkedin.com/in/devi-sharma-85a3b3193/">
                  {" "}
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="ourteamImageContainer">
                <img src={me} alt="" />
                <h5>Shubham Sharma, (Senior Blockchain Developer)</h5>
                <a href="https://www.linkedin.com/in/shubham-sharma-04aaa0126/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="ourteamImageContainer">
                <img src={shruti} alt="" />
                <h5>Shruti Walia, (Manager Operations Administration)</h5>
                <a href="https://www.linkedin.com/in/shruti-walia-seth-07a8b740/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="ourteamImageContainer">
                <img src={ashish} alt="" />
                <h5>Ashish Kumar, (Blockchain Developer)</h5>
                <a href="https://www.linkedin.com/in/ashish-kumar-prajapati-708737217/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default OurTeam;
