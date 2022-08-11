type PropType = {
  value: string;
};

const SelectorOption = ({ value }: PropType) => {
  return <option value={value}>{value}</option>;
};

export default SelectorOption;
