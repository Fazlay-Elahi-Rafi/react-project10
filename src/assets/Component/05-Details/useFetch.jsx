import { useState } from "react";

export const useFetch = () => {
  const [pOne, upPOne] = useState(true);
  const [pTwo, upPTwo] = useState(false);
  const [pThree, upPThree] = useState(false);
  const [pFour, upPFour] = useState(false);
  const [pFive, upPFive] = useState(false);

  const itemOne = () => {
    upPOne(true);

    upPTwo(false);
    upPThree(false);
    upPFour(false);
    upPFive(false);
  };

  const itemTwo = () => {
    upPTwo(true);

    upPOne(false);
    upPThree(false);
    upPFour(false);
    upPFive(false);
  };
  const itemThree = () => {
    upPThree(true);

    upPTwo(false);
    upPOne(false);
    upPFour(false);
    upPFive(false);
  };
  const itemFour = () => {
    upPFour(true);

    upPTwo(false);
    upPOne(false);
    upPThree(false);
    upPFive(false);
  };
  const itemFive = () => {
    upPFive(true);

    upPTwo(false);
    upPOne(false);
    upPThree(false);
    upPFour(false);
  };

  return {
    pOne,
    pTwo,
    pThree,
    pFour,
    pFive,

    itemOne,
    itemTwo,
    itemThree,
    itemFour,
    itemFive,
  };
};
