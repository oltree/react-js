import { combineReducers } from "redux";

import { countersManagerReducer } from "../pages/ReduxCounters/reducers";
import { todosReducer } from "../pages/TodoList/reducers";

export const rootReducer = combineReducers({
  countersManager: countersManagerReducer,
  todosManager: todosReducer,
});
