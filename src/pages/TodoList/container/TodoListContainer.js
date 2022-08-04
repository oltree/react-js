import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CREATE_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  COMPLETE_TODO,
  REMOVE_ALL_TODO,
  SORT_TODO,
} from "../actions";

import TodoListLayout from "../components/TodoListLayout";

import { useForm } from "../../../hooks";

import { todosSelector } from "../selectors";

const TodoListContainer = () => {
  const dispatch = useDispatch();

  const todos = useSelector(todosSelector);

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

  return (
    <TodoListLayout
      todos={todos}
      formData={formData}
      onFormChange={handleFormChange}
      onTodoCreate={handleTodoCreate}
      onTodoRemove={handleTodoRemove}
      onTodoEditAndCancel={handleTodoEditAndCancel}
      onTodoEditSave={handleTodoEditSave}
      onTodoComlete={handleTodoComlete}
      onTodoRemoveAll={handleTodoRemoveAll}
      onTodoSort={handleTodoSort}
    />
  );
};

export default TodoListContainer;
