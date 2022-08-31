import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPokemonDetails } from "../api";

const initialState = {
  isLoading: false,
  error: null,
  pokemonInfo: {
    name: "",
    stats: [],
  },
};

export const loadPokemonDetails = createAsyncThunk(
  "pokemonDetails/loadPokemonDetails",
  async (id) => {
    const response = await getPokemonDetails(id);

    return response.data;
  }
);

const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  extraReducers: {
    [loadPokemonDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [loadPokemonDetails.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.pokemonInfo.name = payload.name;
      state.pokemonInfo.stats = payload.stats;
    },
    [loadPokemonDetails.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
  },
});

export default pokemonDetailsSlice.reducer;
