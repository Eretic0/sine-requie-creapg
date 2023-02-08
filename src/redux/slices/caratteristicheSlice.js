import { createSlice } from "@reduxjs/toolkit";
import CaratteristicheDb from "../../db/Caratteristiche";

export const caratteristicheSlice = createSlice({
  name: "caratteristiche",
  initialState: {
    caratteristiche: [...CaratteristicheDb],
  },
  reducers: {
    setCaratteristiche: (state, { payload }) => {
      state.caratteristiche = payload;
    },

    addCaratteristica: (state, { payload }) => {
      state.caratteristiche.push(payload);
    },
    resetCaratteristica: (state, { payload }) => {
      state.caratteristiche = state.caratteristiche.map((ca) =>
        ca.id === payload.id
          ? CaratteristicheDb.find((t) => t.id === payload.id)
          : ca
      );
    },
    updateCaratteristica: (state, { payload }) => {
      state.caratteristiche = state.caratteristiche.map((ca) =>
        ca.id === payload.id ? payload : ca
      );
    },
    resetCaratteristiche: (state) => {
      state.caratteristiche = [...CaratteristicheDb];
    },
  },
});

export const {
  setCaratteristiche,
  addCaratteristica,
  updateCaratteristica,
  resetCaratteristica,
  resetCaratteristiche,
} = caratteristicheSlice.actions;

export default caratteristicheSlice.reducer;
