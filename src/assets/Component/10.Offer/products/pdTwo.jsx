import React from "react";
import { useOffer } from "../useOffer";

export default function PdTwo() {
  const { state2 } = useOffer();
  return (
    <>
      {state2.map((items) => {
        const { title, store, img, price, id, oldPrice } = items;
        return (
          <div className="col-12 col-md-6 col-xl-3 mb-5 mb-xl-0" key={id}>
            <div className="offer__product">
              <div className="card border-0">
                <div className="card-img-top">
                  <div className="offer__product-img">
                    <img className="img-fluid" src={img} alt="img" />
                  </div>
                  <div className="card-body text-center py-4">
                    <h3 className="offer__product-text">{title}</h3>
                    <span className="offer__product-store">{store}</span>
                    <del className="offer__product-oldPrice">{oldPrice}</del>
                    <span className="offer__product-price">{price}</span>
                    <button className="offer__product-btn btn mt-3">
                      order now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
