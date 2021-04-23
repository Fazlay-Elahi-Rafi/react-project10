import React from "react";

import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaGooglePlusG, FaTwitter, FaFacebookF, FaRss } from "react-icons/fa";

export default function Props( props ) {
  return (
    <>
      <ul className="address__list">
        <li>
          <h3 className="address__place">{props.place}</h3>
        </li>
        <li>
          <h3 className="address__comp">{props.comp}</h3>
        </li>
        <li className="mb-1">
          <span className="address__contact">
            <FiMail className="address__icon" /> {props.mail}
          </span>
        </li>
        <li>
          <span className="address__contact">
            <FiPhoneCall className="address__icon" />
            {props.num}
          </span>
        </li>
      </ul>
      <div className="address__social">
        <div className="col-4 col-md-5 col-xl-3">
          <ul className="address__social-list">
            <li>
              <a className="address__social-link" href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a className="address__social-link" href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a className="address__social-link" href="#">
                <FaGooglePlusG />
              </a>
            </li>
            <li>
              <a className="address__social-link" href="#">
                <FaRss />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
