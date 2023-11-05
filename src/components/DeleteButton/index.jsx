import React from "react";
import style from "../DeleteButton/DeleteButton.module.scss";

const DeleteButton = ({ onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      Deletar
    </button>
  );
};

export default DeleteButton;
