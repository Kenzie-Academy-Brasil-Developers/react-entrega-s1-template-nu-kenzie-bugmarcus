// App.jsx
import React, { useState, useEffect } from "react";
import FinanceForm from "./components/FinanceForm";
import FinanceList from "./components/FinanceList";
import Header from "./components/Header";
import styles from "./App.module.scss";
import "normalize.css";
import TotalValue from "./components/TotalValue";

const App = () => {
  const [financeItems, setFinanceItems] = useState([]);

  useEffect(() => {
    const storedFinanceItems = JSON.parse(localStorage.getItem("financeItems"));
    if (storedFinanceItems) {
      setFinanceItems(storedFinanceItems);
    }
  }, []);

  const addFinanceItem = (item) => {
    const newFinanceItems = [...financeItems, item];
    setFinanceItems(newFinanceItems);
    localStorage.setItem("financeItems", JSON.stringify(newFinanceItems));
  };

  const deleteFinanceItem = (index) => {
    const updatedFinanceItems = financeItems.filter((_, i) => i !== index);
    setFinanceItems(updatedFinanceItems);
    localStorage.setItem("financeItems", JSON.stringify(updatedFinanceItems));
  };

  return (
    <div>
      <Header />
      <div className={styles.bodyPage}>
        <div className={styles.form}>
          <FinanceForm addFinanceItem={addFinanceItem} />
          <TotalValue financeItems={financeItems} />
        </div>
        <div>
          <FinanceList
            financeItems={financeItems}
            deleteFinanceItem={deleteFinanceItem}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
