import React, { createContext, useState, useEffect, useCallback } from "react";

import convert from "convert-units";

import {
  CONVERSION_FLOW,
  CONVERTER_BOX_ID,
} from "../constant/converterConstsnt";

import {
  ConverterBoxContextType,
  ConverterBoxProviderPropsType,
} from "../types/CoverterBoxContextTypes";

export const ConverterBoxContext =
  createContext<ConverterBoxContextType | null>(null);

export const ConverterBoxProvider: React.FC<ConverterBoxProviderPropsType> = ({
  children,
}) => {
  const initialStateValues = {
    input: "",
    selectedUnit: "",
    conversionFlow: "",
    decimal: "4",
  };

  const [firstInput, setFirstInput] = useState<string>(
    initialStateValues.input
  );

  const [secondInput, setSecondInput] = useState<string>(
    initialStateValues.input
  );

  const [selectedFirstUnit, setSelectedFirstUnit] = useState<string>(
    initialStateValues.selectedUnit
  );

  const [selectedSecondUnit, setSelectedSecondUnit] = useState<string>(
    initialStateValues.selectedUnit
  );

  const [conversionFlow, setConversionFlow] = useState<string>(
    initialStateValues.conversionFlow
  );

  const [decimal, setDecimal] = useState<string>(initialStateValues.decimal);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // This function handles flow of unit conversion
    // Not set the conversion flow if it has't changed
    const handleConversionFlow = (flow: string) => {
      if (conversionFlow !== flow) {
        setConversionFlow(flow);
      }
    };

    if (e.target.name === CONVERTER_BOX_ID.FISRT_BOX) {
      setFirstInput(e.target.value);
      handleConversionFlow(CONVERSION_FLOW.FIRST_TO_SECOND);
    } else if (e.target.name === CONVERTER_BOX_ID.SECOND_BOX) {
      setSecondInput(e.target.value);
      handleConversionFlow(CONVERSION_FLOW.SECOND_TO_FIRST);
    } else {
      console.error("** INVALID INPUT NAME");
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === CONVERTER_BOX_ID.FISRT_BOX) {
      setSelectedFirstUnit(e.target.value);
    } else if (e.target.name === CONVERTER_BOX_ID.SECOND_BOX) {
      setSelectedSecondUnit(e.target.value);
    } else {
      console.error("** INVALID INPUT NAME");
    }
  };

  const clearInputFields = () => {
    setFirstInput(initialStateValues.input);
    setSecondInput(initialStateValues.input);
  };

  const clearSelectFields = () => {
    setSelectedFirstUnit(initialStateValues.selectedUnit);
    setSelectedSecondUnit(initialStateValues.selectedUnit);
  };

  const clearConverterBox = () => {
    clearInputFields();
    clearSelectFields();
    setConversionFlow(initialStateValues.conversionFlow);
  };

  const conversion = useCallback(() => {
    if (conversionFlow === CONVERSION_FLOW.FIRST_TO_SECOND) {
      const convertedValue = convert(parseFloat(firstInput))
        .from(selectedFirstUnit as convert.Unit)
        .to(selectedSecondUnit as convert.Unit);

      setSecondInput(
        Number.isNaN(convertedValue)
          ? ""
          : convertedValue.toFixed(parseInt(decimal))
      );
    } else if (conversionFlow === CONVERSION_FLOW.SECOND_TO_FIRST) {
      const convertedValue = convert(parseFloat(secondInput))
        .from(selectedSecondUnit as convert.Unit)
        .to(selectedFirstUnit as convert.Unit);

      setFirstInput(
        Number.isNaN(convertedValue)
          ? ""
          : convertedValue.toFixed(parseInt(decimal))
      );
    }
  }, [
    firstInput,
    secondInput,
    selectedFirstUnit,
    selectedSecondUnit,
    conversionFlow,
    decimal,
  ]);

  useEffect(() => {
    conversion();
  }, [
    firstInput,
    secondInput,
    selectedFirstUnit,
    selectedSecondUnit,
    conversion,
  ]);

  return (
    <ConverterBoxContext.Provider
      value={{
        firstInput,
        setFirstInput,
        secondInput,
        setSecondInput,
        handleInputChange,
        selectedFirstUnit,
        setSelectedFirstUnit,
        selectedSecondUnit,
        setSelectedSecondUnit,
        handleSelectChange,
        conversionFlow,
        clearInputFields,
        clearConverterBox,
        decimal,
        setDecimal,
      }}
    >
      {children}
    </ConverterBoxContext.Provider>
  );
};
