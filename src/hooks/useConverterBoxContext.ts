import { useContext } from "react";

import { ConverterBoxContext } from "../context/ConverterBoxContext";
import { ConverterBoxContextType } from "../types/CoverterBoxContextTypes";

const useConverterBoxContext = () => {
  return useContext(ConverterBoxContext) as ConverterBoxContextType;
};

export default useConverterBoxContext;
