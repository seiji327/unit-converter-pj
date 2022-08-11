import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import convert, { Measure } from "convert-units";

import InputField from "../InputField";
import Selector from "../Selector";
import useConverterBoxContext from "../../../hooks/useConverterBoxContext";
import { CONVERTER_BOX_ID } from "../../../constant/converterConstsnt";

import "./converter-box.css";

type PropTypes = {
  converterBoxID: string;
};

type MeasurementType = {
  measurementType: Measure;
};

const ConverterBox = ({ converterBoxID }: PropTypes) => {
  const {
    firstInput,
    secondInput,
    handleInputChange,
    selectedFirstUnit,
    selectedSecondUnit,
    setSelectedFirstUnit,
    setSelectedSecondUnit,
    handleSelectChange,
    clearConverterBox,
  } = useConverterBoxContext();

  const location = useLocation();
  const { measurementType } = location.state as MeasurementType;

  const possibilities = convert().possibilities(measurementType);

  useEffect(() => {
    selectedFirstUnit === "" && setSelectedFirstUnit(possibilities[0]);
    selectedSecondUnit === "" && setSelectedSecondUnit(possibilities[0]);

    return () => {
      clearConverterBox();
    };
  }, []);

  return (
    <div className="converter-box">
      <h2 className="converter-box__h2">
        {converterBoxID === CONVERTER_BOX_ID.FISRT_BOX
          ? selectedFirstUnit
          : selectedSecondUnit}
      </h2>
      <InputField
        name={converterBoxID}
        value={
          converterBoxID === CONVERTER_BOX_ID.FISRT_BOX
            ? firstInput
            : secondInput
        }
        handleChange={handleInputChange}
      />
      <Selector
        handleChange={handleSelectChange}
        possibilities={possibilities}
        name={converterBoxID}
      />
    </div>
  );
};

export default ConverterBox;
