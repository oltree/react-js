import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import TodoListLayout from "../components/TodoListLayout";

import {
  createTodo,
  removeTodo,
  editTodo,
  saveTodo,
  completeTodo,
  removeAllTodo,
} from "../reducers";

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
      dispatch(createTodo(formData.todoText));
    }

    handleFormReset();
  };

  const handleTodoRemove = useCallback(
    (id) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  const handleTodoEditAndCancel = useCallback(
    (id) => {
      dispatch(editTodo(id));
    },
    [dispatch]
  );

  const handleTodoEditSave = useCallback(
    ({ id, updatedText }) => {
      if (updatedText.trim().length > 3) {
        dispatch(saveTodo({ id, updatedText }));
      }
    },
    [dispatch]
  );

  const handleTodoComlete = useCallback(
    (id) => {
      dispatch(completeTodo(id));
    },
    [dispatch]
  );

  const handleTodoRemoveAll = () => {
    dispatch(removeAllTodo());
  };

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
    />
  );
};

export default TodoListContainer;
