import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Navbar....
import Navbar from "./01.NavBar/navbar";
import NavTop from "./01.NavBar/navTop";

// Pages....
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import CartPage from "../Pages/CartPage";
import ContactPage from "../Pages/ContactPage";
import BlogPage from "../Pages/BlogPage";
import ErrorPage from "../Pages/ErrorPage";

// Loader....
import img from "../img/loader.gif";

import { Provider } from "react-redux";

// Fixed Components....
import store from "./03.Best-Sale/redux/store";
import Footer from "./14.Footer/footer";
import AboutUs from "./13.About-Us/aboutUs";
import Scroll from "../Component/00.Scroll-Up/scroll";

export default function App() {
  const [loader, upLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      upLoader(false);
    }, 2000);
  }, []);

  if (loader) {
    return (
      <>
        <div className="loader">
          <img src={img} alt="loader" />
        </div>
      </>
    );
  }
  return (
    <>
      <Provider store={store}>
        <Router>
          <NavTop />
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/AboutPage" component={AboutPage} />
            <Route exact path="/CartPage" component={CartPage} />
            <Route exact path="/ContactPage" component={ContactPage} />
            <Route exact path="/ContactPage" component={ContactPage} />
            <Route exact path="/BlogPage" component={BlogPage} />
            <Route exact path="*" component={ErrorPage} />
          </Switch>
          <AboutUs />
          <Footer />
          <Scroll showBelow={500} />
        </Router>
      </Provider>
    </>
  );
}
