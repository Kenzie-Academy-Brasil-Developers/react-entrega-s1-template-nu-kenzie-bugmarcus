import React from "react";
import styles from "../Money/Money.module.scss";

export const Money = ({ value, onChange }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, "");
    onChange(sanitizedValue);
  };

  return (
    <input
      className={styles.main}
      type="text"
      placeholder="1"
      id="title"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Money;
