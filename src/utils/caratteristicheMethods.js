import CaratteristicheDb from "../db/Caratteristiche";

export const getCaratteristicaById = (idCaratteristica) =>
  CaratteristicheDb.find((t) => t.id === idCaratteristica);

export const getCaratteristicaByIdFromStore = (
  idCaratteristica,
  caratteristiche
) => caratteristiche.find((t) => t.id === idCaratteristica);

export const carAffinitaOccultaByStore = (caratteristiche) =>
  getCaratteristicaByIdFromStore("341575989366620365", caratteristiche);

export const carEquilibrioMentaleByStore = (caratteristiche) =>
  getCaratteristicaByIdFromStore("341576027967848653", caratteristiche);

export const carMemoria = getCaratteristicaById("341575873655210189");
export const carAspetto = getCaratteristicaById("341575948055871693");
export const carEquilibrioMentale = getCaratteristicaById("341576027967848653");
export const carDistanzaMorte = getCaratteristicaById("341576021433123021");
export const carFiori = CaratteristicheDb.filter((t) => t.seme === "Fiori");
