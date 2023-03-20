import { createSlice } from "@reduxjs/toolkit";
import CaratteristicheDb from "../../db/Caratteristiche";

export const caratteristicheSlice = createSlice({
  name: "caratteristiche",
  initialState: {
    caratteristiche: [...CaratteristicheDb],
    caratteristicheStorico: [...CaratteristicheDb],
    caratteristicheAggiornate: [],
    minoriEstratti: [],
    btnBonusPressed: false,
    btnMalusPressed: false,
    semiBonus: [
      { id: "Cuori", valore: 0 },
      { id: "Quadri", valore: 0 },
      { id: "Fiori", valore: 0 },
      { id: "Picche", valore: 0 },
    ],
    semiMalus: [
      { id: "Cuori", valore: 0 },
      { id: "Quadri", valore: 0 },
      { id: "Fiori", valore: 0 },
      { id: "Picche", valore: 0 },
    ],
  },
  reducers: {
    setCaratteristicheStorico: (state) => {
      state.caratteristicheStorico = [...state.caratteristiche];
    },

    restoreCaratteristicheByStorico: (state) => {
      state.caratteristiche = [...state.caratteristicheStorico];
    },

    setCaratteristiche: (state, { payload }) => {
      state.caratteristiche = payload;
    },

    addCaratteristica: (state, { payload }) => {
      state.caratteristiche.push(payload);
    },

    addCaratteristicaAggiornata: (state, { payload }) => {
      state.caratteristicheAggiornate.push(payload);
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

    updateSemiBonus: (state, { payload }) => {
      state.semiBonus = state.semiBonus.map((ca) =>
        ca.id === payload.id ? payload : ca
      );
    },

    setSemiBonus: (state, { payload }) => {
      state.semiBonus = payload;
    },

    setSemiMalus: (state, { payload }) => {
      state.semiMalus = payload;
    },

    resetCaratteristiche: (state) => {
      state.caratteristiche = [...CaratteristicheDb];
    },

    setMinoriEstratti: (state, { payload }) => {
      state.minoriEstratti = payload;
    },

    addMinoreEstratto: (state, { payload }) => {
      state.minoriEstratti.push(payload);
    },

    setBtnBonusPressed: (state, { payload }) => {
      state.btnBonusPressed = payload;
    },

    setBtnMalusPressed: (state, { payload }) => {
      state.btnMalusPressed = payload;
    },

    resetSemiBonus: (state) => {
      state.semiBonus = [
        { id: "Cuori", valore: 0 },
        { id: "Quadri", valore: 0 },
        { id: "Fiori", valore: 0 },
        { id: "Picche", valore: 0 },
      ];
    },

    resetSemiMalus: (state) => {
      state.semiMalus = [
        { id: "Cuori", valore: 0 },
        { id: "Quadri", valore: 0 },
        { id: "Fiori", valore: 0 },
        { id: "Picche", valore: 0 },
      ];
    },

    updateSemiMalus: (state, { payload }) => {
      state.semiMalus = state.semiMalus.map((ca) =>
        ca.id === payload.id ? payload : ca
      );
    },

    resetMinoriEstratti: (state) => {
      state.minoriEstratti = [];
    },

    resetCaratteristicheAggiornate: (state) => {
      state.caratteristicheAggiornate = [];
    },
  },
});

export const {
  setCaratteristiche,
  addCaratteristica,
  updateCaratteristica,
  resetCaratteristica,
  resetCaratteristiche,
  setMinoriEstratti,
  addMinoreEstratto,
  setBtnBonusPressed,
  setBtnMalusPressed,
  resetSemiBonus,
  resetSemiMalus,
  setSemiMalus,
  resetMinoriEstratti,
  updateSemiMalus,
  addCaratteristicaAggiornata,
  resetCaratteristicheAggiornate,
  updateSemiBonus,
  setSemiBonus,
  setCaratteristicheStorico,
  restoreCaratteristicheByStorico,
} = caratteristicheSlice.actions;

export default caratteristicheSlice.reducer;
