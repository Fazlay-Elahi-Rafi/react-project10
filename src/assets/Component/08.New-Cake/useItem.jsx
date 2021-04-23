import { useState } from "react";

import Data from "./data";

export const useItem = () => {
  const [value, setVal] = useState(Data);

  return { value, setVal };
};
