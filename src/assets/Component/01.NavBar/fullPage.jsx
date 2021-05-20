import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { TiTimesOutline } from "react-icons/ti";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";

import img from "../../img/logo-1.png";

const FullPage = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [show, upShow] = useState(false);

  const closeFun = () => {
    upShow(false);
  };

  const showFun = () => {
    upShow(true);
  };

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <section className="d-block d-lg-none">
      <div className="container">
        <div className="row">
          <div className="col-3 col-sm-2">
            <Link to="/">
              <img className="img-fluid" src={img} alt="logo" />
            </Link>
          </div>
          <div className="col-9 col-sm-10 d-flex justify-content-end align-items-center">
            <div className="col-9 col-sm-10 d-flex justify-content-end">
              <Link to="/CartPage" className="navbar__cart">
                <FiShoppingCart className="navbar__cart-icon" />
                <span className="navbar__cart-num">{cartCount}</span>
              </Link>
            </div>
            <div className="col-3 col-sm-2 d-flex justify-content-center">
              <div className="fullpage__bars">
                <FaBars
                  onClick={showFun}
                  className="fullpage__bars-icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${show ? "fullpage__navclose fullpage" : "fullpage"}`}>
        <div className="container">
          <div className="col-12 my-3 text-light">
            <TiTimesOutline
              onClick={closeFun}
              className={`${show ? "fullpage__close" : "navclose"}`}
              style={{ cursor: "pointer" }}
            />
          </div>
  
          <ul className="fullpage__list">
            <li className="fullpage__list-li my-4">
              <Link className="fullpage__list-link active" to="/">
                home
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link className="fullpage__list-link" to="/AboutPage">
                about
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link className="fullpage__list-link" to="/">
                products
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <div className="dropend fullpage__submenu">
                <button
                  className="fullpage__list-link btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  page
                </button>
                <ul
                  className="dropdown-menu fullpage__submenu-list"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="/CartPage">
                      cart
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ErrorPage">
                      404
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link className="fullpage__list-link" to="/BlogPage">
                blog
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link className="fullpage__list-link" to="/ContactPage">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(FullPage);
