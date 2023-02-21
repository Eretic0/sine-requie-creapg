import { createSlice } from "@reduxjs/toolkit";
import AbilitaDb from "../../db/Abilita";

const initialState = {
  abilita: [...AbilitaDb.filter((ab) => ab.prestampata === true)],
  abilitaStoricoTarocco: [...AbilitaDb.filter((ab) => ab.prestampata === true)],
  profiloAbilitaSelezionato: null,
  listBonusAbilita: [],
};

export const abilitaSlice = createSlice({
  name: "abilita",
  initialState: initialState,
  reducers: {
    setAbilita: (state, { payload }) => {
      state.abilita = payload;
    },

    addAbilita: (state, { payload }) => {
      state.abilita.push(payload);
    },

    updateAbilita: (state, { payload }) => {
      state.abilita = state.abilita.map((ab) =>
        ab.id === payload.id ? payload : ab
      );
    },

    setProfiloAbilitaSelezionato: (state, { payload }) => {
      state.profiloAbilitaSelezionato = payload;
    },

    setListBonusAbilita: (state, { payload }) => {
      state.listBonusAbilita = payload;
    },

    removeBonusFromListBonusAbilita: (state, { payload }) => {
      state.listBonusAbilita = state.listBonusAbilita.filter(
        (bn) => bn.id !== payload.id
      );
    },
    resetAbilita: (state, { payload }) => {
      state.abilita = state.abilita.map((ab) =>
        ab.id === payload.id ? AbilitaDb.find((t) => t.id === payload.id) : ab
      );
    },
    resetAllAbilita: (state) => {
      state.abilita = [...AbilitaDb.filter((ab) => ab.prestampata === true)];
    },

    setAbilitaStoricoTarocco: (state) => {
      state.abilitaStoricoTarocco = [...state.abilita];
    },
  },
});

export const {
  setAbilita,
  updateAbilita,
  addAbilita,
  setProfiloAbilitaSelezionato,
  setListBonusAbilita,
  removeBonusFromListBonusAbilita,
  resetAbilita,
  resetAllAbilita,
  setAbilitaStoricoTarocco,
} = abilitaSlice.actions;

export default abilitaSlice.reducer;
