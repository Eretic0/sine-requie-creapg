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
    updateAbilita: (state, { payload }) => {
      const ability = state.abilita.filter((ab) => ab.id !== payload.id);
      state.abilita = ability;
      state.abilita.push(payload);
    },
  },
});

export const { setAbilita, updateAbilita } = abilitaSlice.actions;

export default abilitaSlice.reducer;
