import React from "react";
import { useState } from "react";

export const Description = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Digite aqui sua descrição"
      id="title"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Description;
