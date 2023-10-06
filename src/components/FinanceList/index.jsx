// FinanceList.jsx
import React from "react";
import FinanceCard from "../FinanceCard";

const FinanceList = ({ financeItems }) => {
  return (
    <div>
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
