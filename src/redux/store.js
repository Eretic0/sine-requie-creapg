import { configureStore } from "@reduxjs/toolkit";
import caratteristicheSlice from "./slices/caratteristicheSlice";
import generalitaSlice from "./slices/generalitaSlice";
import taroccoSlice from "./slices/taroccoSlice";

export default configureStore({
  reducer: {
    caratteristiche: caratteristicheSlice,
    generalita: generalitaSlice,
    tarocco: taroccoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
