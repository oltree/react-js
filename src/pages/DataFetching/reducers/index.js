import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../../api/config";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const loadPokemons = createAsyncThunk("pokemos/fetchAll", async () => {
  const response = await api.get("/pokemon");

  return response.data;
});

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
