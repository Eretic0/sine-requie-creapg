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

export const calcolaVS = (gradoAbilita, valoreCaratteristica) => {
  let textVs = "";
  if ("1/2" === gradoAbilita) {
    if (valoreCaratteristica / 2 >= 8) {
      textVs = "V";
    } else if (valoreCaratteristica / 2 <= 3) {
      textVs = "S";
    }
  } else {
    if (gradoAbilita + valoreCaratteristica >= 8) {
      textVs = "V";
    } else if (gradoAbilita + valoreCaratteristica <= 3) {
      textVs = "S";
    }
  }
  return textVs;
};
