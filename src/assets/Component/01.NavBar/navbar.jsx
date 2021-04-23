import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { FiShoppingCart } from "react-icons/fi";

import FullPage from "./fullPage";

import img from "../../img/logo-1.png";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <>
      <FullPage />
      <nav className="navbar navbar-expand-lg d-none d-lg-block navbar-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 navbar__list">
              <li className="nav-item navbar__list-item me-5">
                <Link
                  className="nav-link navbar__list-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item navbar__list-item me-5">
                <Link className="nav-link navbar__list-link" to="/AboutPage">
                  about
                </Link>
              </li>
              <li className="nav-item navbar__list-item me-5">
                <Link className="nav-link navbar__list-link" to="/">
                  products
                </Link>
              </li>
              <li className="nav-item navbar__list-item me-5 text-center">
                <Link className="navbar__logo" to="/">
                  <img className="img-fluid w-50" src={img} alt="logo" />
                </Link>
              </li>
              <li className="nav-item navbar__list-item me-5">
                <div className="dropdown navbar__submenu">
                  <button
                    className="nav-link navbar__list-link btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    page
                  </button>
                  <ul
                    className="dropdown-menu navbar__submenu-list"
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
              <li className="nav-item navbar__list-item me-5">
                <Link className="nav-link navbar__list-link" to="/BlogPage">
                  blog
                </Link>
              </li>
              <li className="nav-item navbar__list-item">
                <Link className="nav-link navbar__list-link" to="/ContactPage">
                  contact
                </Link>
              </li>
              <Link to="/cart" className="navbar__cart">
                <FiShoppingCart className="navbar__cart-icon" />
                <span className="navbar__cart-num">{cartCount}</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
