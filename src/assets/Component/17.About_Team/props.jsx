import React from "react";

import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

export default function Props(props) {
  return (
    <>
      <div className="card border-0">
        <div className="baker__person">
          <div className="baker__person-img">
            <img className="card-img-top img-fluid" src={props.img} alt="img" />
          </div>
          <div className="card-body text-center py-4">
            <h3 className="baker__person-name">{props.name}</h3>
            <span className="baker__person-span">{props.span}</span>
            <p className="baker__person-p">{props.para}</p>
            <div className="baker__person-social">
              <ul className="baker__person-social--ul">
                <li>
                  <button className="btn baker__person-social--ul__btn">
                    <FaFacebookF className="baker__person-social--ul__icon" />
                  </button>
                </li>
                <li>
                  <button className="btn baker__person-social--ul__btn">
                    <FaTwitter className="baker__person-social--ul__icon" />
                  </button>
                </li>
                <li>
                  <button className="btn baker__person-social--ul__btn">
                    <FaGoogle className="baker__person-social--ul__icon" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
