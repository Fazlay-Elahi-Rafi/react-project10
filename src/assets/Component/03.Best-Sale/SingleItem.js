import React from "react";
import { Link } from "react-router-dom";

import { RiArrowRightSLine } from "react-icons/ri";
import { connect } from "react-redux";
import { addToCart } from "./redux/Shopping/shopping-actions";

const SingleItem = ({ current, addToCart }) => {
  const addFun = () => {
    addToCart(current.id);
    alert("item add");
  };
  return current === null ? (
    <div className="single__error">
      <h3 className="single__error-title">Oops!! there is no items</h3>
      <Link to="/" className="btn single__error-btn">
        go back
      </Link>
    </div>
  ) : (
    <>
      <div className="single__product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 pe-md-0">
              <img
                className="img-fluid w-100 rounded"
                src={current.img}
                alt="img"
              />
            </div>
            <div className="col-12 col-md-5 m-auto">
              <div className="card-body">
                <h5 className="text-capitalize single__product-title">
                  {current.title}
                </h5>
                <p className="card-text single__product-price">
                  <span className="single__product-price--only">only:</span>
                  {current.price}
                </p>
                <p className="card-text text-capitalize single__product-avail">
                  availability:
                  <span className="single__product-stock">in stock</span>
                </p>

                <button className="btn single__addbtn" onClick={addFun}>
                  add to cart
                  <RiArrowRightSLine className="single__addbtn-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
