const Caratteristiche = [
  {
    id: "341428089448825036",
    nome: "Intuito",
    seme: "Cuori",
    valore: 4,
    modificatore: function calcolaModificatore(valore) {
      const val = valore - 5;
      return `(${val})`;
    },
  },
  {
    id: "341575873655210189",
    nome: "Memoria",
    seme: "Cuori",
    valore: 4,
  },
  {
    id: "341575935372296397",
    nome: "Percezione",
    seme: "Cuori",
    valore: 4,
  },
  {
    id: "341575940363518157",
    nome: "Volontà",
    seme: "Cuori",
    valore: 4,
  },
  {
    id: "341575948055871693",
    nome: "Aspetto",
    seme: "Quadri",
    valore: 4,
  },
  {
    id: "341575952441016525",
    nome: "Comando",
    seme: "Quadri",
    valore: 4,
  },
  {
    id: "341575960680726733",
    nome: "Creatività",
    seme: "Quadri",
    valore: 4,
  },
  {
    id: "341575965808263373",
    nome: "Socievolezza",
    seme: "Quadri",
    valore: 4,
  },
  {
    id: "341575970478620877",
    nome: "Coordinazione",
    seme: "Fiori",
    valore: 4,
  },
  {
    id: "341575976248934605",
    nome: "Destrezza Manuale",
    seme: "Fiori",
    valore: 4,
  },
  {
    id: "341575980363546829",
    nome: "Forza Fisica",
    seme: "Fiori",
    valore: 4,
    modificatore: function calcolaModificatore(valore) {
      let val = 0;
      if (valore >= 8) {
        val = +1;
      } else if (valore <= 3) {
        val = -1;
      }
      return `(${val})`;
    },
  },
  {
    id: "341575984630202573",
    nome: "Mira",
    seme: "Fiori",
    valore: 4,
  },
  {
    id: "341575989366620365",
    nome: "Affinità Occulta",
    seme: "Picche",
    valore: 4,
    modificatore: function calcolaModificatore(valore) {
      let val = 0;
      switch (valore) {
        case valore >= 8 && valore < 10:
          val = 1;
          break;
        case valore >= 10 && valore < 12:
          val = 2;
          break;
        case valore >= 12 && valore < 14:
          val = 3;
          break;
        case valore >= 14 && valore < 16:
          val = 4;
          break;
        case valore >= 16 && valore < 18:
          val = 5;
          break;
        case valore >= 18:
          val = 6;
          break;

        default:
          break;
      }
      return `(${val})`;
    },
  },
  {
    id: "341576021433123021",
    nome: "Distanza dalla Morte",
    seme: "Picche",
    valore: 14,
  },
  {
    id: "341576027967848653",
    nome: "Equilibrio Mentale",
    seme: "Picche",
    valore: 4,
    modificatore: function calcolaModificatore(valore) {
      let val = 0;
      if (valore < 4) {
        val = 4 - valore;
      }
      return `(${val})`;
    },
  },
  {
    id: "341576033844068557",
    nome: "Karma",
    seme: "Picche",
    valore: 4,
    modificatore: function calcolaModificatore(valore) {
      let val = "Neutro";
      if (valore >= 8) {
        val = "Vantaggio";
      } else if (valore < 3) {
        val = "Svantaggio";
      }
      return `(${val})`;
    },
  },
];

export default Caratteristiche;
