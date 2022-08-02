import { memo } from "react";

import styles from "./index.module.scss";

const TodoReadMode = ({
  id,
  text,
  index,
  onTodoEditAndCancel,
  onTodoRemove,
  isCompleted,
  onTodoComlete,
}) => {
  return (
    <li className={styles.wrapper}>
      <p
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
        }}
      >{`${index + 1}. ${text}`}</p>

      <div className={styles.buttonsContainer}>
        {!isCompleted && (
          <>
            <button onClick={() => onTodoComlete(id)} className={styles.button}>
              Comlete
            </button>
            <button
              onClick={() => onTodoEditAndCancel(id)}
              className={styles.button}
            >
              Edit
            </button>
          </>
        )}
        <button onClick={() => onTodoRemove(id)} className={styles.button}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default memo(TodoReadMode);
