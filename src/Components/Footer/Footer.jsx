import React from "react";
import logo from "../../Assets/INR_Logo.png";
import alchemy from "../../Assets/Alchemy.png";
import sheild from "../../Assets/pngfind.com-check-png-560150.png";

const Footer = () => {
  return (
    <div className=" footerContainer" style={{ overflowX: "hidden" }}>
      <div className="container text-light">
        <div className="row">
          <div className="col-12 col-lg-2 customFooter">
            <div className="d-flex w-100 align-items-center justify-content-center flex-column ">
              <div className="d-flex align-items-center justify-content-center">
                <img src={logo} alt="" className="logoImage" />
                <h1 className="mx-auto" style={{ fontWeight: "700" }}>
                  INR(D)
                </h1>
              </div>
              <p>Follow Us</p>
              <div className="d-flex w-100 justify-content-between align-items-center footerIcons ">
                <a href="https://medium.com/@INRDcoin">
                  <i className="fa-brands fa-medium"></i>
                </a>
                <a href="https://mobile.twitter.com/INRDcoin">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://t.me/INRD8">
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="https://github.com/INRD8/INRD">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://discord.com/channels/961181494813016144/961181494813016146">
                  <i className="fa-brands fa-discord"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-lg-10">
            <div className="row">
              <div className="col-6 col-lg-3  customFooter">
                <div className="w-100 d-flex align-items-center justify-content-center flex-column ">
                  <h5 className="footerH5">Purpose</h5>
                  <p>About Us</p>
                  <p>Documentation</p>
                  <p>Developer Tools</p>
                  <p>Contact Us</p>
                </div>
              </div>
              <div className="col-6 col-lg-3 customFooter">
                <div className="w-100  d-flex align-items-center justify-content-center flex-column">
                  <h5 className="footerH5">Explore</h5>
                  <p>Blog</p>
                  <p>Brand Kit</p>
                </div>
              </div>
              <div className="col-6 col-lg-3 customFooter">
                <div className="w-100 d-flex align-items-center justify-content-center flex-column">
                  <h5 className="footerH5">Foundation</h5>
                  <p>Community</p>
                  <p>Research</p>
                </div>
              </div>
              <div className="col-6 col-lg-3 customFooter">
                <div className="w-100 d-flex align-items-center justify-content-center flex-column">
                  <h5 className="footerH5">Legal</h5>
                  <p>Privacy Policy</p>
                  <p>FAQ</p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-12 col-lg-10 ">
            <div className="row">
              <div className="col-12 col-lg-6 d-flex align-items-center justify-content-end customFooterContact ">
                <p style={{ fontSize: "20px ", fontWeight: "bold" }}>
                  Contact :{" "}
                  <a href="mailto:hello@inrdcoin.com">hello@inrdcoin.com</a>{" "}
                </p>
              </div>
              <div className="col-12 col-lg-6  d-flex justify-content-center flex-column align-items-end customFooterContact">
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
        <div className="row"></div>
      </div>
    </div>
  );
};

export default Footer;
