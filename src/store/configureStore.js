import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import countersManagerSlice from "../pages/ReduxCounters/reducers";
import todoListSlice from "../pages/TodoList/reducers";
import pokemonsSlice from "../pages/Pokemons/reducers";
import pokemonDetailsSlice from "../pages/PokemonsDetails/reducers";
import authSlice from "../pages/SignIn/reducers";

const reducers = combineReducers({
  countersManager: countersManagerSlice,
  todosManager: todoListSlice,
  pokemons: pokemonsSlice,
  pokemonsDetails: pokemonDetailsSlice,
  auth: authSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});
