import React, { useState } from "react";
import styles from "./FinanceForm.module.css";
import Description from "../Description/Description";

const FinanceForm = () => {
  // Adicionando o estado para a descrição e valor
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  <Description />;
  return (
    <div className={styles.instanceParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.component1Parent}>
          <div className={styles.component1}>
            <div className={styles.label}>Descrição</div>
            <div className={styles.helperText1}>Ex: Compra de roupas</div>
            <div className={styles.placeholderWrapper}>
              <input
                type="text"
                className={styles.placeholder}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.buttonPrimary}>
            <div className={styles.buttonText1}>Inserir valor</div>
          </div>
          <div className={styles.inputvaluenumberParent}>
            <div className={styles.inputvaluenumber}>
              <div className={styles.valor}>Valor (R$)</div>
              <div className={styles.placeholderContainer}>
                <input
                  type="number"
                  className={styles.placeholder}
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.inputselect}>
              <div className={styles.valor}>Tipo de valor</div>
              <div className={styles.placeholderParent}>
                <div className={styles.placeholder}>Entrada</div>
                <div className={styles.angleDown}>ANGLE-DOWN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceForm;
