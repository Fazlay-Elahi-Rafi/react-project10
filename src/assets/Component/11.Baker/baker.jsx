import React from "react";

import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

import img from "../../img/baker-01.jpg";
import img2 from "../../img/baker-02.jpg";

export default function Baker() {
  return (
    <section className="baker">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-5">
            <h1 className="baker__title">our baker</h1>
            <p className="baker__para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quae
              consectetur unde saepe, porro voluptatibus.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              voluptate nemo odit amet minima error esse corrupti optio
              voluptatum? Suscipit, nobis unde. Corrupti temporibus vel velit
              sunt, facilis minus quas.
            </p>
            <ul className="baker__list">
              <li>Lorem ipsum dolor sit</li>
              <li>consectetur adipisicing elit</li>
              <li>voluptate nemo odit amet</li>
            </ul>
            <button className="btn baker__btn">read more </button>
          </div>
          <div className="col-12 col-xl-7 mt-5 pt-5 mt-xl-0 pt-xl-0">
            <div className="row">
              <div className="col-12 col-md-6 mb-5 mb-lg-0">
                <div className="card border-0">
                  <div className="baker__person">
                    <div className="baker__person-img">
                      <img
                        className="card-img-top img-fluid"
                        src={img}
                        alt="img"
                      />
                    </div>
                    <div className="card-body text-center py-4">
                      <h3 className="baker__person-name">fazlay elahi rafi</h3>
                      <span className="baker__person-span">ceo - founder</span>
                      <p className="baker__person-p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
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
              </div>
              <div className="col-12 col-md-6">
                <div className="card border-0">
                  <div className="baker__person">
                    <div className="baker__person-img">
                      <img
                        className="card-img-top img-fluid"
                        src={img2}
                        alt="img"
                      />
                    </div>
                    <div className="card-body text-center py-4">
                      <h3 className="baker__person-name">md.rafi</h3>
                      <span className="baker__person-span">ceo - founder</span>
                      <p className="baker__person-p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
