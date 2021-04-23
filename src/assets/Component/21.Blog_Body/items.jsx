import React from "react";

import {
  AiOutlinePaperClip,
  AiOutlineTags,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaCalendarAlt, FaRegComment, FaFacebookF } from "react-icons/fa";

export default function Items({ id, link, date, comnt, tag, text, img }) {
  return (
    <>
      <div className="card border-0 body__card mb-5" key={id}>
        <div className="body__img">
          <img src={img} className="card-img-top img-fluid" alt="img" />
        </div>
        <div className="mt-3">
          <a href="#" className="body__link text-capitalize">
            <AiOutlinePaperClip />
            {link}
          </a>
          <div className="body__list mt-2 mb-4">
            <ul className="body__list-ul">
              <li>
                <FaCalendarAlt />
                <span className="body__list-ul--span">{date}</span>
              </li>
              <li className="body__list-ul--middle">
                <FaRegComment />
                <span className="body__list-ul--span">{comnt}</span>
              </li>
              <li>
                <AiOutlineTags />
                <span className="body__list-ul--span">{tag}</span>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="body__text">{text}</p>
          </div>
          <div className="d-block d-xl-flex justify-content-between">
            <a href="#" className="btn body__btn-one">
              read more
            </a>
            <div className="body__linkBtn mt-3 mt-xl-0">
              <a href="#" className="btn body__linkBtn-one">
                <FaFacebookF className="body__linkBtn-icon" />
                <span className="body__linkBtn-text">share</span>
              </a>
              <a href="#" className="btn body__linkBtn-two">
                <AiOutlineTwitter className="body__linkBtn-icon" />
                <span className="body__linkBtn-text">tweet</span>
              </a>
              <a href="#" className="btn body__linkBtn-three">
                <AiFillInstagram className="body__linkBtn-icon" />
                <span className="body__linkBtn-text">inster</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
