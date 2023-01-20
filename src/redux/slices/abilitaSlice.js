import { createSlice } from "@reduxjs/toolkit";
import AbilitaDb from "../../db/Abilita";

export const abilitaSlice = createSlice({
  name: "abilita",
  initialState: {
    abilita: AbilitaDb.filter((ab) => ab.prestampata === true),
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
  },
});

export const { setAbilita, updateAbilita } = abilitaSlice.actions;

export default abilitaSlice.reducer;
