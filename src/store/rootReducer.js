import { combineReducers } from "redux";

import { countersManagerReducer } from "../pages/ReduxCounters/reducers";

export const rootReducer = combineReducers({
  countersManager: countersManagerReducer,
});
