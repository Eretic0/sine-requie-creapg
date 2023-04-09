export const calcolaCaratUsata = (gradoAbilita, valoreCaratteristica) => {
  let caratUsata = "";
  if ("1/2" === gradoAbilita) {
    if (typeof valoreCaratteristica == "number") {
      caratUsata = Math.floor(valoreCaratteristica / 2);
    }
  } else {
    if (typeof valoreCaratteristica == "number") {
      caratUsata = gradoAbilita + valoreCaratteristica;
    }
  }

  return caratUsata.toString();
};

export const calcolaVS = (sommaGradoCaratteristica) => {
  let textVs = "";
  if (sommaGradoCaratteristica >= 8) {
    textVs = "V";
  } else if (sommaGradoCaratteristica <= 3) {
    textVs = "S";
  }
  return textVs;
};

export const getDescIfPregioOrDifetto = (idAbilita, pregi, difetti) => {
  let desc = "";
  if (pregi.length > 0) {
    const listAbilitaPregRef = pregi.filter((t) => t.abilitaRef);
    listAbilitaPregRef.forEach((element) => {
      const pregioAb = element.abilitaRef.find((t) => t.id === idAbilita);
      if (pregioAb) {
        desc = `(+${pregioAb.valore})`;
      }
    });
  }
  if (difetti.length > 0) {
    const listAbilitaDiffRef = difetti.filter((t) => t.abilitaRef);
    listAbilitaDiffRef.forEach((element) => {
      const diffAb = element.abilitaRef.find((t) => t.id === idAbilita);
      if (diffAb) {
        desc = `(-${diffAb.valore})`;
      }
    });
  }
  return desc;
};

export const getValoreIfPregioOrDifetto = (
  idAbilita,
  valoreAbilita,
  pregi,
  difetti
) => {
  let desc = valoreAbilita;
  if (pregi.length > 0) {
    const listAbilitaPregRef = pregi.filter((t) => t.abilitaRef);
    listAbilitaPregRef.forEach((element) => {
      const pregioAb = element.abilitaRef.find((t) => t.id === idAbilita);
      if (pregioAb) {
        const num = Number(valoreAbilita) + Number(pregioAb.valore);
        desc = `${num}`;
      }
    });
  }
  if (difetti.length > 0) {
    const listAbilitaDiffRef = difetti.filter((t) => t.abilitaRef);
    listAbilitaDiffRef.forEach((element) => {
      const diffAb = element.abilitaRef.find((t) => t.id === idAbilita);
      if (diffAb) {
        const num = Number(valoreAbilita) - Number(diffAb.valore);
        desc = `${num}`;
      }
    });
  }
  return desc;
};
