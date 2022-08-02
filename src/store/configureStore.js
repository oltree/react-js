import { legacy_createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { rootReducer } from "./rootReducer";

function configureStore() {
  return legacy_createStore(rootReducer, composeWithDevTools());
}

export default configureStore;
