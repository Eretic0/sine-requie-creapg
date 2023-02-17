import { createSlice } from "@reduxjs/toolkit";

export const etaSlice = createSlice({
  name: "eta",
  initialState: {
    eta: "",
    puntiAbilitaEta: 7,
    gradoMassimoEta: 3,
    arrayProfessioneEta: ["N"],
  },
  reducers: {
    setEta: (state, { payload }) => {
      state.eta = payload;
    },
    setPuntiAbilitaEta: (state, { payload }) => {
      state.puntiAbilitaEta = payload;
    },
    setGradoMassimoEta: (state, { payload }) => {
      state.gradoMassimoEta = payload;
    },

    setArrayProfessioneEta: (state, { payload }) => {
      state.arrayProfessioneEta = payload;
    },
  },
});

export const {
  setEta,
  setPuntiAbilitaEta,
  setGradoMassimoEta,
  setArrayProfessioneEta,
} = etaSlice.actions;

export default etaSlice.reducer;
