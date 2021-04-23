import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import Head from "./head";

import CartItem from "./cartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * 2;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <>
      <Head />
      <div className="container mb-5 pb-5">
        <div className="row">
          <div className="col-12 col-xl-7 mt-5 pt-5">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="col-12 col-xl-5 mt-5 pt-5">
            <div className="card py-4">
              <div className="card-body">
                <h4 className="card-title mb-3">Cart Summary</h4>
                <div className="my-4">
                  <span>TOTAL: ({totalItems} items)</span>
                  <span>$ {totalPrice}0</span>
                </div>
                <button className="btn btn-outline-info">
                  Proceed To Checkout
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
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
