import React from "react";
import DeleteButton from "../DeleteButton";
import style from "../FinanceCard/FinanceCard.module.scss";

const FinanceCard = ({ description, money, valueType, onDelete }) => {
  const barClass = {
    despesa: style.barGrey,
    entrada: style.barGreen,
  };
  return (
    <div className={style.main}>
      <div className={barClass[valueType.value]}></div>
      <div className={style.entry}>
        <div className={style.descriptionAndValue}>
          <p className={style.title}>{description}</p>
          <p>R$ {money}</p>
        </div>
        <div className={style.descriptionAndValue}>
          <p>{valueType.label}</p>
          <DeleteButton onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default FinanceCard;
