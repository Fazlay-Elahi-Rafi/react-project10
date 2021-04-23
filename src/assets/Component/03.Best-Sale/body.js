import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  loadCurrentItem,
  addToCart,
  removeFromCart,
} from "./redux/Shopping/shopping-actions";

import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Body = ({ product, addToCart, loadCurrentItem, removeFromCart }) => {
  const [show, setShow] = useState(false);

  const showFun = () => {
    setShow(true);
    addToCart(product.id);
    alert("item add");
  };
  const hideFun = () => {
    alert("item remove");
    setShow(false);
    removeFromCart(product.id);
  };

  return (
    <>
      <div className="sale__item">
        <div className="sale__item-img">
          <div className="sale__item-icons">
            <div className="mb-3">
              <Link to={`/product/${product.id}`}>
                <BiSearchAlt
                  onClick={() => loadCurrentItem(product)}
                  className="sale__item-icons__icon"
                />
              </Link>
            </div>
            <div>
              <AiOutlineHeart
                className={`${
                  show ? "sale__item-icons__hide" : "sale__item-icons__show"
                }`}
                onClick={showFun}
              />
              <AiFillHeart
                className={`${
                  show ? "sale__item-icons__show" : "sale__item-icons__hide"
                }`}
                onClick={hideFun}
              />
            </div>
          </div>
          <img src={product.img} className="card-img-top" alt="img" />
        </div>
        <div className="card-body text-center">
          <h5 className="sale__item-title">{product.title}</h5>
          <span className="sale__item-storename">{product.store}</span>
          <p className="sale__item-price">
            <span className="fw-bold me-2">Price:</span> {product.price}
          </p>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Body);
