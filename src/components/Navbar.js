import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.darkMode.mode} bg-${props.darkMode.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sport
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="business">
                  Business
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch d-flex justify-content-end mx-right">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.colorMode}
              />
              <label
                className={`form-check-label fw-bolder text-${
                  props.darkMode.mode === "dark" ? "white" : "black"
                } px-2`}
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
