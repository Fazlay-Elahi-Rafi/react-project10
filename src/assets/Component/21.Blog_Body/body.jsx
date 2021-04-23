import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Items from "./items";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Body() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [blog, upBlog] = useState([]);

  useEffect(() => {
    if (loading) return;
    upBlog(data[page]);
  }, [loading, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <>
      <section className="body d-flex">
        <div className="col-12 col-lg-9 d-flex justify-content-center my-5">
          <div className="col-11 col-md-8">
            {blog.map((items) => {
              return <Items key={items.id} {...items} />;
            })}

            <div className="col-6 d-flex justify-content-around m-auto">
              <button className="btn body__paginat-arrow" onClick={prevPage}>
                <FaArrowLeft className="body__paginat-icon" />
              </button>
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`btn body__paginat ${
                      index === page ? "body__paginat-active" : null
                    }`}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
              <button className="btn body__paginat-arrow" onClick={nextPage}>
                <FaArrowRight className="body__paginat-icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 d-none d-lg-block body__right">
          <div className="row m-auto py-5">
            <h1 className="body__right-title">search</h1>
            <div className="col-8">
              <input
                className="form-control body__right-inp"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="row my-5 m-auto">
            <h1 className="body__right-title">category</h1>
            <div className="col-6">
              <ul className="body__right-list">
                <li>
                  <a href="#"> Amazin Glazin</a>
                </li>
                <li>
                  <a href="#"> Confection Connect</a>
                </li>
                <li>
                  <a href="#"> Mad Batter</a>
                </li>
                <li>
                  <a href="#"> Skippity Scones</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt- m-auto">
            <h1 className="body__right-title">tags</h1>
            <div className="col-7 col-xxl-5">
              <ul className="body__right-tag--list">
                <li>
                  <button className="btn">bakery</button>
                </li>
                <li>
                  <button className="btn">bkery</button>
                </li>
                <li>
                  <button className="btn">coconut</button>
                </li>
                <li>
                  <button className="btn">cupcake</button>
                </li>
                <li>
                  <button className="btn">sugar flower</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
