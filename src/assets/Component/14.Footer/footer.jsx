import React from "react";
import { Link } from "react-router-dom";

import {
  FaCcVisa,
  FaCreditCard,
  FaPiggyBank,
  FaFacebookF,
} from "react-icons/fa";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { RiBankLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 mb-md-5 mb-xl-0">
            <h5 className="footer__title">payments accepted</h5>
            <div className="col-7">
              <ul className="footer__list">
                <li className="footer__list-item">
                  <Link className="footer__list-link__one" to="/">
                    <FaCcVisa />
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link className="footer__list-link__two" to="/">
                    <FaCreditCard />
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link className="footer__list-link__three" to="/">
                    <RiBankLine />
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link className="footer__list-link__four" to="/">
                    <FaPiggyBank />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 my-5 my-md-0 mb-md-5 mb-xl-0">
            <div className="">
              <h5 className="footer__title">work time</h5>
              <ul className="m-0 p-0 mt-4">
                <li className="list-unstyled">Monday - Friday</li>
                <li className="list-unstyled my-2">8:00 am - 8:30 pm</li>
                <li className="list-unstyled mb-2">Satuday - Sunday</li>
                <li className="list-unstyled">10:00 am - 16:30 pm</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-0">
            <h5 className="footer__title">orders and returns</h5>
            <ul className="m-0 p-0">
              <li className="list-unstyled">
                <button className="btn footer__orderBtn">order</button>
              </li>
              <li className="list-unstyled">
                <button className="btn footer__orderBtn">shopping</button>
              </li>
              <li className="list-unstyled">
                <button className="btn footer__orderBtn">
                  policy & return
                </button>
              </li>
              <li className="list-unstyled">
                <button className="btn footer__orderBtn">paymentss</button>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <h5 className="footer__title">contact</h5>
            <div className="footer__social">
              <span className="d-block footer__social-con">
                <span className="footer__social-acc">email:</span>
                fazlayrafi2001@gmail.com
              </span>
              <span className="footer__social-con">
                <span className="footer__social-acc">phone:</span> 01828481501
              </span>

              <ul className="m-0 p-0 my-5">
                <li className="list-unstyled d-inline">
                  <button className="btn footer__social-btn">
                    <FaFacebookF className="footer__social-btn--icon" />
                  </button>
                </li>
                <li className="list-unstyled d-inline">
                  <button className="btn footer__social-btn">
                    <AiFillGithub className="footer__social-btn--icon" />
                  </button>
                </li>
                <li className="list-unstyled d-inline">
                  <button className="btn footer__social-btn">
                    <AiOutlineTwitter className="footer__social-btn--icon" />
                  </button>
                </li>
                <li className="list-unstyled d-inline">
                  <button className="btn footer__social-btn">
                    <AiFillInstagram className="footer__social-btn--icon" />
                  </button>
                </li>
              </ul>
            </div>
            <span className="footer__social-acc">
              Design by - <span className="footer__social-con">MD.RAFI</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
