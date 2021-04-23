import React from "react";

import img from "../../img/blog-01.jpg";
import img2 from "../../img/blog-02.jpg";
import img3 from "../../img/blog-03.jpg";

export default function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5 pb-3">
            <span className="blog__span">our story</span>
            <h1 className="blog__title my-3">blog & news</h1>
            <hr className="sale__border" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-xl-5">
            <div className="card border-0 blog__body">
              <div className="blog__img">
                <img src={img} className="card-img img-fluid" alt="img" />
              </div>
              <span className="blog__date">
                by
                <span className="blog__date-provider">Fazlay elahi rafi</span> /
                June 23, 2017
              </span>
              <div className="card-img-overlay blog__overlay justify-content-start">
                <div className="">
                  <h5 className="blog__text-one">
                    barbecue party tips for a truly amazing event
                  </h5>
                  <p className="blog__text-para">
                    No matter how far along you are in your sophistication as an
                    amateur astronomer, there ...
                  </p>
                  <button className="blog__btn btn">details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-5 mt-4 mt-xl-0">
            <div className="col-12 mb-4">
              <div className="card border-0 blog__body">
                <div className="blog__img">
                  <img src={img2} className="card-img img-fluid" alt="img" />
                </div>
                <span className="blog__date">
                  by
                  <span className="blog__date-provider">Fazlay elahi rafi</span>
                  / June 23, 2017
                </span>
                <div className="card-img-overlay blog__overlay justify-content-end">
                  <div className="text-end mt-5 mt-xl-0">
                    <h5 className="blog__text-two">
                      where i learning cook cupcakes ?
                    </h5>
                    <p className="blog__text-para d-none d-sm-block">
                      No matter how far along you are in your sophistication as
                      an amateur astronomer.
                    </p>
                    <button className="blog__btn btn mt-1 mt-sm-0">
                      details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card border-0 blog__body">
                <div className="blog__img">
                  <img src={img3} className="card-img img-fluid" alt="img" />
                </div>
                <span className="blog__date">
                  by
                  <span className="blog__date-provider">Fazlay elahi rafi</span>
                  / June 23, 2017
                </span>
                <div className="card-img-overlay blog__overlay justify-content-end">
                  <div className="text-end mt-5 mt-xl-0">
                    <h5 className="blog__text-three">
                      where i learning cook cupcakes ?
                    </h5>
                    <p className="blog__text-para d-none d-sm-block">
                      No matter how far along you are in your sophistication as
                      an amateur astronomer.
                    </p>
                    <button className="blog__btn btn mt-1 mt-sm-0">
                      details
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
