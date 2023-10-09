// FinanceList.jsx
import React from "react";
import FinanceCard from "../FinanceCard";
import styles from "../FinanceList/FinanceList.module.css";

const FinanceList = ({ financeItems }) => {
  return (
    <div>
      <p className={styles.title}>Resumo financeiro</p>
      {financeItems.map((item, index) => (
        <FinanceCard
          key={index}
          description={item.description}
          valor={item.valor}
          valueType={item.valueType}
        />
      ))}
    </div>
  );
};

export default FinanceList;
