import React from "react";
import { useState } from "react";
import styles from "../Description/Description.module.scss";

export const Description = ({ value, onChange }) => {
  return (
    <input
      className={styles.main}
      type="text"
      placeholder="Digite aqui sua descrição"
      id="title"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Description;
