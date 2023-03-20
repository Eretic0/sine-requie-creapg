import { createSlice } from "@reduxjs/toolkit";

export const etaSlice = createSlice({
  name: "eta",
  initialState: {
    eta: "",
    puntiAbilitaEta: 7,
    gradoMassimoEta: 3,
    arrayProfessioneEta: ["N"],
    numeroAbilitaTaroccoPassato: 2,
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
    setNumeroAbilitaTaroccoPassato: (state, { payload }) => {
      state.numeroAbilitaTaroccoPassato = payload;
    },
    resetEta: (state) => {
      state.eta = "";
      state.puntiAbilitaEta = 7;
      state.gradoMassimoEta = 3;
      state.arrayProfessioneEta = ["N"];
      state.numeroAbilitaTaroccoPassato = 2;
    },
  },
});

export const {
  setEta,
  setPuntiAbilitaEta,
  setGradoMassimoEta,
  setArrayProfessioneEta,
  setNumeroAbilitaTaroccoPassato,
  resetEta,
} = etaSlice.actions;

export default etaSlice.reducer;
