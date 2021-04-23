import React from "react";

import Slider from "react-slick";

import img from "../../img/header-01.jpg";
import img2 from "../../img/header-02.jpg";
import img3 from "../../img/header-03.jpg";

import SliderProps from "./sliderProps";

export default function HeaderSlider() {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
  };
  return (
    <Slider {...settings}>
      <SliderProps
        img={img}
        title="we implement sweet dreams"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      />
      <SliderProps
        img={img2}
        title="a little bliss in every bite"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      />
      <SliderProps
        img={img3}
        title="every betch from scratch"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      />
    </Slider>
  );
}
