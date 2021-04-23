import React from "react";

import { Link } from "react-router-dom";

import Search from "./search";

export default function NavTop() {
  return (
    <>
      <section className="top">
        <div className="container">
          <div className="row">
            <div className="col-9 col-lg-6 d-none d-md-block">
              <span className="top__text">
                460 West 34th Street, 15th floor, New York - Hotline:
                804-377-3580 - 804-399-3580
              </span>
            </div>
            <div className="col-12 col-md-3 col-lg-6 d-flex justify-content-center justify-content-md-end align-items-center">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle top__dropbtn"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  eur
                </button>
                <ul
                  className="dropdown-menu top__dropbtn-list"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="/">
                      usd
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      eur
                    </Link>
                  </li>
                </ul>
              </div>
              <Search />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
