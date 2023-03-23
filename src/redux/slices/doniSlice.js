import { createSlice } from "@reduxjs/toolkit";

export const doniSlice = createSlice({
  name: "doni",
  initialState: {
    doni: [],
    maggioriEstratti: [],
  },
  reducers: {
    setDoni: (state, { payload }) => {
      state.doni = payload;
    },
    addDoni: (state, { payload }) => {
      state.doni.push(payload);
    },
    setMaggioriEstratti: (state, { payload }) => {
      state.maggioriEstratti = payload;
    },
    addMaggioriEstratti: (state, { payload }) => {
      state.maggioriEstratti.push(payload);
    },
    resetDoni: (state) => {
      state.doni = [];
      state.maggioriEstratti = [];
    },
  },
});

export const {
  setDoni,
  addDoni,
  setMaggioriEstratti,
  addMaggioriEstratti,
  resetDoni,
} = doniSlice.actions;

export default doniSlice.reducer;
