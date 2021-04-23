import React from "react";

export default function Price() {
  return (
    <section className="price">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5 pb-3">
            <span className="price__span">food menu</span>
            <h1 className="price__title my-3">unspeakably good</h1>
            <hr className="sale__border" />
            <div className="col-12 col-lg-6 mt-4 m-auto">
              <p className="price__p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                reprehenderit dolor sequi ex minima saepe suscipit labore
                debitis quisquam natus.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6">
            <ul className="price__list">
              <li>
                french crostini <hr className="price__list-line" />
                <span className="price__list-money">$10.00</span>
                <p className="price__list-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li>
                bialy egg sandwich <hr className="price__list-line" />
                <span className="price__list-money">$14.00</span>
                <p className="price__list-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li>
                multigrain hot cereal <hr className="price__list-line" />
                <span className="price__list-money">$12.00</span>
                <p className="price__list-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li>
                french crostini <hr className="price__list-line" />
                <span className="price__list-money">$19.00</span>
                <p className="price__list-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-6 d-lg-flex justify-content-lg-end">
            <ul className="price__list">
              <li>
                french crostini <hr className="price__list-line" />
                <span className="price__list-money">$19.00</span>
                <p className="price__list-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li>
                bialy egg sandwich <hr className="price__list-line" />
                <span className="price__list-money">$10.00</span>
                <p className="price__list-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li>
                multigrain hot cereal <hr className="price__list-line" />
                <span className="price__list-money">$15.00</span>
                <p className="price__list-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li>
                french crostini <hr className="price__list-line" />
                <span className="price__list-money">$20.00</span>
                <p className="price__list-text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
