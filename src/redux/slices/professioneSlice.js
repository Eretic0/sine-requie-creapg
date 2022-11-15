import { createSlice } from "@reduxjs/toolkit";

export const professioneSlice = createSlice({
  name: "professione",
  initialState: {
    professione: "",
  },
  reducers: {
    setProfessione: (state, { payload }) => {
      state.professione = payload;
    },
  },
});

export const { setProfessione } = professioneSlice.actions;

export default professioneSlice.reducer;
