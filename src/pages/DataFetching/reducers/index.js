import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPokemons } from "../api";

const initialState = {
  isLoading: false,
  data: [], //pokemons
  error: null,
};

export const loadPokemons = createAsyncThunk("pokemos/fetchAll", async () =>
  getPokemons()
);

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPokemons.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadPokemons.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(loadPokemons.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default pokemonsSlice.reducer;
