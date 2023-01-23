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

    addCaratteristica: (state, { payload }) => {
      state.caratteristiche.push(payload);
    },

    updateCaratteristica: (state, { payload }) => {
      state.caratteristiche = state.caratteristiche.map((ca) =>
        ca.id === payload.id ? payload : ca
      );
    },
  },
});

export const { setCaratteristiche, addCaratteristica, updateCaratteristica } =
  caratteristicheSlice.actions;

export default caratteristicheSlice.reducer;
