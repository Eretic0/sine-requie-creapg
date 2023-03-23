import { createSlice } from "@reduxjs/toolkit";

export const pregiDifettiSlice = createSlice({
  name: "pregiDifetti",
  initialState: {
    pregi: [],
    difetti: [],
    minoriEstratti: [],
    numPregi: 0,
    numDifetti: 0,
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

    resetPregi: (state) => {
      state.pregi = [];
    },
    resetDifetti: (state) => {
      state.difetti = [];
    },

    resetAllPregiDifetti: (state) => {
      state.pregi = [];
      state.difetti = [];
      state.minoriEstratti = [];
      state.numDifetti = 0;
      state.numPregi = 0;
    },

    setMinoriEstratti: (state, { payload }) => {
      state.minoriEstratti = payload;
    },

    addMinoreEstratto: (state, { payload }) => {
      state.minoriEstratti.push(payload);
    },

    resetMinoriEstratti: (state) => {
      state.minoriEstratti = [];
    },

    setNumPregi: (state, { payload }) => {
      state.numPregi = payload;
    },

    setNumDifetti: (state, { payload }) => {
      state.numDifetti = payload;
    },
  },
});

export const {
  addPregio,
  addDifetto,
  removePregio,
  removeDifetto,
  resetPregi,
  resetDifetti,
  setMinoriEstratti,
  resetMinoriEstratti,
  setNumPregi,
  setNumDifetti,
  addMinoreEstratto,
  resetAllPregiDifetti,
} = pregiDifettiSlice.actions;

export default pregiDifettiSlice.reducer;
