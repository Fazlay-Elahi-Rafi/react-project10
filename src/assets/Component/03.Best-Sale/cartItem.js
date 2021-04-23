import React, { useState } from "react";
import { connect } from "react-redux";

import { RiDeleteBin6Line } from "react-icons/ri";

import {
  adjustItemQty,
  removeFromCart,
} from "./redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img className="img-fluid" src={item.img} alt={item.title} />
          </div>
          <div className="col-md-6 d-flex m-auto">
            <div className="card-body">
              <h5 className="card-title text-capitalize cart__title">
                {item.title}
              </h5>
              <p className="card-text py-2">
                <h5 className="text-muted text-capitalize cart__price">
                  price: {item.price}
                </h5>
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="qty">Qty</label>
                <input
                  className="cart__inp"
                  min="1"
                  type="number"
                  id="qty"
                  name="qty"
                  value={input}
                  onChange={onChangeHandler}
                />
                <div
                  className="cart__bin"
                  onClick={() => removeFromCart(item.id)}
                >
                  <RiDeleteBin6Line className="cart__bin-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
