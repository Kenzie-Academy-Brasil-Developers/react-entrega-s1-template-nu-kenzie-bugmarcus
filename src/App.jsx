// App.jsx
import React, { useState, useEffect } from "react";
import FinanceForm from "./components/FinanceForm";
import FinanceList from "./components/FinanceList";
import Header from "./components/Header";
import styles from "./App.module.css";
import "normalize.css";

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
        <FinanceForm addFinanceItem={addFinanceItem} />
        <FinanceList
          financeItems={financeItems}
          deleteFinanceItem={deleteFinanceItem}
        />
      </div>
    </div>
  );
};

export default App;
