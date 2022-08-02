import { combineReducers } from "redux";

import { countersManagerReducer } from "../pages/ReduxCounters/reducers";
//import { tasksManagerReducer } from "../pages/TodoList/reducers";

export const rootReducer = combineReducers({
  countersManager: countersManagerReducer,
  //tasksManager: tasksManagerReducer,
});
