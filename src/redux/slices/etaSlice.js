import { createSlice } from "@reduxjs/toolkit";

export const etaSlice = createSlice({
  name: "eta",
  initialState: {
    eta: "",
  },
  reducers: {
    setEta: (state, { payload }) => {
      state.eta = payload;
    },
  },
});

export const { setEta } = etaSlice.actions;

export default etaSlice.reducer;
