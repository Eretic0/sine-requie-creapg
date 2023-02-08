import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  professione: "",
};

export const professioneSlice = createSlice({
  name: "professione",
  initialState: initialState,
  reducers: {
    setProfessione: (state, { payload }) => {
      state.professione = payload;
    },
    resetProfessione: (state) => {
      state.professione = "";
    },
  },
});

export const { setProfessione, resetProfessione } = professioneSlice.actions;

export default professioneSlice.reducer;
