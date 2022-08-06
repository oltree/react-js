import { useMemo, useState } from "react";
import PropTypes from "prop-types";

import TodoCreationForm from "../TodoCreationForm";
import TodoEditMode from "../TodoEditMode";
import TodoReadMode from "../TodoReadMode";

import styles from "./index.module.scss";

const TodoListLayout = ({
  todos,
  isSort,
  formData,
  onFormChange,
  onTodoCreate,
  onTodoRemove,
  onTodoEditAndCancel,
  onTodoEditSave,
  onTodoComlete,
  onTodoRemoveAll,
  onTodoSort,
  onTodoSortReverse,
}) => {
  const [inputSearch, setInputSearch] = useState("");

  const handleInputSearchChange = (event) => {
    setInputSearch(event.target.value);
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const lowerCaseText = todo.text.toLowerCase();

      return lowerCaseText.includes(inputSearch.toLowerCase());
    });
  }, [inputSearch, todos]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Todo List Manager</h1>

      <TodoCreationForm
        formData={formData}
        onFormChange={onFormChange}
        onTodoCreate={onTodoCreate}
      />

      <ol className={todos.length > 0 ? styles.listContainer : ""}>
        {todos.length > 0 && (
          <div className={styles.searchContainer}>
            <div>
              <input
                className={styles.searchInput}
                value={inputSearch}
                type="search"
                placeholder="Search..."
                onChange={handleInputSearchChange}
              />
              <button
                className={styles.searchButton}
                onClick={isSort ? onTodoSortReverse : onTodoSort}
              >
                SORT
              </button>
            </div>
            <div onClick={onTodoRemoveAll} className={styles.close} />
          </div>
        )}
        {filteredTodos.map((todo, index) =>
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
