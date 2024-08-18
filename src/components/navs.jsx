import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class Navs extends Component {
  render() {
    return (
      <div className="Nav">
        <nav className="navbar navbar-expand-lg  text-center  fixed-top p-1">
          <div className="container navbar-body text-center ">
            <img src="/logo192.png" alt="Cadence1" style={{ height: "50px" }} />

            <div
              className="navbar-collapse justify-content-center  collapse d-none d-none-md d-block-lg"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav text-center  mb-2 mb-lg-0">
                <li
                  className="nav-item"
                  style={{ paddingLeft: "80px", paddingTop: "30px" }}
                ></li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link  " aria-current="page">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* <NavLink
              to="/signin"
              aria-current="page"
              className="btn btn-warning  px-4 pe-4 py-2  d-flex  d-md-none d-none  d-lg-block"
              style={{ minWidth: "150px" }}
            >
              Book an Appointment
            </NavLink> */}
          </div>
        </nav>
      </div>
    );
  }
}

Navs.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired, // Make sure it's a function and required
};

export default Navs;
