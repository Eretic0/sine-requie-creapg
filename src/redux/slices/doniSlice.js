import { createSlice } from "@reduxjs/toolkit";

export const doniSlice = createSlice({
  name: "doni",
  initialState: {
    doni: [],
  },
  reducers: {
    setDoni: (state, { payload }) => {
      state.doni = payload;
    },
    addDoni: (state, { payload }) => {
      state.doni = state.doni.push(payload);
    },
  },
});

export const { setDoni, addDoni } = doniSlice.actions;

export default doniSlice.reducer;
