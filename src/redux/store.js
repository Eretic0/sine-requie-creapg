import { configureStore } from "@reduxjs/toolkit";
import caratteristicheSlice from "./slices/caratteristicheSlice";
import generalitaSlice from "./slices/generalitaSlice";
import taroccoSlice from "./slices/taroccoSlice";
import etaSlice from "./slices/etaSlice";
import professioneSlice from "./slices/professioneSlice";
import abilitaSlice from "./slices/abilitaSlice";

export default configureStore({
  reducer: {
    caratteristiche: caratteristicheSlice,
    generalita: generalitaSlice,
    tarocco: taroccoSlice,
    eta: etaSlice,
    professione: professioneSlice,
    abilita: abilitaSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
