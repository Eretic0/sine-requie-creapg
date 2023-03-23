import { carAspetto, carFiori, carMemoria } from "./caratteristicheMethods";
import { ambSoviet } from "./ambientazioniMethods";

export const calcolaPuntiAbilitaByEta = (etaValue) => {
  let puntiAbilita = 7;
  if (etaValue >= 1 && etaValue <= 18) {
    puntiAbilita = 2;
  } else if (etaValue >= 19 && etaValue <= 39) {
    puntiAbilita = 7;
  } else if (etaValue >= 40 && etaValue <= 59) {
    puntiAbilita = 15;
  } else if (etaValue >= 60) {
    puntiAbilita = 21;
  }
  return puntiAbilita;
};

export const calcolaGradoMassimo = (etaValue) => {
  let gradoMassimo = 3;
  if (etaValue >= 1 && etaValue <= 18) {
    gradoMassimo = 2;
  } else if (etaValue >= 19 && etaValue <= 39) {
    gradoMassimo = 3;
  } else if (etaValue >= 40 && etaValue <= 59) {
    gradoMassimo = 4;
  } else if (etaValue >= 60) {
    gradoMassimo = 5;
  }
  return gradoMassimo;
};

export const calcolaNumeroAbilitaTaroccoPassato = (etaValue, ambientazione) => {
  let numeroAbilitaTaroccoPassato = 2;
  if (etaValue >= 1 && etaValue <= 7) {
    numeroAbilitaTaroccoPassato = 0;
  } else if (etaValue >= 8 && etaValue <= 13) {
    numeroAbilitaTaroccoPassato = ambSoviet.id === ambientazione ? 1 : 0;
  } else if (etaValue >= 14 && etaValue <= 18) {
    numeroAbilitaTaroccoPassato = ambSoviet.id === ambientazione ? 2 : 0;
  }
  return numeroAbilitaTaroccoPassato;
};

export const calcolaArrayProfessione = (etaValue, ambientazione) => {
  let arrayProfessione = ["N"];
  if (ambSoviet.id === ambientazione) {
    arrayProfessione = ["N", "A", "E"];
  } else {
    if (etaValue >= 1 && etaValue <= 39) {
      arrayProfessione = ["N"];
    } else if (etaValue >= 40 && etaValue <= 59) {
      arrayProfessione = ["N", "A"];
    } else if (etaValue >= 60) {
      arrayProfessione = ["N", "A", "E"];
    }
  }
  return arrayProfessione;
};

export const setAbilitaMiscByEta = (
  etaValue,
  funcSetPunti,
  funcSetGradoMassimo,
  funcSetArrayProfessione,
  funcSetCaratteristiche,
  funcSetNumeroAbilitaTaroccoPassato,
  ambientazione
) => {
  const puntiAbilita = calcolaPuntiAbilitaByEta(etaValue);
  const gradoMassimo = calcolaGradoMassimo(etaValue, ambientazione);
  const arrayProfessione = calcolaArrayProfessione(etaValue, ambientazione);
  const numeroAbilitaTaroccoPassato = calcolaNumeroAbilitaTaroccoPassato(
    etaValue,
    ambientazione
  );
  if (etaValue >= 40 && etaValue <= 59) {
    assignMalusToCaratteristicheByEta(1, funcSetCaratteristiche);
  } else if (etaValue >= 60) {
    assignMalusToCaratteristicheByEta(2, funcSetCaratteristiche);
  }
  funcSetPunti(puntiAbilita);
  funcSetGradoMassimo(gradoMassimo);
  funcSetArrayProfessione(arrayProfessione);
  funcSetNumeroAbilitaTaroccoPassato(numeroAbilitaTaroccoPassato);
};

export const assignMalusToCaratteristicheByEta = (
  valore,
  funcUpdateCaratteristica
) => {
  let carMemoriaMod = { ...carMemoria };
  let carAspettoMod = { ...carAspetto };
  carMemoriaMod.valore -= valore;
  carAspettoMod.valore -= valore;
  funcUpdateCaratteristica(carMemoriaMod);
  funcUpdateCaratteristica(carAspettoMod);
  carFiori.forEach((element) => {
    let carMod = { ...element };
    carMod.valore -= valore;
    funcUpdateCaratteristica(carMod);
  });
};

export const getDescForEtaPaper = (
  etaValue,
  puntiAbilita,
  gradoMassimo,
  ambientazione
) => {
  let titolo = "";
  let descrizione = "";
  if (ambSoviet.id === ambientazione) {
    if (etaValue <= 6) {
      titolo = "Infante (fino a 6 anni d'età)";
      descrizione = `Tarocco del Passato: Nessuno, Abilità di Professione: ${puntiAbilita} punti, Abilità Massime: Grado +${gradoMassimo}`;
    } else if (etaValue >= 7 && etaValue <= 13) {
      titolo = "Prepubere (7-13 anni d'età)";
      descrizione = `Tarocco del Passato: Selezionare una sola fra le due abilità, Abilità di Professione: ${puntiAbilita} punti, Abilità Massime: Grado +${gradoMassimo}`;
    } else if (etaValue >= 14 && etaValue <= 18) {
      titolo = "Giovane (14-18 anni d'età)";
      descrizione = `Abilità di Professione: ${puntiAbilita} punti, Abilità Massime: Grado +${gradoMassimo}`;
    }
  } else {
    if (etaValue >= 10 && etaValue <= 18) {
      titolo = "Giovane (10-18 anni d'età)";
      descrizione = `Tarocco del Passato: Nessuno, Abilità di Professione: ${puntiAbilita} punti, Abilità Massime: Grado +${gradoMassimo}`;
    }
  }
  if (etaValue >= 19 && etaValue <= 39) {
    titolo = "Adulto (19-39 anni d'età)";
    descrizione = `Personaggi Standard,\n Abilità di Professione: ${puntiAbilita} punti, Abilità Massime: Grado +${gradoMassimo}`;
  } else if (etaValue >= 40 && etaValue <= 59) {
    titolo = "Maturo (40-59 anni d'età)";
    descrizione = `Cuori: Memoria -1, Quadri: Aspetto -1, Fiori: tutte -1, Abilità di Professione: ${puntiAbilita} punti, Abilità massime: Grado ${gradoMassimo}, Professioni Avanzate`;
  } else if (etaValue >= 60) {
    titolo = "Anziano (60 anni o superiore)";
    descrizione = `Cuori: Memoria -2, Quadri: Aspetto -2, Fiori: tutte -2, Abilità di Professione: ${puntiAbilita} punti. Abilità massime: Grado ${gradoMassimo}, Professioni Eccellenti`;
  }
  return { titolo, descrizione };
};
