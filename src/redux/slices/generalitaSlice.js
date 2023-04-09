import { createSlice } from "@reduxjs/toolkit";

export const generalitaSlice = createSlice({
  name: "generalita",
  initialState: {
    nome: "",
    ambientazione: "",
    sesso: "",
    morto: false,
    tipoMorto: "",
  },
  reducers: {
    setNome: (state, { payload }) => {
      state.nome = payload;
    },
    setAmbientazione: (state, { payload }) => {
      state.ambientazione = payload;
    },
    setSesso: (state, { payload }) => {
      state.sesso = payload;
    },
    setMorto: (state, { payload }) => {
      state.morto = payload;
    },
    setTipoMorto: (state, { payload }) => {
      state.tipoMorto = payload;
    },
  },
});

export const { setNome, setAmbientazione, setSesso } = generalitaSlice.actions;

export default generalitaSlice.reducer;
