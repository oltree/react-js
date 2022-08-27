import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    createTodo: (state, { payload: todoText }) => {
      const todoItem = {
        id: uuid(),
        text: todoText,
        isCompleted: false,
        isEditMode: false,
      };

      state.todos.unshift(todoItem);
    },
    removeTodo: (state, { payload: id }) => {
      const todoIndexToRemove = state.todos.findIndex((todo) => todo.id === id);

      state.todos.splice(todoIndexToRemove, 1);
    },
    editTodo: (state, { payload: id }) => {
      const foundTodo = state.todos.find((todo) => todo.id === id);

      foundTodo.isEditMode = !foundTodo.isEditMode;
    },
    saveTodo: (state, { payload }) => {
      const { id, updatedText } = payload;

      const foundTodo = state.todos.find((todo) => todo.id === id);

      foundTodo.text = updatedText;
      foundTodo.isEditMode = false;
    },
    completeTodo: (state, { payload: id }) => {
      const foundTodo = state.todos.find((todo) => todo.id === id);

      foundTodo.isCompleted = true;
    },
    removeAllTodo: () => initialState,
  },
});

export const {
  createTodo,
  removeTodo,
  editTodo,
  saveTodo,
  completeTodo,
  removeAllTodo,
} = todoListSlice.actions;

export default todoListSlice.reducer;
