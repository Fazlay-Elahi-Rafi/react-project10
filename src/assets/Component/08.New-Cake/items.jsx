import React from "react";
import { useItem } from "./useItem";

export default function Items() {
  const { value } = useItem();

  return (
    <section className="items">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center mb-5 pb-3">
            <span className="items__span">new cookies</span>
            <h1 className="items__title my-3">new hot bread</h1>
            <hr className="sale__border" />
          </div>
        </div>
        <div className="row">
          {value.map((item) => {
            const { id, title, price, img, description } = item;
            return (
              <div className="col-12 col-xl-6 mb-5 mb-xl-3" key={id}>
                <div className="card items__card">
                  <div className="row g-0">
                    <div className="col-md-5 items__card-img">
                      <img className="img-fluid" src={img} alt="img" />
                    </div>
                    <div className="col-md-7 items__card-body d-flex align-items-center">
                      <div className="card-body">
                        <h5 className="items__card-text">{title}</h5>
                        <p className="items__card-des">{description}</p>
                        <span className="items__card-price">
                          price: {price}
                        </span>
                        <div className="text-end">
                          <button className="btn items__card-btn">
                            order now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
