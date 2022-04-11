import React from "react";
import pdf from "../../Assets/Indian Rupee Digital Whitepaper.pdf";
import "./TopNav.css";

const TopNav = () => {
  return (
    <nav className="top-Nav">
      <div className="container top-nav-container text-light">
        <ul
          className="list-container text-light "
          style={{ textDecoration: "none", listStyle: "none" }}
        >
          <a target="_blank" href={pdf}>
            <li data-aos="zoom-out">White Paper</li>
          </a>
          <li data-aos="zoom-out">
            <a target="_blank" href="https://medium.com/@INRDcoin">
              <i className="fa-brands fa-medium"></i>
            </a>
          </li>
          <li data-aos="zoom-out">
            <a target="_blank" href="https://mobile.twitter.com/INRDcoin">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li data-aos="zoom-out">
            <a target="_blank" href="https://www.linkedin.com/company/inr-d">
              <i className="fa-brands fa-linkedin"></i>{" "}
            </a>
          </li>
          <li data-aos="zoom-out">
            <a target="_blank" href="https://t.me/INRD8">
              {" "}
              <i className="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li data-aos="zoom-out">
            <a target="_blank" href="https://github.com/INRD8/INRD">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li data-aos="zoom-out">
            <a
              target="_blank"
              href="https://discord.com/channels/961181494813016144/961181494813016146"
            >
              <i className="fa-brands fa-discord"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
