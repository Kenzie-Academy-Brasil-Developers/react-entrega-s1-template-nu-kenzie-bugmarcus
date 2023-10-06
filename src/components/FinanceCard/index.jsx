import React from "react";

const FinanceCard = ({ description, valor, valueType }) => {
  return (
    <div>
      <p>Descrição: {description}</p>
      <p>Valor: {valor}</p>
      <p>{valueType.label}</p>
    </div>
  );
};

export default FinanceCard;
