import React from "react";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <div className="container d-flex justify-content-left mt-5">
        <div className="row vh-100">
          <div className="col-xxl-12">
            {/* <img src="../../img/welcome_panel.png" height={500} width={1000} alt="" /> */}
            <div className="fs-4 fw-bolder text-uppercase text-style1">
              Want hot news? we gotcha
            </div>
            <div className="display-1 fw-bolder text-uppercase text-style2">
              Welcome To Naya Khabar
            </div>
            <div className="text-center mt-3">
              <Link className="btn btn-danger btn-lg" to="/general">
                <i class="fa-solid fa-magnifying-glass"></i> Start Exploring
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
