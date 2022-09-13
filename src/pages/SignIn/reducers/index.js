import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { signIn } from "../api";

const initialState = {
  isLoading: false,
  error: null,
  userInfo: {},
  accessToken: {},
};

export const auth = createAsyncThunk("auth/signIn", signIn);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [auth.pending]: (state) => {
      state.isLoading = true;
    },
    [auth.fulfilled]: (state, { payload: { data } }) => {
      const { accessToken, ...userInfo } = data;

      state.isLoading = false;
      state.userInfo = userInfo;
      state.accessToken = accessToken;
    },
    [auth.rejected]: (state, { payload: { data } }) => {
      state.isLoading = false;
      state.error = data;
    },
  },
});

export default authSlice.reducer;
