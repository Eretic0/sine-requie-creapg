import { createSlice } from "@reduxjs/toolkit";
import CaratteristicheDb from "../../db/Caratteristiche";

export const caratteristicheSlice = createSlice({
  name: "caratteristiche",
  initialState: {
    caratteristiche: CaratteristicheDb,
  },
  reducers: {
    setCaratteristiche: (state, { payload }) => {
      state.caratteristiche = payload;
    },
  },
});

export const { setCaratteristiche } = caratteristicheSlice.actions;

export default caratteristicheSlice.reducer;
