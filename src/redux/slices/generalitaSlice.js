import { createSlice } from "@reduxjs/toolkit";

export const generalitaSlice = createSlice({
  name: "generalita",
  initialState: {
    nome: "",
    cognome: "",
    ambientazione: "",
    sesso: "",
  },
  reducers: {
    setNome: (state, { payload }) => {
      state.nome = payload;
    },
    setCognome: (state, { payload }) => {
      state.cognome = payload;
    },
    setAmbientazione: (state, { payload }) => {
      state.ambientazione = payload;
    },
    setSesso: (state, { payload }) => {
      state.sesso = payload;
    },
  },
});

export const { setNome, setCognome, setAmbientazione, setSesso } =
  generalitaSlice.actions;

export default generalitaSlice.reducer;
