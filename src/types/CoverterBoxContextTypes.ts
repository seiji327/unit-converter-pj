export type ConverterBoxContextType = {
  firstInput: string;
  setFirstInput: React.Dispatch<React.SetStateAction<string>>;
  secondInput: string;
  setSecondInput: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFirstUnit: string;
  selectedSecondUnit: string;
  setSelectedFirstUnit: React.Dispatch<React.SetStateAction<string>>;
  setSelectedSecondUnit: React.Dispatch<React.SetStateAction<string>>;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  conversionFlow: string;
  clearInputFields: () => void;
  clearConverterBox: () => void;
  decimal: string;
  setDecimal: React.Dispatch<React.SetStateAction<string>>;
};

export type ConverterBoxProviderPropsType = {
  children: React.ReactNode;
};
