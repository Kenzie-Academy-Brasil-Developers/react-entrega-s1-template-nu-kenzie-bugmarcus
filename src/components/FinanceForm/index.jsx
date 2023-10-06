import React, { useState } from "react";
import Description from "../Description";
import Valor from "../Valor";
import ValueType from "../ValueType";

export const FinanceForm = () => {
  const [formValues, setFormValues] = useState({
    description: "",
    valor: "",
    valueType: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    setFormValues({
      description: "",
      valor: "",
      valueType: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
