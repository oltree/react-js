import { configureStore } from "@reduxjs/toolkit";

import countersManagerSlice from "../pages/ReduxCounters/reducers";
import todoListSlice from "../pages/TodoList/reducers";
import pokemonsSlice from "../pages/Pokemons/reducers";
import pokemonDetailsSlice from "../pages/PokemonsDetails/reducers";
import authSlice from "../pages/SignIn/reducers";

export const store = configureStore({
  reducer: {
    countersManager: countersManagerSlice,
    todosManager: todoListSlice,
    pokemons: pokemonsSlice,
    pokemonsDetails: pokemonDetailsSlice,
    auth: authSlice,
  },
});
