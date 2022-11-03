import { createSlice } from "@reduxjs/toolkit";

export const caratteristicheSlice = createSlice({
  name: "caratteristiche",
  initialState: {
    caratteristiche: [],
  },
  reducers: {
    setCaratteristiche: (state, { payload }) => {
      state.caratteristiche = payload;
    },
  },
});

export const { setCaratteristiche } = caratteristicheSlice.actions;

export default caratteristicheSlice.reducer;
