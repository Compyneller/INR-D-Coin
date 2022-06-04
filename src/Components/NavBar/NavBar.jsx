import React from "react";
import logo from "../../Assets/INR_Logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="customNav">
      <nav className="navbar navbar-expand-lg navbar-dark  container  ">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="" className="logoImage" />
            <h1 style={{ margin: "auto 0" }}>INR(D)</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex align-items-center justify-content-end  w-100">
              <ul className="navbar-nav ">
                {/* <li className="nav-item">
                  <a className="nav-link" href="#aboutus">
                    About Us
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/#multichain">
                    Multi-chains
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    target="_blank"
                    className="nav-link"
                    href="https://safuaudit.com/audit-reports/InrdSwap.pdf"
                  >
                    Audit
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#wallets">
                    Wallets
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#buysell">
                    Buy Sell
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/team">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
