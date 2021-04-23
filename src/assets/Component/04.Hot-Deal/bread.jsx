import React from "react";
import { Link } from "react-router-dom";

import { RiArrowRightSLine } from "react-icons/ri";

import img from "../../img/bread.png";

import Timer from "./timer";

export default function Bread() {
  return (
    <section className="bread">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <img className="img-fluid w-100" src={img} alt="bread" />
          </div>
          <div className="col-12 col-lg-7 text-center m-auto">
            <span className="bread__span">hot deal today</span>
            <h1 className="bread__title mt-3">ciabatta bread</h1>
            <hr className="sale__border" />
            <div className="bread__body mt-5">
              <span className="bread__price">
                only: <span className="bread__price-num">$10.00</span>
              </span>
              <div className="col-12 col-md-9 col-xl-7 m-auto py-5 mb-3">
                <div className="bread__info d-flex justify-content-between mb-2">
                  <span className="bread__info-sold">
                    already sold: <span className="bread__info-num">25</span>
                  </span>
                  <span className="bread__info-sold">
                    avaiable: <span className="bread__info-num">10</span>
                  </span>
                </div>
                <div className="progress" style={{ height: " 10px" }}>
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bread__progress"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <div className="bread__timer">
                  <Timer targetDate="Oct 25, 2021" targetTime="18:00:00" />
                </div>
              </div>
              <Link to="/" className="header__info-details__btn">
                order now
                <RiArrowRightSLine className="header__info-details__btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
