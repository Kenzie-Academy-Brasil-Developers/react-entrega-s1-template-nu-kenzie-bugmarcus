import React from "react";
import Select from "react-select";
import { typeOfValue } from "../../data/data";
import styles from "../ValueType/ValueType.module.scss";

export const ValueType = ({ value, onChange }) => {
  return (
    <Select
      className={styles.main}
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
