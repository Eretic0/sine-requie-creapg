import AmbientazioniDb from "../db/Ambientazioni";

export const ambSoviet = AmbientazioniDb.find(
  (t) => t.id === "341412022890528972"
);

export const ambTronoCrisantemo = AmbientazioniDb.find(
  (t) => t.id === "341412158384373964"
);
