import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import TodoListLayout from "../components/TodoListLayout";

import { useForm } from "../../../hooks";

import {
  CREATE_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  COMPLETE_TODO,
  REMOVE_ALL_TODO,
  SORT_TODO,
  REVERSE_SORT_TODO,
  DEFAULT_TODO,
} from "../actions";

import { todosSelector } from "../selectors";

const TodoListContainer = () => {
  const dispatch = useDispatch();

  const { todos, isSort } = useSelector(todosSelector);

  const [formData, handleFormChange, handleFormReset] = useForm({
    todoText: "",
  });

  const handleTodoCreate = (event) => {
    event.preventDefault();

    const trimmedValue = formData.todoText.trim();

    if (trimmedValue.length > 3) {
      dispatch(CREATE_TODO(formData.todoText));
    }

    handleFormReset();
  };

  const handleTodoRemove = useCallback(
    (id) => {
      dispatch(REMOVE_TODO(id));
    },
    [dispatch]
  );

  const handleTodoEditAndCancel = useCallback(
    (id) => {
      dispatch(EDIT_TODO(id));
    },
    [dispatch]
  );

  const handleTodoEditSave = useCallback(
    ({ id, updatedText }) => {
      if (updatedText.trim().length > 3) {
        dispatch(SAVE_TODO({ id, updatedText }));
      }
    },
    [dispatch]
  );

  const handleTodoComlete = useCallback(
    (id) => {
      dispatch(COMPLETE_TODO(id));
    },
    [dispatch]
  );

  const handleTodoRemoveAll = () => {
    dispatch(REMOVE_ALL_TODO());
  };

  const handleTodoSort = useCallback(() => {
    dispatch(SORT_TODO());
  }, [dispatch]);

  const handleTodoSortReverse = useCallback(() => {
    dispatch(REVERSE_SORT_TODO());
  }, [dispatch]);

  const handleTodoDafautState = useCallback(() => {
    dispatch(DEFAULT_TODO());
  }, [dispatch]);

  return (
    <TodoListLayout
      todos={todos}
      isSort={isSort}
      formData={formData}
      onFormChange={handleFormChange}
      onTodoCreate={handleTodoCreate}
      onTodoRemove={handleTodoRemove}
      onTodoEditAndCancel={handleTodoEditAndCancel}
      onTodoEditSave={handleTodoEditSave}
      onTodoComlete={handleTodoComlete}
      onTodoRemoveAll={handleTodoRemoveAll}
      onTodoSort={handleTodoSort}
      onTodoSortReverse={handleTodoSortReverse}
      onTodoDafautState={handleTodoDafautState}
    />
  );
};

export default TodoListContainer;
