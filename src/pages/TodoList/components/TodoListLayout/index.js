import PropTypes from "prop-types";

import TodoCreationForm from "../TodoCreationForm";
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
  onTodoRemoveAll,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Todo List Manager</h1>

      <TodoCreationForm
        formData={formData}
        onFormChange={onFormChange}
        onTodoCreate={onTodoCreate}
      />

      <ol className={styles.listContainer}>
        {todos.length > 0 && (
          <div className={styles.searchContainer}>
            <input
              className={styles.searchInput}
              type="search"
              placeholder="Search..."
            />
            <div onClick={onTodoRemoveAll} className={styles.close} />
          </div>
        )}
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

TodoListLayout.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      isCompleted: PropTypes.bool,
      isEditMode: PropTypes.bool,
    })
  ),
};

export default TodoListLayout;
