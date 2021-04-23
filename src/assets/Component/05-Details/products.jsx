import React from "react";

import { useFetch } from "./useFetch";

import ItemProps from "./itemProps";

import img from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";
import img5 from "../../img/5.png";

export default function Products() {
  const {
    pOne,
    pTwo,
    pThree,
    pFour,
    pFive,
    itemOne,
    itemTwo,
    itemThree,
    itemFour,
    itemFive,
  } = useFetch();

  return (
    <div className="details__products d-block d-lg-flex justify-content-between">
      <div className="col-12 col-lg-2 mb-5 pb-5 mb-lg-0 pb-lg-0">
        <ul className="details__products-list">
          <li
            className={`details__products-list--item ${
              pOne ? "borderRight " : "borderHide"
            }`}
          >
            <button
              className={`btn details__products-list--item__btn ${
                pOne ? "active" : "hide"
              }`}
              onClick={itemOne}
            >
              kaiser roll
            </button>
          </li>
          <li
            className={`details__products-list--item ${
              pTwo ? "borderRight" : "borderHide"
            }`}
          >
            <button
              className={`btn details__products-list--item__btn ${
                pTwo ? "active" : "hide"
              }`}
              onClick={itemTwo}
            >
              apricot nut
            </button>
          </li>
          <li
            className={`details__products-list--item ${
              pThree ? "borderRight" : "borderHide"
            }`}
          >
            <button
              className={`btn details__products-list--item__btn ${
                pThree ? "active" : "hide"
              }`}
              onClick={itemThree}
            >
              onioun bialy
            </button>
          </li>
          <li
            className={`details__products-list--item ${
              pFour ? "borderRight" : "borderHide"
            }`}
          >
            <button
              className={`btn details__products-list--item__btn ${
                pFour ? "active" : "hide"
              }`}
              onClick={itemFour}
            >
              rye bread
            </button>
          </li>
          <li
            className={`details__products-list--item ${
              pFive ? "borderRight" : "borderHide"
            }`}
          >
            <button
              className={`btn details__products-list--item__btn ${
                pFive ? "active" : "hide"
              }`}
              onClick={itemFive}
            >
              apricot
            </button>
          </li>
        </ul>
      </div>

      <div className="col-12 col-lg-9 col-xl-8">
        <div className={`row ${pOne ? "showItem" : "hideItem"}`}>
          <ItemProps
            img={img}
            name="clipartKey bred clipart"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              dolores vitae atque numquam adipisci quod sed sit perspiciatis.
              Commodi laboriosam optio officia officiis minima eligendi eaque
              rem tenetur hic doloremque."
            cal="calories"
            span="130"
            fat="total fat"
            span2="1.5 gram"
            sat="saturated fat"
            span3="1.2 gram"
            carbo="total carbohydrates"
            span4="25 gram"
          />
        </div>
        <div className={`row ${pTwo ? "showItem" : "hideItem"}`}>
          <ItemProps
            img={img2}
            name="loaf of bread"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              dolores vitae atque numquam adipisci quod sed sit perspiciatis.
              Commodi laboriosam optio officia officiis minima eligendi eaque
              rem tenetur hic doloremque."
            cal="calories"
            span="130"
            fat="total fat"
            span2="1.5 gram"
            sat="saturated fat"
            span3="1.2 gram"
            carbo="total carbohydrates"
            span4="25 gram"
          />
        </div>
        <div className={`row ${pThree ? "showItem" : "hideItem"}`}>
          <ItemProps
            img={img3}
            name="bakery marmalade bread"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              dolores vitae atque numquam adipisci quod sed sit perspiciatis.
              Commodi laboriosam optio officia officiis minima eligendi eaque
              rem tenetur hic doloremque."
            cal="calories"
            span="130"
            fat="total fat"
            span2="1.5 gram"
            sat="saturated fat"
            span3="1.2 gram"
            carbo="total carbohydrates"
            span4="25 gram"
          />
        </div>
        <div className={`row ${pFour ? "showItem" : "hideItem"}`}>
          <ItemProps
            img={img4}
            name="bakery panini small bread"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              dolores vitae atque numquam adipisci quod sed sit perspiciatis.
              Commodi laboriosam optio officia officiis minima eligendi eaque
              rem tenetur hic doloremque."
            cal="calories"
            span="130"
            fat="total fat"
            span2="1.5 gram"
            sat="saturated fat"
            span3="1.2 gram"
            carbo="total carbohydrates"
            span4="25 gram"
          />
        </div>
        <div className={`row ${pFive ? "showItem" : "hideItem"}`}>
          <ItemProps
            img={img5}
            name="sliced loaf breads"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              dolores vitae atque numquam adipisci quod sed sit perspiciatis.
              Commodi laboriosam optio officia officiis minima eligendi eaque
              rem tenetur hic doloremque."
            cal="calories"
            span="130"
            fat="total fat"
            span2="1.5 gram"
            sat="saturated fat"
            span3="1.2 gram"
            carbo="total carbohydrates"
            span4="25 gram"
          />
        </div>
      </div>
    </div>
  );
}
