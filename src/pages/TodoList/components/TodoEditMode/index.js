import { memo } from "react";

import { useForm } from "../../../../hooks";

import styles from "./index.module.scss";

const TodoEditMode = ({ id, text, onTodoEditAndCancel, onTodoEditSave }) => {
  const [formData, handleFormChange] = useForm({
    editText: text,
  });

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        name="editText"
        value={formData.editText}
        type="text"
        onChange={handleFormChange}
      />

      <div className={styles.buttonsContainer}>
        <button
          className={styles.button}
          onClick={() => onTodoEditSave({ id, updatedText: formData.editText })}
        >
          Save
        </button>
        <button
          className={styles.button}
          onClick={() => onTodoEditAndCancel(id)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default memo(TodoEditMode);
