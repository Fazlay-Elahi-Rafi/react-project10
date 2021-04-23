import React from "react";

export default function ItemProps(props) {
  return (
    <>
      <div className="col-lg-5 col-xl-6 m-auto">
        <img className="img-fluid" src={props.img} alt="img" />
      </div>
      <div className="col-lg-7 col-xl-6 mt-4 mt-lg-0">
        <h2 className="details__products-items--name">{props.name}</h2>
        <p className="details__products-items--text">{props.text}</p>
        <div className="details__products-items--info">
          <ul className="details__products-items--info__ul">
            <li>
              {props.cal}:
              <span className="details__products-items--info__span">
                {props.span}
              </span>
            </li>
            <li>
              {props.fat}:
              <span className="details__products-items--info__span">
                {props.span2}
              </span>
            </li>
            <li>
              {props.sat}:
              <span className="details__products-items--info__span">
                {props.span3}
              </span>
            </li>
            <li>
              {props.carbo}:
              <span className="details__products-items--info__span">
                {props.span4}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
