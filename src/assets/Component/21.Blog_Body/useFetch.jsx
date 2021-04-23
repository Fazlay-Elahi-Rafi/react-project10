import { useState, useEffect } from "react";
import paginate from "./paginate";
import Data from "./data";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(Data);

  const getProducts = async () => {
    setData(paginate(data));
    setLoading(false);
  };
  // const getProducts = async () => {
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setData(paginate(data))
  //   setLoading(false)
  // }

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
