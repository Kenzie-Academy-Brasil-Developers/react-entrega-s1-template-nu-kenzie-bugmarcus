import React from "react";
import Select from "react-select";
import { typeOfValue } from "../../data/data";

export const ValueType = ({ value, onChange }) => {
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={typeOfValue[0]}
      name="Tipo de valor"
      options={typeOfValue}
      value={value}
      onChange={(selectedOption) => onChange(selectedOption)}
    />
  );
};

export default ValueType;
