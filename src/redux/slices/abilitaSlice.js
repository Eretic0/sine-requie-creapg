import { createSlice } from "@reduxjs/toolkit";
import AbilitaDb from "../../db/Abilita";

export const abilitaSlice = createSlice({
  name: "abilita",
  initialState: {
    abilita: AbilitaDb,
  },
  reducers: {
    setAbilita: (state, { payload }) => {
      state.abilita = payload;
    },
  },
});

export const { setAbilita } = abilitaSlice.actions;

export default abilitaSlice.reducer;
