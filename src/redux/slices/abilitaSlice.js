import { createSlice } from "@reduxjs/toolkit";
import AbilitaDb from "../../db/Abilita";

const initialState = {
  abilita: [...AbilitaDb.filter((ab) => ab.prestampata === true)],
  abilitaStoricoTarocco: [...AbilitaDb.filter((ab) => ab.prestampata === true)],
  abilitaStoricoProfessione: [
    ...AbilitaDb.filter((ab) => ab.prestampata === true),
  ],
  profiloAbilitaSelezionato: "",
  listBonusAbilita: [],
  abilitaScelteTaroccoPassato: "",
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

    setAbilitaScelteTaroccoPassato: (state, { payload }) => {
      state.abilitaScelteTaroccoPassato = payload;
    },

    updateAbilita: (state, { payload }) => {
      state.abilita = state.abilita.map((ab) =>
        ab.id === payload.id ? payload : ab
      );
    },

    saveOrUpdateAbilita: (state, { payload }) => {
      const ability = state.abilita.find((t) => t.id === payload.id);
      if (ability) {
        let abilityCopy = { ...payload };
        abilityCopy.counterFallimento += 5;
        if (abilityCopy.counterFallimento >= 9) {
          abilityCopy.grado += 1;
          abilityCopy.counterFallimento = abilityCopy.counterFallimento - 9;
        }
        state.abilita = state.abilita.map((ab) =>
          ab.id === payload.id ? abilityCopy : ab
        );
      } else {
        state.abilita.push(payload);
      }
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

    setAbilitaStoricoProfessione: (state) => {
      state.abilitaStoricoProfessione = [...state.abilita];
    },

    resetAbilitaScelteTaroccoPassato: (state) => {
      state.abilitaScelteTaroccoPassato = "";
    },
  },
});

export const {
  setAbilita,
  updateAbilita,
  addAbilita,
  saveOrUpdateAbilita,
  setProfiloAbilitaSelezionato,
  setListBonusAbilita,
  removeBonusFromListBonusAbilita,
  resetAbilita,
  resetAllAbilita,
  setAbilitaStoricoTarocco,
  setAbilitaStoricoProfessione,
  setAbilitaScelteTaroccoPassato,
  resetAbilitaScelteTaroccoPassato,
} = abilitaSlice.actions;

export default abilitaSlice.reducer;
