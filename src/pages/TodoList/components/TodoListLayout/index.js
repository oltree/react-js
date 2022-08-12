import { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";

import FormForCreatingTodos from "../FormForCreatingTodos";
import TodoListHeader from "../TodoListHeader";
import TodoEditMode from "../TodoEditMode";
import TodoReadMode from "../TodoReadMode";

import {
  FILTER_BY_OPTIONS,
  FILTER_SCENARIOS,
  SORT_OPTIONS,
  SORT_SCENARIOS,
} from "../../config";

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
  const [inputSearch, setInputSearch] = useState("");
  const [sortOption, setSortOption] = useState(SORT_OPTIONS.DEFAULT);
  const [filterOption, setFilterOption] = useState(FILTER_BY_OPTIONS.DEFAULT);

  const handleInputSearchChange = (event) => {
    setInputSearch(event.target.value);
  };

  const handleSortOptionChange = useCallback((event) => {
    setSortOption(event.target.value);
  }, []);

  const handleFilterCompletedTodos = useCallback((event) => {
    setFilterOption(event.target.value);
  }, []);

  const todosSortingOptions = useMemo(() => {
    const todosCopy = [...todos];

    if (FILTER_SCENARIOS[filterOption]) {
      const filteredTodos = todosCopy.filter(FILTER_SCENARIOS[filterOption]);

      if (SORT_SCENARIOS[sortOption]) {
        return filteredTodos.sort(SORT_SCENARIOS[sortOption]);
      }

      return filteredTodos;
    }

    if (SORT_SCENARIOS[sortOption]) {
      return todosCopy.sort(SORT_SCENARIOS[sortOption]);
    }

    return todos;
  }, [todos, sortOption, filterOption]);

  const todosToRender = useMemo(() => {
    return todosSortingOptions.filter((todo) => {
      const lowerCaseText = todo.text.toLowerCase();

      return lowerCaseText.includes(inputSearch.toLowerCase());
    });
  }, [inputSearch, todosSortingOptions]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Todo List Manager</h1>

      <FormForCreatingTodos
        formData={formData}
        onFormChange={onFormChange}
        onTodoCreate={onTodoCreate}
      />

      {todos.length > 0 && (
        <div className={styles.listContainer}>
          <TodoListHeader
            inputSearch={inputSearch}
            onInputSearchChange={handleInputSearchChange}
            sortOption={sortOption}
            onSortOptionChange={handleSortOptionChange}
            filterOption={filterOption}
            onFilterCompletedTodos={handleFilterCompletedTodos}
            onTodoRemoveAll={onTodoRemoveAll}
          />

          <ol className={styles.list}>
            {todosToRender.map((todo, index) =>
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
      )}
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
