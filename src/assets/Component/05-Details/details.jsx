import React from "react";
import Products from "./products";

export default function Details() {
  return (
    <section className="details">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5 pb-3">
            <span className="details__span">today's special</span>
            <h1 className="details__title mt-3">only for today</h1>
            <hr className="sale__border" />
          </div>
        </div>
        <div className="row">
          <Products />
        </div>
      </div>
    </section>
  );
}
