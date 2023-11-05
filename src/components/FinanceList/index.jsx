import React from "react";
import FinanceCard from "../FinanceCard";
import styles from "../FinanceList/FinanceList.module.scss";

const FinanceList = ({ financeItems, deleteFinanceItem }) => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Resumo financeiro</p>
      {financeItems.map((item, index) => (
        <FinanceCard
          key={index}
          description={item.description}
          money={item.money}
          valueType={item.valueType}
          onDelete={() => deleteFinanceItem(index)}
        />
      ))}
    </div>
  );
};

export default FinanceList;
