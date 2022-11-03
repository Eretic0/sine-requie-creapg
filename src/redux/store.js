import { configureStore } from "@reduxjs/toolkit";
import caratteristicheSlice from "./slices/caratteristicheSlice";

export default configureStore({
  reducer: {
    caratteristiche: caratteristicheSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
