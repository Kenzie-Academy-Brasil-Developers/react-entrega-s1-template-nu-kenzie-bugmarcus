import React, { useState } from "react";
import Description from "../Description";
import Valor from "../Valor";
import ValueType from "../ValueType";

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
    <form onSubmit={submit}>
      <p>Descrição</p>
      <Description
        value={formValues.description}
        onChange={handleDescriptionChange}
      />
      <p>Ex: Compra de roupas</p>
      <p>Valor (R$)</p>
      <Valor value={formValues.valor} onChange={handleValorChange} />
      <p>Tipo de valor</p>
      <ValueType
        value={formValues.valueType}
        onChange={handleValueTypeChange}
      />
      <button type="submit">Inserir Valor</button>
    </form>
  );
};

export default FinanceForm;
