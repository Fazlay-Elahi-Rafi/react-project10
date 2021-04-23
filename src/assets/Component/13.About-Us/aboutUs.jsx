import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo-1.png";

export default function AboutUs() {
  return (
    <section className="aboutus">
      <div className="container">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-lg-5 text-light mb-5 mt-lg-0">
              <div className="aboutus__left">
                <h5 className="aboutus__title">about us</h5>
                <p className="aboutus__desc">
                  Te pri oblique ullamcorper, magna persequeris has eu. Mei
                  prompta dolores examad debet suavitate. Pri te vocibus
                  electram. Eu eleifend rationibus vis, at.
                </p>
                <span className="aboutus__left-address">
                  240 central park, london, or 10019
                </span>
              </div>
            </div>
            <div className="col-7 col-sm-5 col-lg-2 m-auto my-5 my-lg-0 text-center d-flex align-items-center">
              <Link to="/" className="aboutus__midle">
                <img className="img-fluid w-50" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="col-12 col-lg-5 text-light text-end mt-5 mt-lg-0">
              <div className="aboutus__right">
                <h5 className="aboutus__title">subscribe email</h5>
                <p className="aboutus__desc">
                  Te pri oblique ullamcorper, magna persequeris has eu. Mei
                  prompta dolores examad debet suavitate. Pri te vocibus
                  electram. Eu eleifend rationibus vis, at.
                </p>
                <div className="row">
                  <div className="col-12 col-md-8 col-lg-7 col-xl-8 aboutus__right-position">
                    <div className="text-dark">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control aboutus__right-inp"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label
                          className="aboutus__right-inp--label"
                          htmlFor="floatingInput"
                        >
                          Type your email...
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-5 col-xl-4">
                    <button className="aboutus__right-btn btn form-control">
                      subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
