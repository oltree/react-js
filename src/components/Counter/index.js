import { memo } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Counter = ({
  id,
  countValue,
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  const isEven = countValue % 2 === 0;

  return (
    <div
      className={styles.wrapper}
      style={{ background: isEven ? "rgb(33, 71, 110)" : "rgb(181, 218, 150)" }}
    >
      <div onClick={() => onDelete(id)} className={styles.close}></div>
      <div className={styles.screenValue}>{countValue}</div>
      <div className={styles.parityScreen}>{`${isEven ? "Even" : "Odd"}`}</div>
      <div className={styles.buttons}>
        <button onClick={() => onDecrement(id)} className={styles.button}>
          -
        </button>
        <button onClick={() => onReset(id)} className={styles.button}>
          Reset
        </button>
        <button onClick={() => onIncrement(id)} className={styles.button}>
          +
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default memo(Counter);
//memo - мемоизирует компоненты
