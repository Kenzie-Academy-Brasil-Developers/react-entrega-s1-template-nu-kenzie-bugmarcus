import React from "react";

const TotalValue = ({ financeItems }) => {
  const calculateTotal = () => {
    let total = 0;
    financeItems.forEach((item) => {
      if (item.valueType === "entrada") {
        total += parseFloat(item.valor);
      } else if (item.valueType === "despesa") {
        total -= parseFloat(item.valor);
      }
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <p>Valor Total: R$ {calculateTotal()}</p>
    </div>
  );
};

export default TotalValue;
