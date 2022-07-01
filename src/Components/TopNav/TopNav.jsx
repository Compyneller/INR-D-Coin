import React from "react";
import { useContext } from "react";
import pdf from "../../Assets/Indian Rupee Digital Whitepaper.pdf";
import { Data } from "../../Context/DataContext";
import "./TopNav.css";

const TopNav = () => {
  const { inrd } = useContext(Data);
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
            <a target="_blank" href={inrd?.data?.footer?.follow?.value[1].link}>
              <i className="fa-brands fa-medium"></i>
            </a>
          </li>
          <li data-aos="zoom-out">
            <a target="_blank" href={inrd?.data?.footer?.follow?.value[2].link}>
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li data-aos="zoom-out">
            <a target="_blank" href={inrd?.data?.footer?.follow?.value[3].link}>
              <i className="fa-brands fa-linkedin"></i>{" "}
            </a>
          </li>
          <li data-aos="zoom-out">
            <a target="_blank" href={inrd?.data?.footer?.follow?.value[4].link}>
              {" "}
              <i className="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li data-aos="zoom-out">
            <a target="_blank" href={inrd?.data?.footer?.follow?.value[5].link}>
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li data-aos="zoom-out">
            <a target="_blank" href={inrd?.data?.footer?.follow?.value[6].link}>
              <i className="fa-brands fa-discord"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
