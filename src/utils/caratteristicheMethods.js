import CaratteristicheDb from "../db/Caratteristiche";
import { scattantePregio } from "./pregiDifettiMethods";

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

const percezioneVal = (caratteristiche) =>
  getCaratteristicaByIdFromStore("341575935372296397", caratteristiche);

const volontaVal = (caratteristiche) =>
  getCaratteristicaByIdFromStore("341575940363518157", caratteristiche);

const coordinazioneVal = (caratteristiche) =>
  getCaratteristicaByIdFromStore("341575970478620877", caratteristiche);

const karmaVal = (caratteristiche) =>
  getCaratteristicaByIdFromStore("341576033844068557", caratteristiche);

export const calcolaRisoluzione = (caratteristiche, pregi) => {
  const carPercezione = percezioneVal(caratteristiche);

  const carVolonta = volontaVal(caratteristiche);

  const carCoordinazione = coordinazioneVal(caratteristiche);

  const carKarma = karmaVal(caratteristiche);

  let risoluzione =
    carPercezione.valore +
    carVolonta.valore +
    carCoordinazione.valore +
    carKarma.valore;

  const scattPregio = scattantePregio(pregi);

  if (scattPregio) {
    risoluzione += scattPregio.risoluzioneValore;
  }

  return risoluzione;
};
