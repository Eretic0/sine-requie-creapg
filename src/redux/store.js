import { configureStore } from "@reduxjs/toolkit";
import caratteristicheSlice from "./slices/caratteristicheSlice";
import generalitaSlice from "./slices/generalitaSlice";
import taroccoSlice from "./slices/taroccoSlice";
import etaSlice from "./slices/etaSlice";
import professioneSlice from "./slices/professioneSlice";
import abilitaSlice from "./slices/abilitaSlice";
import pregiDifettiSlice from "./slices/pregiDifettiSlice";
import doniSlice from "./slices/doniSlice";
import disturbiMentaliSlice from "./slices/disturbiMentaliSlice";

export default configureStore({
  reducer: {
    caratteristiche: caratteristicheSlice,
    generalita: generalitaSlice,
    tarocco: taroccoSlice,
    eta: etaSlice,
    professione: professioneSlice,
    abilita: abilitaSlice,
    pregiDifetti: pregiDifettiSlice,
    doni: doniSlice,
    disturbiMentali: disturbiMentaliSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
