import React from "react";
import { Link } from "react-router-dom";

import { RiArrowRightSLine } from "react-icons/ri";

export default function SliderProps(props) {
  return (
    <>
      <div className="header__info">
        <img className="img-fluid header__info-img" src={props.img} alt="" />
        <div className="card-img-overlay">
          <div className="header__info-details">
            <div className="m-auto text-center text-light">
              <h5 className="header__info-details__title">{props.title}</h5>
              <div className="col-12 col-md-8 m-auto">
                <p className="header__info-details__text mt-4 mb-5">{props.text}</p>
                <Link to="/" className="header__info-details__btn">
                  order now
                  <RiArrowRightSLine className="header__info-details__btn-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
