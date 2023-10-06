import React from "react";
import { useState } from "react";

export const Valor = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="1"
      id="title"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Valor;
