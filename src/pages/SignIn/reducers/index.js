import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { signIn } from "../api";
import { LOCAL_STORAGE_KEYS } from "../../../constants";

const initialState = {
  isLoading: false,
  error: null,
  userInfo: {},
  accessToken: {},
};

export const auth = createAsyncThunk("auth/signIn", async (data) => {
  const response = await signIn(data);

  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    exitAccount: () => localStorage.clear(),
  },
  extraReducers: {
    [auth.pending]: (state) => {
      state.isLoading = true;
    },
    [auth.fulfilled]: (state, { payload }) => {
      const { accessToken, ...userInfo } = payload;

      state.isLoading = false;
      state.userInfo = userInfo;
      state.accessToken = accessToken;

      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    },
    [auth.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    },
  },
});

export const { exitAccount } = authSlice.actions;

export default authSlice.reducer;
