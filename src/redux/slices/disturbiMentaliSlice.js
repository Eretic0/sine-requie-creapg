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
    addDisturbiMentali: (state, { payload }) => {
      state.disturbiMentali = state.disturbiMentali.push(payload);
    },
  },
});

export const { setDisturbiMentali, addDisturbiMentali } =
  disturbiMentaliSlice.actions;

export default disturbiMentaliSlice.reducer;
