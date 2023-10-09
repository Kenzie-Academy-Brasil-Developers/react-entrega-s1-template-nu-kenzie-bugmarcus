import React, { useState } from "react";
import Description from "../Description";
import Valor from "../Valor";
import ValueType from "../ValueType";
import styles from "../FinanceForm/FinanceForm.module.css";

const FinanceForm = ({ addFinanceItem }) => {
  const [formValues, setFormValues] = useState({
    description: "",
    valor: "",
    valueType: "",
  });

  const submit = (e) => {
    e.preventDefault();
    const newFinanceItem = {
      description: formValues.description,
      valor: formValues.valor,
      valueType: formValues.valueType,
    };
    addFinanceItem(newFinanceItem);
  };

  const handleDescriptionChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      description: value,
    }));
  };

  const handleValorChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      valor: value,
    }));
  };

  const handleValueTypeChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      valueType: value,
    }));
  };

  return (
    <form className={styles.main} onSubmit={submit}>
      <p className={styles.title}>Descrição</p>
      <Description
        value={formValues.description}
        onChange={handleDescriptionChange}
      />
      <p className={styles.example}>Ex: Compra de roupas</p>
      <Valor value={formValues.valor} onChange={handleValorChange} />
      <p>Tipo de valor</p>
      <ValueType
        value={formValues.valueType}
        onChange={handleValueTypeChange}
      />
      <button type="submit" className={styles.button}>
        Inserir Valor
      </button>
    </form>
  );
};

export default FinanceForm;
