const Caratteristiche = [
  {
    id: "341428089448825036",
    nome: "Intuito",
    sigla: "Int",
    seme: "Cuori",
    valore: 4,
    modificatore: function calcolaModificatore(valore) {
      const val = valore - 5;
      return `${val}`;
    },
  },
  {
    id: "341575873655210189",
    nome: "Memoria",
    sigla: "Mem",
    seme: "Cuori",
    valore: 4,
  },
  {
    id: "341575935372296397",
    nome: "Percezione",
    sigla: "Per",
    seme: "Cuori",
    valore: 4,
  },
  {
    id: "341575940363518157",
    nome: "Volontà",
    sigla: "Vol",
    seme: "Cuori",
    valore: 4,
  },
  {
    id: "341575948055871693",
    nome: "Aspetto",
    sigla: "Asp",
    seme: "Quadri",
    valore: 4,
  },
  {
    id: "341575952441016525",
    nome: "Comando",
    sigla: "Com",
    seme: "Quadri",
    valore: 4,
  },
  {
    id: "341575960680726733",
    nome: "Creatività",
    seme: "Quadri",
    sigla: "Cre",
    valore: 4,
  },
  {
    id: "341575965808263373",
    nome: "Socievolezza",
    sigla: "Soc",
    seme: "Quadri",
    valore: 4,
  },
  {
    id: "341575970478620877",
    nome: "Coordinazione",
    sigla: "Coo",
    seme: "Fiori",
    valore: 4,
  },
  {
    id: "341575976248934605",
    nome: "Destrezza Manuale",
    sigla: "Des",
    seme: "Fiori",
    valore: 4,
  },
  {
    id: "341575980363546829",
    nome: "Forza Fisica",
    sigla: "For",
    seme: "Fiori",
    valore: 4,
    modificatore: function calcolaModificatore(valore) {
      let val = 0;
      if (valore >= 8) {
        val = +1;
      } else if (valore <= 3) {
        val = -1;
      }
      return `${val}`;
    },
  },
  {
    id: "341575984630202573",
    nome: "Mira",
    sigla: "Mir",
    seme: "Fiori",
    valore: 4,
  },
  {
    id: "341575989366620365",
    nome: "Affinità Occulta",
    sigla: "Aff",
    seme: "Picche",
    valore: 4,
    modificatore: function calcolaModificatore(valore) {
      let val = 0;
      if (valore >= 8 && valore < 10) {
        val = 1;
      } else if (valore >= 10 && valore < 12) {
        val = 2;
      } else if (valore >= 12 && valore < 14) {
        val = 3;
      } else if (valore >= 14 && valore < 16) {
        val = 4;
      } else if (valore >= 16 && valore < 18) {
        val = 5;
      } else if (valore >= 18) {
        val = 6;
      }
      return `${val}`;
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
  },
  {
    id: "341576033844068557",
    nome: "Karma",
    seme: "Picche",
    valore: 4,
    modificatore: function calcolaModificatore(valore) {
      let val = "N";
      if (valore >= 8) {
        val = "V";
      } else if (valore < 3) {
        val = "S";
      }
      return `${val}`;
    },
  },
  { id: "341576033844068558", nome: "Risoluzione", valore: 16 },
];

export default Caratteristiche;
