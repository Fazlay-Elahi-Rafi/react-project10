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
  return (
    <>
      <Link
        to="/"
        style={{ cursor: "default" }}
        className="sale__backdropshow"
      ></Link>
      <div className="sale__single-product">
        <div className="card mb-3 border-0">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 pe-md-0">
              <img className="img-fluid w-100" src={current.img} alt="img" />
            </div>
            <div className="col-12 col-md-6 col-lg-7 m-auto">
              <div className="card-body">
                <h5 className="text-capitalize sale__single-product--title">
                  {current.title}
                </h5>
                <p className="card-text sale__single-product--price">
                  <span className="sale__single-product--price--only">
                    only:
                  </span>
                  {current.price}
                </p>
                <p className="card-text text-capitalize sale__single-product--avail">
                  availability:
                  <span className="sale__single-product--stock">in stock</span>
                </p>

                <button
                  className="btn sale__single-addbtn"
                  onClick={addFun}
                  // onClick={() => addToCart(current.id)}
                >
                  add to cart
                  <RiArrowRightSLine className="sale__single-addbtn-icon" />
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
