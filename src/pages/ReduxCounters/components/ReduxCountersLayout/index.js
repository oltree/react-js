import PropTypes from "prop-types";

import Counter from "../../../../components/Counter";

import styles from "./index.module.scss";

const ReduxCountersLayout = ({
  counters,
  onCounterCreate,
  onRemoveAllCounters,
  onIncrement,
  onDecrement,
  onReset,
  onDelete,
  onSumValuesCounters,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Redux Counters Manager</h1>
      <div className={styles.buttonsContainer}>
        <button onClick={onCounterCreate} className={styles.button}>
          Create Counter
        </button>
        <button onClick={onRemoveAllCounters} className={styles.button}>
          Reset
        </button>
      </div>
      <div className={styles.item}>
        {counters.map(({ id, countValue }) => (
          <Counter
            id={id}
            key={id}
            countValue={countValue}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
            onDelete={onDelete}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <p className={styles.subtitle}>Total Couters: {counters.length}</p>
        <p className={styles.subtitle}>
          Sum Values Counters: {onSumValuesCounters}
        </p>
      </div>
    </div>
  );
};

ReduxCountersLayout.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, countValue: PropTypes.number })
  ),
};

export default ReduxCountersLayout;
