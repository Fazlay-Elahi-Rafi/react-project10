import React, { useState } from "react";

import Data from "./data";

export default function Win() {
  const [data, setData] = useState(Data);
  return (
    <section className="win">
      <div className="container">
        <div className="row mb-5 pb-3">
          <div className="col-12 text-center">
            <span className="blog__span">our record</span>
            <h1 className="blog__title my-1">winner awards</h1>
          </div>
        </div>

        <div className="row">
          {data.map((item) => {
            const { id, title, date, description, img } = item;
            return (
              <div
                className="col-12 col-lg-4 text-center mb-5 pb-5 mb-lg-0 pb-lg-0"
                key={id}
              >
                <img className="win__icon" src={img} alt="img" />

                <h3 className="win__text">{title}</h3>
                <span className="win__date">{date}</span>
                <p className="win__desc my-4">{description}</p>
                <button className="win__btn btn">read more</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
