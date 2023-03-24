import { createSlice } from "@reduxjs/toolkit";

export const disturbiMentaliSlice = createSlice({
  name: "disturbiMentali",
  initialState: {
    disturbiMentali: [],
  },
  reducers: {
    setDisturbiMentali: (state, { payload }) => {
      state.disturbiMentali = payload;
    },

    resetDisturbiMentali: (state) => {
      state.disturbiMentali = [];
    },

    addDisturbiMentali: (state, { payload }) => {
      const disturbo = state.disturbiMentali.find(
        (t) => t.equilibrioMental === payload.equilibrioMental
      );
      if (disturbo) {
        let distMod = { ...payload };
        state.disturbiMentali = state.disturbiMentali.map((di) =>
          di.equilibrioMental === payload.equilibrioMental ? distMod : di
        );
      } else {
        state.disturbiMentali.push(payload);
      }
    },
  },
});

export const { setDisturbiMentali, addDisturbiMentali, resetDisturbiMentali } =
  disturbiMentaliSlice.actions;

export default disturbiMentaliSlice.reducer;
