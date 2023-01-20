import { createSlice } from "@reduxjs/toolkit";

export const etaSlice = createSlice({
  name: "eta",
  initialState: {
    eta: "",
    puntiAbilitaEta: 7,
    gradoMassimoEta: 3,
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
  },
});

export const { setEta, setPuntiAbilitaEta, setGradoMassimoEta } =
  etaSlice.actions;

export default etaSlice.reducer;
