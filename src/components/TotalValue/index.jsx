import React from "react";
import style from "../TotalValue/TotalValue.module.scss";

const TotalValue = ({ financeItems }) => {
  const calculateTotal = () => {
    let total = 0;
    financeItems.forEach((item) => {
      if (item.valueType.value === "entrada") {
        total += parseFloat(item.money);
      } else if (item.valueType.value === "despesa") {
        total -= parseFloat(item.money);
      } else {
        console.error("Tipo de valor não esperado.", item);
      }
    });
    return total.toFixed(2);
  };

  return (
    <div className={style.main}>
      <div>
        <p className={style.totalValue}>Valor Total:</p>
        <p>O valor se refere ao saldo</p>
      </div>
      <div>
        <p className={style.valueResult}>R$ {calculateTotal()}</p>
      </div>
    </div>
  );
};

export default TotalValue;
