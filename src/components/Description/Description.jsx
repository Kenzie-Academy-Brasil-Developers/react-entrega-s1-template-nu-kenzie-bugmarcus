import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.component1}>
      <div className={styles.label}>Descrição</div>
      <div className={styles.helperText1}>Ex: Compra de roupas</div>
      <div className={styles.placeholderWrapper}>
        <div className={styles.placeholder}>Digite aqui sua descrição</div>
      </div>
    </div>
  );
};

export default Description;
