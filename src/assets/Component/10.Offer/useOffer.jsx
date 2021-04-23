import { useState } from "react";

import ItemOne from "./api/item-1";
import ItemTwo from "./api/item-2";
import ItemThree from "./api/item-3";
import ItemFour from "./api/item-4";
import ItemFive from "./api/item-5";

export const useOffer = () => {
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);

  const [state, setState] = useState(ItemOne);
  const [state2, setState2] = useState(ItemTwo);
  const [state3, setState3] = useState(ItemThree);
  const [state4, setState4] = useState(ItemFour);
  const [state5, setState5] = useState(ItemFive);

  const funOne = () => {
    setClick1(true);

    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  };
  const funTwo = () => {
    setClick2(true);

    setClick1(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  };
  const funThree = () => {
    setClick3(true);

    setClick1(false);
    setClick2(false);
    setClick4(false);
    setClick5(false);
  };
  const funFour = () => {
    setClick4(true);

    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick5(false);
  };
  const funFive = () => {
    setClick5(true);

    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick4(false);
  };

  return {
    state,
    state2,
    state3,
    state4,
    state5,

    click1,
    click2,
    click3,
    click4,
    click5,

    setState,
    setState2,
    setState3,
    setState4,
    setState5,
    
    setClick1,
    setClick2,
    setClick3,
    setClick4,
    setClick5,

    funOne,
    funTwo,
    funThree,
    funFour,
    funFive,
  };
};
