import React from "react";

import Props from "./props";

import img from "../../img/baker-01.jpg";
import img2 from "../../img/baker-02.jpg";
import img3 from "../../img/baker-03.jpg";

export default function Team() {
  return (
    <section className="team">
      <div className="container">
        <div className="row my-5 py-3">
          <div className="col-12 text-center">
            <span className="blog__span">golden hand</span>
            <h1 className="blog__title my-1">our team</h1>
          </div>
        </div>

        <div className="row mb-5 pb-5">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <Props
              img={img}
              name="fazlay elahi rafi"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              span="ceo - founder"
            />
          </div>
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <Props
              img={img2}
              name="md rafi"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              span="ceo - founder"
            />
          </div>
          <div className="col-12 col-lg-4">
            <Props
              img={img3}
              name="agnes buchanan"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              span="ceo - founder"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
