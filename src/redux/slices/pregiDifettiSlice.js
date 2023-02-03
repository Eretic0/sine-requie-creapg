import { createSlice } from "@reduxjs/toolkit";

export const pregiDifettiSlice = createSlice({
  name: "pregiDifetti",
  initialState: {
    pregi: [],
    difetti: [],
  },
  reducers: {
    addPregio: (state, { payload }) => {
      state.pregi.push(payload);
    },

    removePregio: (state, { payload }) => {
      state.pregi.filter((pr) => pr.id !== payload.id);
    },

    addDifetto: (state, { payload }) => {
      state.difetti.push(payload);
    },

    removeDifetto: (state, { payload }) => {
      state.difetti.filter((pr) => pr.id !== payload.id);
    },
  },
});

export const { addPregio, addDifetto, removePregio, removeDifetto } =
  pregiDifettiSlice.actions;

export default pregiDifettiSlice.reducer;
