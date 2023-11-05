import React from "react";
import DeleteButton from "../DeleteButton";
import style from "../FinanceCard/FinanceCard.module.scss";

const FinanceCard = ({ description, valor, valueType, onDelete }) => {
  return (
    <div className={style.main}>
      <div className={style.barGreen}></div>
      <div className={style.entry}>
        <div>
          <p className={style.title}>{description}</p>
          <p>Valor: {valor}</p>
        </div>
        <div>
          <p>{valueType.label}</p>
        </div>
        <div>
          <DeleteButton onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default FinanceCard;
