import React from "react";

import img from "../../img/add-01.jpg";
import img2 from "../../img/add-02.jpg";
import img3 from "../../img/add-03.jpg";
import img4 from "../../img/add-04.jpg";

export default function Adds() {
  return (
    <section className="adds">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="row align-items-center justify-content-evenly">
              <div className="card border-0 text-white">
                <img src={img} className="card-img" alt="img" />
                <div className="card-img-overlay adds__overlay">
                  <div className="text-end mt-2 mt-md-4 me-4">
                    <h5 className="adds__title-one">just for bread lover's</h5>
                    <span className="adds__price-one"> $9.99</span>
                    <p className="adds__offer">
                      <span className="me-2">from</span>
                      <span className="adds__offer-date">24/12 to 27/18</span>
                    </p>
                    <button className="adds__btn btn">buy now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 mt-4 mt-lg-0">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="row justify-content-center">
                  <div className="col-10 col-md-6">
                    <button className="btn adds__button card border-0 text-white">
                      <img src={img2} className="card-img" alt="img" />
                      <div className="card-img-overlay adds__layer d-flex justify-content-end">
                        <div className="text-end">
                          <h5 className="adds__title-two">just only</h5>
                          <span className="adds__price-two">$19.00</span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="col-10 col-md-6 mt-3 mt-md-0">
                    <button className="btn adds__button card border-0 text-white">
                      <img src={img3} className="card-img" alt="img" />
                      <div className="card-img-overlay adds__layer">
                        <span className="adds__sale">sale</span>
                        <span className="adds__num">20%</span>
                        <h5 className="adds__title-three">today</h5>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12 mt-4 d-flex justify-content-center">
                <button className="btn adds__button card border-0 text-white">
                  <img className="img-fluid" src={img4} alt="img" />
                  <div className="card-img-overlay adds__layer d-flex align-items-center">
                    <div className="">
                      <span className="adds__sale2">sale</span>
                      <span className="adds__num2">15%</span>
                      <h5 className="adds__title-four">all bread</h5>
                      <p className="card-text text-uppercase">only for today</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
