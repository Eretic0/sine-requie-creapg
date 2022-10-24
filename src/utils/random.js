export const generateRandomNumer = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const semi = [
  { id: 1, nome: "Quadri" },
  { id: 2, nome: "Cuori" },
  { id: 3, nome: "Fiori" },
  { id: 4, nome: "Picche" },
];

export const estraiTaroccoMinore = () => {
  const numeroCarta = generateRandomNumer(14, 1);
  const semeCarta = generateRandomNumer(4, 1);

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

  const descSemeCarta = semi.find((sem) => sem.id === semeCarta).nome;

  const cartaEstratta = {
    id: numeroCarta + descSemeCarta,
    numeroCarta: numeroCarta,
    semeCarta: semeCarta,
    descNumeroCarta: descNumeroCarta,
    descSemeCarta: descSemeCarta,
  };

  return cartaEstratta;
};
