import { createSlice } from "@reduxjs/toolkit";

export const pregiDifettiSlice = createSlice({
  name: "pregiDifetti",
  initialState: {
    pregi: [],
    difetti: [],
  },
  reducers: {
    setPregi: {
      reducer: (state, action) => {
        state.pregi.push(action.payload);
      },
    },
    setDifetti: {
      reducer: (state, action) => {
        state.difetti.push(action.payload);
      },
    },
  },
});

export const { setPregi, setDifetti } = pregiDifettiSlice.actions;

export default pregiDifettiSlice.reducer;
