import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";

import Products from "./products";
import SingleItem from "./SingleItem";

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

          <Router>
            <Switch>
              <Route exact path="/" component={Products} />
              {!current ? (
                <Redirect to="/" />
              ) : (
                <Route exact path="/product/:id" component={SingleItem} />
              )}
            </Switch>
          </Router>
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
