import React from "react";
import logo from "../../Assets/oie_kSoUmOOW5h9s.png";
import alchemy from "../../Assets/Alchemy.png";
import sheild from "../../Assets/pngfind.com-check-png-560150.png";

const Footer = () => {
  return (
    <div className=" footerContainer" style={{ overflowX: "hidden" }}>
      <div className="container text-light">
        <div className="row">
          <div className="col-12 col-lg-4 ">
            <div className="d-flex align-items-center justify-content-center flex-column footerSocialsIcons">
              <img src={logo} alt="" className="logoImage" />
              <h1
                className="mx-auto"
                style={{ fontWeight: "700", fontSize: "35px" }}
              >
                INR(D)
              </h1>
            </div>
          </div>
          <div className="col-12 col-lg-4 footerSocialsIcons">
            <p style={{ fontSize: "20px " }}>
              Contact :{" "}
              <a href="mailto:hello@inrdcoin.com">hello@inrdcoin.com</a>{" "}
            </p>
            <p style={{ fontSize: "20px " }}>Follow Us :</p>
            <div className="d-flex w-100 justify-content-between align-items-center footerIcons ">
              <a href="https://medium.com/@INRDcoin" target="_blank">
                <i className="fa-brands fa-medium"></i>
              </a>
              <a href="https://mobile.twitter.com/INRDcoin" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/inr-d" target="_blank">
                <i className="fa-brands fa-linkedin"></i>{" "}
              </a>
              <a href="https://t.me/INRD8" target="_blank">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="https://github.com/INRD8/INRD" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://discord.com/channels/961181494813016144/961181494813016146"
                target="_blank"
              >
                <i className="fa-brands fa-discord"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column align-items-end footerSocialsIcons">
            <div className="certificate">
              <div className="row">
                <div className="col-2 d-flex align-items-center ">
                  <img src={sheild} alt="" className=" sheild" />
                </div>
                <div className="col-10 d-flex align-items-start justify-content-center  mt-2  flex-column">
                  <img className="w-50" src={alchemy} alt="" />
                  <h1>Certified Instructure</h1>
                </div>
              </div>
            </div>
            <p className="my-4 text-secondary">
              © 2022 INR(D). All right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
