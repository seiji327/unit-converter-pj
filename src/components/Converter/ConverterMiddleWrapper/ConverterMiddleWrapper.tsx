import { FaExchangeAlt } from "react-icons/fa";

import Button from "../Button";
import DecimalEditor from "../DecimalEditor";
import useConverterBoxContext from "../../../hooks/useConverterBoxContext";

import "./converter-middle-wrapper.css";

const ConverterMiddleWrapper = () => {
  const { clearInputFields } = useConverterBoxContext();
  return (
    <div className="converter-middle-wrapper">
      <DecimalEditor />
      <FaExchangeAlt className="converter-middle-wrapper__icon" />
      <Button
        buttonText="CLEAR ALL"
        handleClick={clearInputFields}
        optionalClasses={["converter-middle-wrapper__clear-button"]}
      />
    </div>
  );
};

export default ConverterMiddleWrapper;
