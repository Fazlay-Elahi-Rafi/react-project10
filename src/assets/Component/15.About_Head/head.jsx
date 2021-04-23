import React from "react";
import { Link } from "react-router-dom";

import img from "../../img/about-head-01.jpg";
import img2 from "../../img/about-intro.png";

export default function Head() {
  return (
    <section className="head">
      <div className="card border-0">
        <img className="head__img img-fluid" src={img} alt="img" />
        <div className="card-img-overlay head__overlay">
          <div className="text-center">
            <h1 className="head__title">about us</h1>
            <ul className="head__list">
              <li>
                <Link className="head__home" to="/">
                  home
                </Link>
              </li>
              <span className="px-2 text-light">/</span>
              <li>
                <Link className="head__about" to="/AboutPage">
                  about
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-lg-6 text-center m-auto">
            <div className="head__margin">
              <span className="head__span">our baker</span>
              <h1 className="head__name my-3">fazlay elahi rafi</h1>
              <p className="head__details">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                voluptatem assumenda ipsum repellat laborum quidem molestiae
                voluptate natus sit magnam, nobis deserunt consequuntur id!
                Vitae distinctio doloremque quisquam voluptate magni?
              </p>

              <h3 className="head__span pt-4">md.rafi</h3>
              <span className="head__shop">CEO - Vanila Bakery Shop</span>
            </div>
          </div>
          <div className="col-6 d-none d-lg-block text-end">
            <img className="img-fluid" src={img2} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
