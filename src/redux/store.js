import { configureStore } from "@reduxjs/toolkit";
import caratteristicheSlice from "./slices/caratteristicheSlice";
import generalitaSlice from "./slices/generalitaSlice";
import taroccoSlice from "./slices/taroccoSlice";
import etaSlice from "./slices/etaSlice";

export default configureStore({
  reducer: {
    caratteristiche: caratteristicheSlice,
    generalita: generalitaSlice,
    tarocco: taroccoSlice,
    eta: etaSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
