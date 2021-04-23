import React from "react";

import img from "../../img/info.png";

export default function Info() {
  return (
    <section className="info">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <img className="img-fluid" src={img} alt="img" />
          </div>
          <div className="col-12 col-lg-6 m-auto text-center pt-lg-5">
            <p className="info__para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id saepe
              illum perferendis nihil! Illum quod architecto ipsum eligendi
              accusantium voluptatibus qui, possimus alias voluptates voluptas
              esse iusto obcaecati et perspiciatis.
            </p>
            <span className="info__bakery">sunsine - CEO Bakery</span>
            <span className="info__name">sunsine</span>
          </div>
        </div>
      </div>
    </section>
  );
}
