export const generateRandomNumer = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const semi = [
  { id: 1, nome: "Quadri" },
  { id: 2, nome: "Cuori" },
  { id: 3, nome: "Fiori" },
  { id: 4, nome: "Picche" },
];

export const getDescNumeroCarta = (numeroCarta) => {
  let descNumeroCarta = numeroCarta;

  switch (numeroCarta) {
    case 11:
      descNumeroCarta = "Cavaliere";
      break;
    case 12:
      descNumeroCarta = "Fante";
      break;
    case 13:
      descNumeroCarta = "Regina";
      break;
    case 14:
      descNumeroCarta = "Re";
      break;
    default:
      descNumeroCarta = numeroCarta;
      break;
  }
  return descNumeroCarta;
};

export const getDescSemeCarta = (semeCarta) =>
  semi.find((sem) => sem.id === semeCarta).nome;

export const estraiTaroccoMinore = () => {
  const numeroCarta = generateRandomNumer(14, 1);
  const semeCarta = generateRandomNumer(4, 1);

  let descNumeroCarta = getDescNumeroCarta(numeroCarta);

  const descSemeCarta = getDescSemeCarta(semeCarta);

  const cartaEstratta = {
    id: numeroCarta + descSemeCarta,
    numeroCarta: numeroCarta,
    semeCarta: semeCarta,
    descNumeroCarta: descNumeroCarta,
    descSemeCarta: descSemeCarta,
  };

  return cartaEstratta;
};
