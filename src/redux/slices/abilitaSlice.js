import { createSlice } from "@reduxjs/toolkit";
import AbilitaDb from "../../db/Abilita";

export const abilitaSlice = createSlice({
  name: "abilita",
  initialState: {
    abilita: AbilitaDb.filter((ab) => ab.prestampata === true),
    profiloAbilitaSelezionato: null,
    listBonusAbilita: [],
  },
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
  },
});

export const {
  setAbilita,
  updateAbilita,
  addAbilita,
  setProfiloAbilitaSelezionato,
  setListBonusAbilita,
  removeBonusFromListBonusAbilita,
} = abilitaSlice.actions;

export default abilitaSlice.reducer;
