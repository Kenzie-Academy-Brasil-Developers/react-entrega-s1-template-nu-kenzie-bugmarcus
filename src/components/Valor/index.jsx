import React from "react";

export const Valor = ({ value, onChange }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/\D/g, "");
    onChange(sanitizedValue);
  };

  return (
    <input
      type="text"
      placeholder="1"
      id="title"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Valor;
