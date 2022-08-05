import { memo } from "react";

import styles from "./index.module.scss";

const TodoCreationForm = ({ formData, onFormChange, onTodoCreate }) => {
  return (
    <form className={styles.form} onSubmit={onTodoCreate}>
      <input
        className={styles.input}
        name="todoText"
        value={formData.todoText}
        onChange={onFormChange}
        type="text"
        placeholder="Enter task text!"
      />

      <button className={styles.button} type="submit">
        Create Task!
      </button>
    </form>
  );
};

export default memo(TodoCreationForm);
