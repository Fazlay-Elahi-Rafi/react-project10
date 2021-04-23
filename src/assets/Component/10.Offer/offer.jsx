import React from "react";

import { useOffer } from "./useOffer";

import PdOne from "./products/pdOne";
import PdTwo from "./products/pdTwo";
import PdThree from "./products/pdThree";
import PdFour from "./products/pdFour";
import PdFive from "./products/pdFive";

export default function Offer() {
  const {
    click1,
    click2,
    click3,
    click4,
    click5,
    funOne,
    funTwo,
    funThree,
    funFour,
    funFive,
  } = useOffer();

  return (
    <section className="offer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5 pb-3">
            <span className="offer__span">category</span>
            <h1 className="offer__title mt-3">all products</h1>
            <hr className="sale__border" />
          </div>
        </div>
        <div className="row mb-5">
          <ul className="offer__list">
            <li className="offer__list-item">
              <button
                className={`btn offer__list-btn ${
                  click1 ? "offer__list-active" : "offer__list-default"
                }`}
                onClick={funOne}
              >
                bread-01
              </button>
            </li>
            <li className="offer__list-item">
              <button
                className={`btn offer__list-btn ${
                  click2 ? "offer__list-active" : "offer__list-default"
                }`}
                onClick={funTwo}
              >
                bread-02
              </button>
            </li>
            <li className="offer__list-item">
              <button
                className={`btn offer__list-btn ${
                  click3 ? "offer__list-active" : "offer__list-default"
                }`}
                onClick={funThree}
              >
                bread-03
              </button>
            </li>
            <li className="offer__list-item mt-2">
              <button
                className={`btn offer__list-btn ${
                  click4 ? "offer__list-active" : "offer__list-default"
                }`}
                onClick={funFour}
              >
                bread-04
              </button>
            </li>
            <li className="offer__list-item mt-2">
              <button
                className={`btn offer__list-btn ${
                  click5 ? "offer__list-active" : "offer__list-default"
                }`}
                onClick={funFive}
              >
                bread-05
              </button>
            </li>
          </ul>
        </div>

        <div className={`row ${click1 ? "show" : "hide"}`}>
          <PdOne />
        </div>
        <div className={`row ${click2 ? "show" : "hide"}`}>
          <PdTwo />
        </div>
        <div className={`row ${click3 ? "show" : "hide"}`}>
          <PdThree />
        </div>
        <div className={`row ${click4 ? "show" : "hide"}`}>
          <PdFour />
        </div>
        <div className={`row ${click5 ? "show" : "hide"}`}>
          <PdFive />
        </div>
      </div>
    </section>
  );
}
