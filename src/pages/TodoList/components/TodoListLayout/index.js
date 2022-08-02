import TodoEditMode from "../TodoEditMode";
import TodoReadMode from "../TodoReadMode";

import styles from "./index.module.scss";

const TodoListLayout = ({
  todos,
  formData,
  onFormChange,
  onTodoCreate,
  onTodoRemove,
  onTodoEditAndCancel,
  onTodoEditSave,
  onTodoComlete,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Todo List Manager</h1>

      <form className={styles.form} onSubmit={onTodoCreate}>
        <input
          className={styles.input}
          name="todoText"
          value={formData.todoText}
          onChange={onFormChange}
          type="text"
        />

        <button className={styles.button} type="submit">
          Create Task!
        </button>
      </form>

      <ol className={todos.length !== 0 ? styles.listContainer : ""}>
        {todos.map((todo, index) =>
          todo.isEditMode ? (
            <TodoEditMode
              id={todo.id}
              key={todo.id}
              text={todo.text}
              onTodoEditAndCancel={onTodoEditAndCancel}
              onTodoEditSave={onTodoEditSave}
            />
          ) : (
            <TodoReadMode
              index={index}
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isCompleted={todo.isCompleted}
              onTodoRemove={onTodoRemove}
              onTodoEditAndCancel={onTodoEditAndCancel}
              onTodoComlete={onTodoComlete}
            />
          )
        )}
      </ol>
    </div>
  );
};

export default TodoListLayout;
