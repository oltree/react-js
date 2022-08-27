import { configureStore } from "@reduxjs/toolkit";

import countersManagerSlice from "../pages/ReduxCounters/reducers";
import todoListSlice from "../pages/TodoList/reducers";

export const store = configureStore({
  reducer: {
    countersManager: countersManagerSlice,
    todosManager: todoListSlice,
  },
});
