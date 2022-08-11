import convert from "convert-units";

import SelectorOption from "../SelectorOption";

import "./selector.css";

type PropType = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  possibilities: convert.Unit[];
  name: string;
};

const Selector = ({ handleChange, possibilities, name }: PropType) => {
  return (
    <select className="selector" onChange={(e) => handleChange(e)} name={name}>
      {possibilities.map((possibility, key) => (
        <SelectorOption key={key} value={possibility} />
      ))}
    </select>
  );
};

export default Selector;
