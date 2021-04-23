import React from "react";

import Header from "../Component/02.Header/header";
import Sale from "../Component/03.Best-Sale/sale";
import Bread from "../Component/04.Hot-Deal/bread";
import Details from "../Component/05-Details/details";
import Price from "../Component/06.Price/price";
import Info from "../Component/07.Info/info";
import Items from "../Component/08.New-Cake/items";
import Adds from "../Component/09.Adds/adds";
import Offer from "../Component/10.Offer/offer";
import Baker from "../Component/11.Baker/baker";
import Blog from "../Component/12.Blog/blog";

export default function Home() {
  return (
    <>
      <Header />
      <Sale />
      <Bread />
      <Details />
      <Price />
      <Info />
      <Items />
      <Adds />
      <Offer />
      <Baker />
      <Blog />
    </>
  );
}
