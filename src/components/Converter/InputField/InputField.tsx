import React from "react";

import { INPUT_NAME } from "../../../constant/converterConstsnt";

import "./input-field.css";

type InputFieldProps = {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({ name, value, handleChange }: InputFieldProps) => {
  return (
    <input
      name={name}
      type="text"
      className="input-field"
      value={value}
      onChange={(e) => handleChange(e)}
      placeholder="0"
      autoFocus={name === INPUT_NAME.FIRST_INPUT ? true : false}
    />
  );
};

export default InputField;
