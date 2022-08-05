import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const defaultState = {
  todos: [],
  isSort: null,
};

export const todosReducer = handleActions(
  {
    [actions.CREATE_TODO]: (state, { payload: todoText }) => {
      const todosCopy = [...state.todos];

      const todoItem = {
        id: uuid(),
        text: todoText,
        isCompleted: false,
        isEditMode: false,
      };

      todosCopy.unshift(todoItem);

      return {
        ...state,
        todos: todosCopy,
      };
    },
    [actions.REMOVE_TODO]: (state, { payload: id }) => {
      const todosCopy = [...state.todos];

      const todoIndexToRemove = todosCopy.findIndex((todo) => todo.id === id);

      todosCopy.splice(todoIndexToRemove, 1);

      return {
        ...state,
        todos: todosCopy,
      };
    },
    [actions.EDIT_TODO]: (state, { payload: id }) => {
      const todosCopy = [...state.todos];

      const foundTodo = todosCopy.find((todo) => todo.id === id);

      foundTodo.isEditMode = !foundTodo.isEditMode;

      return {
        ...state,
        todos: todosCopy,
      };
    },
    [actions.SAVE_TODO]: (state, { payload }) => {
      const { id, updatedText } = payload;

      const todosCopy = [...state.todos];

      const foundTodo = todosCopy.find((todo) => todo.id === id);

      foundTodo.text = updatedText;
      foundTodo.isEditMode = false;

      return {
        ...state,
        todos: todosCopy,
      };
    },
    [actions.COMPLETE_TODO]: (state, { payload: id }) => {
      const todosCopy = [...state.todos];

      const foundTodo = todosCopy.find((todo) => todo.id === id);

      foundTodo.isCompleted = true;

      return {
        ...state,
        todos: todosCopy,
      };
    },
    [actions.REMOVE_ALL_TODO]: () => defaultState,
    [actions.SORT_TODO]: (state) => {
      const todosCopy = [...state.todos];

      const sortTodo = todosCopy.sort((a, b) => (a.text > b.text ? 1 : -1));

      return {
        ...state,
        isSort: true,
        todos: sortTodo,
      };
    },
    [actions.REVERSE_SORT_TODO]: (state) => {
      const todosCopy = [...state.todos];

      const reverseSortTodo = todosCopy
        .sort((a, b) => (a.text > b.text ? 1 : -1))
        .reverse();

      return {
        ...state,
        isSort: false,
        todos: reverseSortTodo,
      };
    },
    [actions.DEFAULT_TODO]: (state) => {
      const todosCopy = [...state.todos];

      return {
        ...state,
        todos: todosCopy,
      };
    },
  },
  defaultState
);
