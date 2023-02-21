import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  professione: "",
  professioneAbilitaScelte: [],
  professioneAbilitaScelteLibere: [],
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
    setProfessioneAbilitaScelte: (state, { payload }) => {
      state.professioneAbilitaScelte = payload;
    },
    addProfessioneAbilitaScelta: (state, { payload }) => {
      state.professioneAbilitaScelte.push(payload);
    },
    updateProfessioneAbilitaScelta: (state, { payload }) => {
      state.professioneAbilitaScelte = state.professioneAbilitaScelte.map(
        (ab) => (ab.idList === payload.idList ? payload : ab)
      );
    },

    setProfessioneAbilitaScelteLibere: (state, { payload }) => {
      state.professioneAbilitaScelteLibere = payload;
    },

    addProfessioneAbilitaSceltaLibera: (state, { payload }) => {
      state.professioneAbilitaScelteLibere.push(payload);
    },
    updateProfessioneAbilitaSceltaLibera: (state, { payload }) => {
      state.professioneAbilitaScelteLibere =
        state.professioneAbilitaScelteLibere.map((ab) =>
          ab.id === payload.id ? payload : ab
        );
    },
  },
});

export const {
  setProfessione,
  resetProfessione,
  setProfessioneAbilitaScelte,
  addProfessioneAbilitaScelta,
  updateProfessioneAbilitaScelta,
  setProfessioneAbilitaScelteLibere,
  addProfessioneAbilitaSceltaLibera,
  updateProfessioneAbilitaSceltaLibera,
} = professioneSlice.actions;

export default professioneSlice.reducer;
