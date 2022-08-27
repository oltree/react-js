import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const defaultState = {
  counters: [],
};

export const countersManagerSlice = createSlice({
  name: "countersManager",
  initialState: defaultState,
  reducers: {
    createCounter: (state) => {
      const newCounter = {
        id: uuid(),
        countValue: 0,
      };

      state.counters.push(newCounter);
    },
    removeAllCounters: () => defaultState,
    incrementCounter: (state, { payload: id }) => {
      const foundCouter = state.counters.find((counter) => counter.id === id);

      foundCouter.countValue += 1;
    },
    decrementCounter: (state, { payload: id }) => {
      const foundCouter = state.counters.find((counter) => counter.id === id);

      if (foundCouter.countValue > 0) foundCouter.countValue -= 1;
    },
    resetCounter: (state, { payload: id }) => {
      const foundCouter = state.counters.find((counter) => counter.id === id);

      foundCouter.countValue = 0;
    },
    deleteCounter: (state, { payload: id }) => {
      const counterIndexToRemove = state.counters.findIndex(
        (counter) => counter.id === id
      );

      state.counters.splice(counterIndexToRemove, 1);
    },
  },
});

export const {
  createCounter,
  removeAllCounters,
  incrementCounter,
  decrementCounter,
  resetCounter,
  deleteCounter,
} = countersManagerSlice.actions;

export default countersManagerSlice.reducer;
