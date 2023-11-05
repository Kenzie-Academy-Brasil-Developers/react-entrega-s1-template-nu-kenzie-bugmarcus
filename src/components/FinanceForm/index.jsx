import React, { useState } from "react";
import Description from "../Description";
import Money from "../Money";
import ValueType from "../ValueType";
import styles from "../FinanceForm/FinanceForm.module.scss";

const FinanceForm = ({ addFinanceItem }) => {
  const [formValues, setFormValues] = useState({
    description: "",
    money: "",
    valueType: "",
  });

  const submit = (e) => {
    e.preventDefault();
    const newFinanceItem = {
      description: formValues.description,
      money: formValues.money,
      valueType: formValues.valueType,
    };
    if (
      newFinanceItem.description === "" ||
      newFinanceItem.money === "" ||
      newFinanceItem.valueType === ""
    ) {
      return;
    }
    addFinanceItem(newFinanceItem);
  };

  const handleDescriptionChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      description: value,
    }));
  };

  const handleMoneyChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      money: value,
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
      <p>Valor (R$)</p>
      <Money value={formValues.money} onChange={handleMoneyChange} />
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
