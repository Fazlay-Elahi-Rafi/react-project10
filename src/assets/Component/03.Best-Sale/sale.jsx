import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { connect } from "react-redux";

import Products from "./products";

const Sale = ({ current }) => {
  return (
    <section className="sale">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5 pb-3">
            <span className="sale__span">best cupcakes</span>
            <h1 className="sale__title">best sale</h1>
            <hr className="sale__border" />
          </div>

          <Route exact path="/" component={Products} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(Sale);
