import { createSlice } from "@reduxjs/toolkit";

export const taroccoSlice = createSlice({
  name: "tarocco",
  initialState: {
    taroccoDominante: {},
    taroccoPassato: {},
  },
  reducers: {
    setTaroccoDominante: (state, { payload }) => {
      state.taroccoDominante = payload;
    },
    setTaroccoPassato: (state, { payload }) => {
      state.taroccoPassato = payload;
    },
    resetTarocchi: (state) => {
      state.taroccoDominante = {};
      state.taroccoPassato = {};
    },
  },
});

export const { setTaroccoDominante, setTaroccoPassato, resetTarocchi } =
  taroccoSlice.actions;

export default taroccoSlice.reducer;
