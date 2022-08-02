import { memo } from "react";

import styles from "./index.module.scss";

const User = ({ id, name, age, onDelete }) => {
  return (
    <div className={styles.item}>
      <p className={styles.title}>Name: {name}</p>
      <p className={styles.title}>Age: {age}</p>

      <button onClick={() => onDelete(id)} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default memo(User);
