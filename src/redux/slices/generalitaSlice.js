import { createSlice } from "@reduxjs/toolkit";

export const generalitaSlice = createSlice({
  name: "generalita",
  initialState: {
    nome: "",
    ambientazione: "",
    sesso: "",
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
  },
});

export const { setNome, setAmbientazione, setSesso } = generalitaSlice.actions;

export default generalitaSlice.reducer;
