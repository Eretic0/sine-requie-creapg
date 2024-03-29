const Professioni = [
  /* *** Manuale Base - Begin *** */
  /* *** Manuale Base - Terre Perdute *** */
  /* Cacciatore di Morti
  Armi da Fuoco, Cacciare, Guidare -veicolo- o Cavalcare, Pronto Soccorso, Uso -arma-, Uso -arma-. */
  {
    id: "343962654843338957",
    nome: "Cacciatore di Morti",
    ambientazioneRef: "341412057407553740",
    eta: "N",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960737749663949" },
      { id: "343961388801065165" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960130942927053" },
          { id: "343960818077925581" },
        ],
      },
    ],
  },
  /* Frate Minore
  Erboristeria, Lingua -latino-, Naturalistica, Oratoria, Pronto soccorso, Teologia. */
  {
    id: "343962772011221197",
    nome: "Frate Minore",
    ambientazioneRef: "341412057407553740",
    eta: "N",
    abilitaRef: [
      { id: "343960897696301261" },
      { id: "343968013220839634" },
      { id: "343961201334550733" },
      { id: "343961275507671245" },
      { id: "343961388801065165" },
      { id: "343961628090302669" },
    ],
  },
  /* Mercante Esploratore
  Guidare -veicolo-, Impartire ordini, Lingua -specifica-, Mercanteggiare, Raggirare, Uso -arma- . */
  {
    id: "343965072543973581",
    nome: "Mercante Esploratore",
    ambientazioneRef: "341412057407553740",
    eta: "N",
    abilitaRef: [
      { id: "343960130942927053" },
      { id: "343961040254402765" },
      { id: "343960188611461325" },
      { id: "343960225473102029" },
      { id: "343961428784316621" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Partigiano
Guidare -veicolo- o Cavalcare, Interrogare, Uso -arma-, Lingua -tedesco-.
Due Abilità a scelta tra: Armi da Fuoco, Artiglieria, Demolizione, Naturalistica, Politica ed Economia, Pronto Soccorso, Telegrafia, Torturare. */
  {
    id: "343965540364058829",
    nome: "Partigiano",
    ambientazioneRef: "341412057407553740",
    eta: "N",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343960377471533261v1" },
      { id: "343968013220839630" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960130942927053" },
          { id: "343960818077925581" },
        ],
      },
    ],
    numeroAbilitaLibera: 2,
    abilitaLiberaListRef: [
      { id: "343960624931274957" },
      { id: "343960656041476301" },
      { id: "343960868252287181" },
      { id: "343961201334550733" },
      { id: "343961340510994637" },
      { id: "343961388801065165" },
      { id: "343961600257949901" },
      { id: "343961683497058509" },
    ],
  },
  /* Predone
Demolizione, Guidare -veicolo-, Scassinare, Torturare, Uso -arma-, Uso -arma-. */
  {
    id: "343965690621853901",
    nome: "Predone",
    ambientazioneRef: "341412057407553740",
    eta: "N",
    abilitaRef: [
      { id: "343960868252287181" },
      { id: "343960130942927053" },
      { id: "343961463669391565" },
      { id: "343961683497058509" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* Sopravvissuto
Agronomia o Addestrare -animale o Naturalistica, Cacciare, Guidare -veicolo- oppure Cavalcare, Pronto Soccorso o Erboristeria, Uso -arma-, Uso -arma-. */
  {
    id: "343965947300675789",
    nome: "Sopravvissuto",
    eta: "N",
    ambientazioneRef: "341412057407553740",
    abilitaRef: [
      { id: "343960737749663949" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960584919711949" },
          { id: "343960572802367693" },
          { id: "343961201334550733" },
        ],
      },
      {
        idList: 2,
        listAbilita: [
          { id: "343960130942927053" },
          { id: "343960818077925581" },
        ],
      },
      {
        idList: 3,
        listAbilita: [
          { id: "343961388801065165" },
          { id: "343960897696301261" },
        ],
      },
    ],
  },
  /* *** Manuale Base - IV Reich *** */
  /* Agente della Gestapo
Interrogare, Guidare -veicolo-, Legge, Perquisire, Uso -arma-, Uso -arma-. */
  {
    id: "343966231325311181",
    nome: "Agente della Gestapo",
    eta: "N",
    ambientazioneRef: "341411954837946572",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343960130942927053" },
      { id: "343961138922258637" },
      { id: "343960305710137549" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* Ispettore
Interrogare, Guidare -veicolo-, Legge, Perquisire, Uso -arma-, Uso -arma-, Impartire ordini, Politica ed Economia, Torturare. */
  {
    id: "343966406623101133",
    nome: "Ispettore",
    ambientazioneRef: "341411954837946572",
    eta: "A",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343960130942927053" },
      { id: "343961138922258637" },
      { id: "343960305710137549" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
      { id: "343961040254402765" },
      { id: "343961340510994637" },
      { id: "343961683497058509" },
    ],
  },
  /* Giornalista
Fotografia, Interrogare, Leggere e scrivere, Letteratura e arte, Politica ed Economia, Raggirare. */
  {
    id: "343966575211053261",
    nome: "Giornalista",
    ambientazioneRef: "341411954837946572",
    eta: "N",
    abilitaRef: [
      { id: "343960945631953101" },
      { id: "343961114292256973" },
      { id: "343960168760869069" },
      { id: "343961163498782925" },
      { id: "343961340510994637" },
      { id: "343961428784316621" },
    ],
  },
  /* Malavitoso
Borseggiare, Gioco d'azzardo, Intrufolarsi, Perquisire, Scassinare, Uso -arma-. */
  {
    id: "343966706870255821",
    nome: "Malavitoso",
    ambientazioneRef: "341411954837946572",
    eta: "N",
    abilitaRef: [
      { id: "343960724060504269" },
      { id: "343960994335162573" },
      { id: "343960144603775181" },
      { id: "343960305710137549" },
      { id: "343961463669391565" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Medico Classe C
Biologia, Chimica farmaceutica, Erboristeria, Fisica, Medicina e chirurgia, Pronto soccorso. */
  {
    id: "343966892302532813",
    nome: "Medico Classe C",
    ambientazioneRef: "341411954837946572",
    eta: "N",
    abilitaRef: [
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960897696301261" },
      { id: "343960977172070605" },
      { id: "343961188338499789" },
      { id: "343961388801065165" },
    ],
  },
  /* Medico Classe B
Biologia, Chimica farmaceutica, Erboristeria, Fisica, Medicina e chirurgia, Pronto soccorso, Impartire ordini, Legge, Tanatologia. */
  {
    id: "343967006924472525",
    nome: "Medico Classe B",
    ambientazioneRef: "341411954837946572",
    eta: "A",
    abilitaRef: [
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960897696301261" },
      { id: "343960977172070605" },
      { id: "343961188338499789" },
      { id: "343961388801065165" },
      { id: "343961040254402765" },
      { id: "343961138922258637" },
      { id: "343961562179961037" },
    ],
  },
  /* Medico Classe A
Biologia, Chimica farmaceutica, Erboristeria, Fisica, Medicina e chirurgia, Pronto soccorso, Impartire ordini, Legge, Tanatologia, Ingegneria Genetica, Politica ed Economia, Teratologia. */
  {
    id: "343967121520197837",
    nome: "Medico Classe A",
    ambientazioneRef: "341411954837946572",
    eta: "E",
    abilitaRef: [
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960897696301261" },
      { id: "343960977172070605" },
      { id: "343961188338499789" },
      { id: "343961388801065165" },
      { id: "343961040254402765" },
      { id: "343961138922258637" },
      { id: "343961562179961037" },
      { id: "343961081343901901" },
      { id: "343961340510994637" },
      { id: "343961656401854669" },
    ],
  },
  /* Psichiatra del Reich
Biologia, Chimica farmaceutica, Erboristeria, Fisica, Medicina e chirurgia, Pronto soccorso, Occultismo, Psichiatria, Storia e Filosofia. */
  {
    id: "343967247438446797",
    nome: "Psichiatra del Reich",
    ambientazioneRef: "341411954837946572",
    eta: "A",
    abilitaRef: [
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960897696301261" },
      { id: "343960977172070605" },
      { id: "343961188338499789" },
      { id: "343961388801065165" },
      { id: "343961225310240973" },
      { id: "343961407678578893" },
      { id: "343961508662739149" },
    ],
  },
  /* Soldato Semplice
Armi da Fuoco, Artiglieria, Guidare -cingolato-, Intrufolarsi, Uso - arma, Uso -fucile-. */
  {
    id: "343967373812826317",
    nome: "Soldato Semplice",
    ambientazioneRef: "341411954837946572",
    eta: "N",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960656041476301" },
      { id: "343968013220839631" },
      { id: "343960144603775181" },
      { id: "343960377471533261v1" },
      { id: "343968013220839632" },
    ],
  },
  /* Sottufficiale
Armi da Fuoco, Artiglieria, Guidare -cingolato-, Intrufolarsi, Uso - arma, Uso -fucile-, Impartire ordini, Pronto soccorso, Tattica. */
  {
    id: "343967521352712397",
    nome: "Sottufficiale",
    ambientazioneRef: "341411954837946572",
    eta: "A",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960656041476301" },
      { id: "343968013220839631" },
      { id: "343960144603775181" },
      { id: "343960377471533261v1" },
      { id: "343968013220839632" },
      { id: "343961040254402765" },
      { id: "343961388801065165" },
      { id: "343961571675865293" },
    ],
  },
  /* Ufficiale
Armi da Fuoco, Artiglieria, Guidare -cingolato-, Intrufolarsi, Uso - arma, Uso -fucile-, Impartire ordini, Pronto soccorso, Tattica, Legge, Politica ed Economia, Strategia. */
  {
    id: "343967634681757901",
    nome: "Ufficiale",
    ambientazioneRef: "341411954837946572",
    eta: "E",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960656041476301" },
      { id: "343968013220839631" },
      { id: "343960144603775181" },
      { id: "343960377471533261v1" },
      { id: "343968013220839632" },
      { id: "343961040254402765" },
      { id: "343961388801065165" },
      { id: "343961571675865293" },
      { id: "343961138922258637" },
      { id: "343961340510994637" },
      { id: "343961521508843725" },
    ],
  },
  /* *** Manuale Base - Soviet *** */
  /* Metalmeccanico
Artigianato -meccanico-, Borseggiare, Fisica, Intrufolarsi, Orientamento, Rissa. */
  {
    id: "343968062644420813",
    nome: "Metalmeccanico",
    ambientazioneRef: "341412022890528972",
    eta: "N",
    abilitaRef: [
      { id: "343968013220839633" },
      { id: "343960724060504269" },
      { id: "343960977172070605" },
      { id: "343960144603775181" },
      { id: "343968013220839629" },
      { id: "343960335239086285" },
    ],
  },
  /* Operaio di base
Ascoltare, Borseggiare, Demolizione, Intrufolarsi, Orientamento, Rissa. */
  {
    id: "343968177253777613",
    nome: "Operaio di base",
    ambientazioneRef: "341412022890528972",
    eta: "N",
    abilitaRef: [
      { id: "343960054820503757" },
      { id: "343960724060504269" },
      { id: "343960868252287181" },
      { id: "343960144603775181" },
      { id: "343968013220839629" },
      { id: "343960335239086285" },
    ],
  },
  /* Operaio Medico
Biologia, Chimica farmaceutica, Fisica, Medicina e chirurgia, Orientamento, Pronto soccorso. */
  {
    id: "343968177253777614",
    nome: "Operaio Medico",
    ambientazioneRef: "341412022890528972",
    eta: "N",
    abilitaRef: [
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960977172070605" },
      { id: "343961188338499789" },
      { id: "343968013220839629" },
      { id: "343961388801065165" },
    ],
  },
  /* Soldato NKVD
Armi da Fuoco, Intrufolarsi, Orientamento, Perquisire, Uso -arma-, Uso -arma-. */
  {
    id: "343968592013820109",
    nome: "Soldato NKVD",
    ambientazioneRef: "341412022890528972",
    eta: "N",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960144603775181" },
      { id: "343968013220839629" },
      { id: "343960305710137549" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* Meccanico Semplice
  Armi da Fuoco, Artigianato -meccanico-, Artiglieria, Biologia, Chimica farmaceutica, Fisica. */
  {
    id: "343969211872182477",
    nome: "Meccanico Semplice",
    ambientazioneRef: "341412022890528972",
    eta: "N",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343968013220839633" },
      { id: "343960656041476301" },
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960977172070605" },
    ],
  },
  /* Sottufficiale NKVD
Armi da Fuoco, Intrufolarsi, Orientamento, Perquisire, Uso -arma-, Uso -arma-, Impartire Ordini, Interrogare, Tattica. */
  {
    id: "343970027712544973",
    nome: "Sottufficiale NKVD",
    ambientazioneRef: "341412022890528972",
    eta: "A",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960144603775181" },
      { id: "343968013220839629" },
      { id: "343960305710137549" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
      { id: "343961040254402765" },
      { id: "343961114292256973" },
      { id: "343961571675865293" },
    ],
  },
  /* Ufficiale NKVD
Armi da Fuoco, Intrufolarsi, Orientamento, Perquisire, Uso -arma-, Uso -arma-, Impartire Ordini, Interrogare, Tattica, Artiglieria, Strategia, Torturare. */
  {
    id: "343970143684001997",
    nome: "Ufficiale NKVD",
    ambientazioneRef: "341412022890528972",
    eta: "E",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960144603775181" },
      { id: "343968013220839629" },
      { id: "343960305710137549" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
      { id: "343961040254402765" },
      { id: "343961114292256973" },
      { id: "343961571675865293" },
      { id: "343960656041476301" },
      { id: "343961521508843725" },
      { id: "343961683497058509" },
    ],
  },
  /* Gladiatore
  Le stesse possedute nella Professione di provenienza. */
  {
    id: "343970143684001998",
    nome: "Gladiatore",
    ambientazioneRef: "341412022890528972",
    eta: "N",
    professionePrecedente: true,
    abilitaRef: [],
  },
  /* Ribelle
Letteratura e arte, Naturalistica, Uso -arma-.
  Tre abilità legage al vecchio impiego. */
  {
    id: "343970143684001999",
    nome: "Ribelle",
    ambientazioneRef: "341412022890528972",
    eta: "N",
    abilitaRef: [
      { id: "343961163498782925" },
      { id: "343961201334550733" },
      { id: "343960377471533261v1" },
    ],
    numeroAbilitaLibera: 3,
    abilitaLiberaListRef: [
      { id: "343960624931274957" },
      { id: "343968013220839633" },
      { id: "343960656041476301" },
      { id: "343966802788745421" },
      { id: "343961340510994637" },
      { id: "343960841070051533" },
      { id: "343960977172070605" },
      { id: "343960144603775181" },
      { id: "343968013220839629" },
      { id: "343960305710137549" },
      { id: "343960377471533261v2" },
      { id: "343961188338499789" },
      { id: "343961388801065165" },
      { id: "343960054820503757" },
      { id: "343960724060504269" },
      { id: "343960868252287181" },
      { id: "343960335239086285" },
    ],
  },
  /* *** Manuale Base - Sanctum Imperium *** */
  /* Cacciatore di Morti
  Armi da Fuoco, Guidare -veicolo- o Cavalcare, Lingua -Latino-, Pronto Soccorso, Uso -arma-, Uso -arma-. */
  {
    id: "343970143684002000",
    nome: "Cacciatore di Morti",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343968013220839634" },
      { id: "343961388801065165" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960130942927053" },
          { id: "343960818077925581" },
        ],
      },
    ],
  },
  /* Converso
  Interrogare, Perquisire, Rissa, Teologia, Torturare, Uso -arma-. */
  {
    id: "343970143684002001",
    nome: "Converso",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343960305710137549" },
      { id: "343960335239086285" },
      { id: "343961628090302669" },
      { id: "343961683497058509" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Excubitor
  Interrogare, Intrufolarsi, Legge, Osservare, Perquisire, Uso -arma-. */
  {
    id: "343970143684002002",
    nome: "Excubitor",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343960144603775181" },
      { id: "343961138922258637" },
      { id: "343960281846644941" },
      { id: "343960305710137549" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Portavoce degli Excubitores
  Interrogare, Intrufolarsi, Legge, Osservare, Perquisire, Uso -arma-, Impartire Ordini, Lingua -latino-, Tattica. */
  {
    id: "343970143684002003",
    nome: "Portavoce degli Excubitor",
    ambientazioneRef: "341411834674282700",
    eta: "A",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343960144603775181" },
      { id: "343961138922258637" },
      { id: "343960281846644941" },
      { id: "343960305710137549" },
      { id: "343960377471533261v1" },
      { id: "343961040254402765" },
      { id: "343968013220839634" },
      { id: "343961571675865293" },
    ],
  },
  /* Frate Penitenziale
  Biologia, Chimica farmaceutica, Erboristeria, Lingua -latino-, Medicina e Chirurgia, Teologia. */
  {
    id: "343970143684002004",
    nome: "Frate Penitenziale",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960897696301261" },
      { id: "343968013220839634" },
      { id: "343961188338499789" },
      { id: "343961628090302669" },
    ],
  },
  /* Malavitoso
  Borseggiare, Intrufolarsi, Perquisire, Raggirare, Scassinare, Uso -arma-. */
  {
    id: "343970143684002005",
    nome: "Malavitoso",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343960724060504269" },
      { id: "343960144603775181" },
      { id: "343960305710137549" },
      { id: "343961428784316621" },
      { id: "343961463669391565" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Sotium Inquisitoris
  Interrogare, Lingua -latino-, Occultismo, Perquisire, Teologia, Uso -spada-. */
  {
    id: "343970143684002006",
    nome: "Sotium Inquisitoris",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343968013220839634" },
      { id: "343961225310240973" },
      { id: "343960305710137549" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
    ],
  },
  /* Inquisitore
  Interrogare, Lingua -latino-, Occultismo, Perquisire, Teologia, Uso -spada-, Legge, Uso -requiem-, Torturare. */
  {
    id: "343970143684002007",
    nome: "Inquisitore",
    ambientazioneRef: "341411834674282700",
    eta: "A",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343968013220839634" },
      { id: "343961225310240973" },
      { id: "343960305710137549" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
      { id: "343961138922258637" },
      { id: "343968013220839636" },
      { id: "343961683497058509" },
    ],
  },
  /* Magister
  Interrogare, Lingua -latino-, Occultismo, Perquisire, Teologia, Uso -spada-, Legge, Uso -requiem-, Torturare, Impartire Ordini, Politica ed Economia, Tattica. */
  {
    id: "343970143684002008",
    nome: "Magister",
    ambientazioneRef: "341411834674282700",
    eta: "E",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343968013220839634" },
      { id: "343961225310240973" },
      { id: "343960305710137549" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
      { id: "343961138922258637" },
      { id: "343968013220839636" },
      { id: "343961683497058509" },
      { id: "343961040254402765" },
      { id: "343961340510994637" },
      { id: "343961571675865293" },
    ],
  },
  /* Templare Errante
  Addestrare -cavallo-, Cavalcare, Lingua -latino-, Orientamento, Teologia, Uso -spada-. */
  {
    id: "343970143684002009",
    nome: "Templare Errante",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343968013220839637" },
      { id: "343960818077925581" },
      { id: "343968013220839634" },
      { id: "343968013220839629" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
    ],
  },
  /* Templare Adepto
  Addestrare -cavallo-, Cavalcare, Lingua -latino-, Orientamento, Teologia, Uso -spada-, Pronto Soccorso, Tattica, Uso -expiator-. */
  {
    id: "343970143684002010",
    nome: "Templare Adepto",
    ambientazioneRef: "341411834674282700",
    eta: "A",
    abilitaRef: [
      { id: "343968013220839637" },
      { id: "343960818077925581" },
      { id: "343968013220839634" },
      { id: "343968013220839629" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
      { id: "343961388801065165" },
      { id: "343961571675865293" },
      { id: "343968013220839638" },
    ],
  },

  /* Maestro Templare
    Addestrare -cavallo-, Cavalcare, Lingua -latino-, Orientamento, Teologia, Uso -spada-, Pronto Soccorso, Tattica, Uso -expiator-, Occultismo, Politica ed Economia, Strategia. */
  {
    id: "343970143684002011",
    nome: "Maestro Templare",
    ambientazioneRef: "341411834674282700",
    eta: "E",
    abilitaRef: [
      { id: "343968013220839637" },
      { id: "343960818077925581" },
      { id: "343968013220839634" },
      { id: "343968013220839629" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
      { id: "343961388801065165" },
      { id: "343961571675865293" },
      { id: "343968013220839638" },
      { id: "343961225310240973" },
      { id: "343961340510994637" },
      { id: "343961521508843725" },
    ],
  },
  /* *** Manuale Base - End *** */
  /* *** Manuale Sanctum Imperium - Begin *** */
  /* Commissario del Santo Uffizio
 Armi da Fuoco, Perquisire, Borseggiare, Cavalcare o Guidare -veicolo-, Interrogare, Lingua -specifica-, Lingua -latino-, Raggirare, Recitare,  
 Rissa, Teologia, Uso -arma-, Uso -arma-
 */
  {
    id: "343970143684002012",
    nome: "Commissario del Santo Uffizio",
    ambientazioneRef: "341411834674282700",
    eta: "E",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960305710137549" },
      { id: "343960724060504269" },
      { id: "343961114292256973" },
      { id: "343960188611461325" },
      { id: "343968013220839634" },
      { id: "343961428784316621" },
      { id: "343961444479402189" },
      { id: "343960335239086285" },
      { id: "343961628090302669" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960818077925581" },
          { id: "343960130942927053" },
        ],
      },
    ],
  },

  /* Crociato
 Armi da Fuoco, Cavalcare, Intrufolarsi, Uso -fucile-, Uso -arma-.
 Un'abilità a scelta tra: Artiglieria, Demolizione, Guidare -veicolo-.
 */
  {
    id: "343970143684002013",
    nome: "Crociato",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960818077925581" },
      { id: "343960144603775181" },
      { id: "343968013220839632" },
      { id: "343960377471533261v1" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960656041476301" },
          { id: "343960868252287181" },
          { id: "343960130942927053" },
        ],
      },
    ],
  },

  /* Crociato Sottufficiale
 Armi da Fuoco, Cavalcare, Intrufolarsi, Uso -fucile-, Uso -arma-.
 Un'abilità a scelta tra Artiglieria, Demolizione, Guidare -veicolo-.
 Impartire Ordini, Naturalistica, Tattica
 */
  {
    id: "343970143684002014",
    nome: "Crociato Sottufficiale",
    ambientazioneRef: "341411834674282700",
    eta: "A",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960818077925581" },
      { id: "343960144603775181" },
      { id: "343968013220839632" },
      { id: "343960377471533261v1" },
      { id: "343961040254402765" },
      { id: "343961201334550733" },
      { id: "343961571675865293" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960656041476301" },
          { id: "343960868252287181" },
          { id: "343960130942927053" },
        ],
      },
    ],
  },

  /* Crociato Ufficiale
 Armi da Fuoco, Cavalcare, Intrufolarsi, Uso -fucile-, Uso -arma-. 
 un'abilità a scelta tra Artiglieria, Demolizione, Guidare -veicolo-.
 Impartire Ordini, Naturalistica, Tattica.
 Lingua -latino-, Politica ed Economia, Strategia.
 */
  {
    id: "343970143684002015",
    nome: "Crociato Ufficiale",
    ambientazioneRef: "341411834674282700",
    eta: "E",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960818077925581" },
      { id: "343960144603775181" },
      { id: "343968013220839632" },
      { id: "343960377471533261v1" },
      { id: "343961040254402765" },
      { id: "343961201334550733" },
      { id: "343961571675865293" },
      { id: "343968013220839634" },
      { id: "343961340510994637" },
      { id: "343961521508843725" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960656041476301" },
          { id: "343960868252287181" },
          { id: "343960130942927053" },
        ],
      },
    ],
  },

  /* Crociato Nero
 Armi da Fuoco, Cavalcare, Intrufolarsi, Uso -fucile-, Uso -arma-.
 Un'abilità a scelta tra Artiglieria, Demolizione, Guidare -veicolo-.
 Impartire Ordini, Tattica, Uso -lanciafiamme-
 */
  {
    id: "343970143684002016",
    nome: "Crociato Nero",
    ambientazioneRef: "341411834674282700",
    eta: "A",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960818077925581" },
      { id: "343960144603775181" },
      { id: "343968013220839632" },
      { id: "343960377471533261v1" },
      { id: "343961040254402765" },
      { id: "343961571675865293" },
      { id: "343968013220839642" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960656041476301" },
          { id: "343960868252287181" },
          { id: "343960130942927053" },
        ],
      },
    ],
  },

  /* Frate Gesuita (Provinciale - Giornalista)
 Fotografia, Leggere e Scrivere, Lingua -latino-, Politica ed economia, Storia e filosofia,
 Teologia
 */
  {
    id: "343970143684789017",
    nome: "Frate Gesuita (Provinciale - Giornalista)",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343960945631953101" },
      { id: "343960168760869069" },
      { id: "343968013220839634" },
      { id: "343961340510994637" },
      { id: "343961508662739149" },
      { id: "343961628090302669" },
    ],
  },

  /* Giornalista Laico
 Fotografia, Leggere e Scrivere, Persuadere, Politica ed Economia, Raggirare.
 */
  {
    id: "343970143684002017",
    nome: "Giornalista Laico",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343960945631953101" },
      { id: "343960168760869069" },
      { id: "343960318838309069" },
      { id: "343961340510994637" },
      { id: "343961428784316621" },
    ],
  },

  /* Membro di una Setta
   */
  {
    id: "343970143684002020",
    nome: "Membro di una Setta",
    ambientazioneRef: "341411834674282700",
    eta: "A",
    professionePrecedente: true,
    abilitaRef: [],
  },

  /* Missionario
 Lingua -latino-, Naturalistica, Persuadere, Pronto soccorso, Teologia, Uso -arma-
 */
  {
    id: "343970143684002018",
    nome: "Missionario",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343968013220839634" },
      { id: "343961201334550733" },
      { id: "343960318838309069" },
      { id: "343961388801065165" },
      { id: "343961628090302669" },
      { id: "343960377471533261v1" },
    ],
  },

  /* Missionario Superiore
 Lingua -latino-, Naturalistica, Persuadere, Pronto soccorso, Teologia, Uso -arma-
 Oratoria, Tattica, Telegrafia
 */
  {
    id: "343970143684002019",
    nome: "Missionario Superiore",
    ambientazioneRef: "341411834674282700",
    eta: "A",
    abilitaRef: [
      { id: "343968013220839634" },
      { id: "343961201334550733" },
      { id: "343960318838309069" },
      { id: "343961388801065165" },
      { id: "343961628090302669" },
      { id: "343960377471533261v1" },
      { id: "343961275507671245" },
      { id: "343961571675865293" },
      { id: "343961600257949901" },
    ],
  },

  /* Padre Esorcista
Esorcismo, Impartire Ordini, Interrogare, Lingua -latino-, Occultismo, Teologia
 */
  {
    id: "343970143684002021",
    nome: "Padre Esorcista",
    ambientazioneRef: "341411834674282700",
    eta: "N",
    abilitaRef: [
      { id: "343960914857296077" },
      { id: "343961040254402765" },
      { id: "343961114292256973" },
      { id: "343968013220839634" },
      { id: "343961225310240973" },
      { id: "343961628090302669" },
    ],
  },

  /* Strega o Magus
   */
  {
    id: "343970143684002022",
    nome: "Strega o Magus",
    ambientazioneRef: "341411834674282700",
    eta: "A",
    professionePrecedente: true,
    abilitaRef: [],
  },
  /* *** Manuale Sanctum Imperium - End *** */

  /* *** Manuale Soviet - Start *** */
  /* Operaio Esperto
 Artigianato, Artigianato -Meccanico-, Borseggiare, Fisica, Intrufolarsi, Orientamento
 Rissa, Leggere e Scrivere, un'abilità relativa mansione */
  {
    id: "205068177253777714",
    nome: "Operaio Esperto",
    ambientazioneRef: "341412022890528972",
    eta: "A",
    abilitaRef: [
      { id: "343960641759871181" },
      { id: "343968013220839633" },
      { id: "343960724060504269" },
      { id: "343960977172070605" },
      { id: "343960144603775181" },
      { id: "343968013220839629" },
      { id: "343960335239086285" },
      { id: "343960168760869069" },
    ],
    numeroAbilitaLibera: 1,
    abilitaLiberaListRef: [
      { id: "343960572802367693" },
      { id: "343960584919711949" },
      { id: "343960897696301261" },
      { id: "343961312311640269" },
    ],
  },

  /* Addetto ai Servizi Speciali
 Ascoltare, Borseggiare, Correre, Intrufolarsi, Mercanteggiare, Orientamento, Perquisire
 Raggirare, Rissa */
  {
    id: "205068177253777715",
    nome: "Addetto ai Servizi Speciali",
    ambientazioneRef: "341412022890528972",
    eta: "A",
    abilitaRef: [
      { id: "343960054820503757" },
      { id: "343960724060504269" },
      { id: "343960116705362125" },
      { id: "343960144603775181" },
      { id: "343960225473102029" },
      { id: "343968013220839629" },
      { id: "343960305710137549" },
      { id: "343961428784316621" },
      { id: "343960335239086285" },
    ],
  },

  /* Meccanici Avanzati
 Armi da Fuoco, Artigianato -Meccanico-, Artiglieria, Biologia, Chimica Farmaceutica,
 Fisica, Guidare -cingolato-, Impartire Ordini, Ingegneria, Ingegneria Biomeccanica
 Leggere e Scrivere, Medicina e Chirurgia
  */
  {
    id: "205068177253777716",
    nome: "Meccanici Avanzati",
    ambientazioneRef: "341412022890528972",
    eta: "E",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343968013220839633" },
      { id: "343960656041476301" },
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960977172070605" },
      { id: "343968013220839631" },
      { id: "343961040254402765" },
      { id: "343961063271694541" },
      { id: "343961097641918669" },
      { id: "343960168760869069" },
      { id: "343961188338499789" },
    ],
  },

  /* Membro del Gruppo d'Assalto
 Armi da Fuoco, Artiglieria, Demolizione, Impartire Ordini, Intrufolarsi,
 Orientamento, Rissa, Tattica, Uso -arma-, Uso -arma-, Uso -arma-, Uso -arma-
  */
  {
    id: "205068177253777717",
    nome: "Membro del Gruppo d'Assalto",
    ambientazioneRef: "341412022890528972",
    eta: "E",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960656041476301" },
      { id: "343960868252287181" },
      { id: "343961040254402765" },
      { id: "343960144603775181" },
      { id: "343968013220839629" },
      { id: "343960335239086285" },
      { id: "343961571675865293" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
      { id: "343960377471533261v3" },
      { id: "343960377471533261v4" },
    ],
  },

  /* Biomacchina da lavoro
   */
  {
    id: "205068177253777718",
    nome: "Biomacchina da lavoro",
    ambientazioneRef: "341412022890528972",
    eta: "N",
    professionePrecedente: true,
    abilitaRef: [],
  },

  /* Biomacchina da guerra
  Armi da Fuoco, Artiglieria, Uso -arma-
   */
  {
    id: "205068177253777719",
    nome: "Biomacchina da guerra",
    ambientazioneRef: "341412022890528972",
    eta: "A",
    professionePrecedente: true,
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960656041476301" },
      { id: "343960377471533261v1" },
    ],
  },

  /* *** Manuale Soviet - End *** */

  /* *** Inquisizione - Begin *** */
  /* Converso specializzato - Guardia del corpo
 Armi da Fuoco, Perquisire, Pronto Soccorso, Rissa, Uso -arma-, Uso -arma- */
  {
    id: "21907894684002001",
    nome: "Converso specializzato - Guardia del corpo",
    ambientazioneRef: "341412111307505868",
    eta: "N",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960305710137549" },
      { id: "343961388801065165" },
      { id: "343960335239086285" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* Converso specializzato - Avanscoperta
Intrufolarsi, Orientamento, Perquisire, Raggirare, Rissa, Scassinare */
  {
    id: "219023943684002002",
    nome: "Converso specializzato - Avanscoperta",
    ambientazioneRef: "341412111307505868",
    eta: "N",
    abilitaRef: [
      { id: "343960144603775181" },
      { id: "343968013220839629" },
      { id: "343960305710137549" },
      { id: "343961428784316621" },
      { id: "343960335239086285" },
      { id: "343961463669391565" },
    ],
  },
  /* Converso specializzato - Persecutore
Artigianato -Vario-, Interrogare, Pronto Soccorso, Teologia, Torturare, Uso -arma- */
  {
    id: "219070112384002003",
    nome: "Converso specializzato - Persecutore",
    ambientazioneRef: "341412111307505868",
    eta: "N",
    abilitaRef: [
      { id: "343960641759871181" },
      { id: "343961114292256973" },
      { id: "343961388801065165" },
      { id: "343961628090302669" },
      { id: "343961683497058509" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Converso specializzato - Autista
Artigianato -Meccanici-, Rissa, Uso -arma- 
e tre a scelta tra: Guidare -due ruote-, 
Guidare -quattro ruote-, Guidare -camion-, Guidare -cingolato-, Pilotare -battelli- */
  {
    id: "219074563684002004",
    nome: "Converso specializzato - Autista",
    ambientazioneRef: "341412111307505868",
    eta: "N",
    abilitaRef: [
      { id: "343968013220839633" },
      { id: "343960335239086285" },
      { id: "343960377471533261v1" },
    ],
    numeroAbilitaLibera: 3,
    abilitaLiberaListRef: [
      { id: "343968013220839647" },
      { id: "343968013220839777" },
      { id: "343968013220839648" },
      { id: "343968013220839631" },
      { id: "343968013220839649" },
    ],
  },
  /* Converso specializzato - Bruto
Armi da Fuoco, Perquisire, Rissa, Uso -arma-, Uso -arma-, Uso -arma- */
  {
    id: "219077843684002005",
    nome: "Converso specializzato - Bruto",
    ambientazioneRef: "341412111307505868",
    eta: "N",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960305710137549" },
      { id: "343960335239086285" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
      { id: "343960377471533261v3" },
    ],
  },
  /* Notaio - Contabile
Legge, Leggere e Scrivere, Lingua -Latino-, Mercanteggiare, Politica ed economia, Storia e filosofia, Teologia
Prerequisito: Mercanteggiare (+2), Lingua straniera (+1) */
  {
    id: "21907018984002006",
    nome: "Notaio - Contabile",
    ambientazioneRef: "341412111307505868",
    eta: "N",
    abilitaRef: [
      { id: "343961138922258637" },
      { id: "343960168760869069" },
      { id: "343968013220839634" },
      { id: "343960188611461325v1" },
      { id: "343960225473102029" },
      { id: "343961340510994637" },
      { id: "343961508662739149" },
      { id: "343961628090302669" },
    ],
  },
  /* Notaio - Avvocato
Legge, Leggere e Scrivere, Lingua -Latino-, Oratoria, Politica ed economia, Storia e filosofia, Teologia
Prerequisito: Legge (+3) */
  {
    id: "219075443684002017",
    nome: "Notaio - Avvocato",
    ambientazioneRef: "341412111307505868",
    eta: "N",
    abilitaRef: [
      { id: "343961138922258637" },
      { id: "343960168760869069" },
      { id: "343968013220839634" },
      { id: "343961275507671245" },
      { id: "343961340510994637" },
      { id: "343961508662739149" },
      { id: "343961628090302669" },
    ],
  },

  /* Notaio - Notaio
Falsificazione, Legge, Leggere e Scrivere, Lingua -Latino-, Mercanteggiare, Politica ed economia, Storia e filosofia, Teologia
Prerequisito: Legge (+3) */
  {
    id: "219077896324002008",
    nome: "Notaio - Notaio",
    ambientazioneRef: "341412111307505868",
    eta: "N",
    abilitaRef: [
      { id: "343960932485955789" },
      { id: "343961138922258637" },
      { id: "343960168760869069" },
      { id: "343968013220839634" },
      { id: "343960225473102029" },
      { id: "343961340510994637" },
      { id: "343961508662739149" },
      { id: "343961628090302669" },
    ],
  },
  /* Notaio - Teologo
Legge, Leggere e Scrivere, Lingua -Latino-, Politica ed economia, Storia e filosofia, Teologia
Prerequisito: Teologia (+3)
Pregio: Conoscenza di un ambiente (Ambiente ecclesiastico) */
  {
    id: "21907041526384002009",
    nome: "Notaio - Teologo",
    ambientazioneRef: "341412111307505868",
    eta: "N",
    abilitaRef: [
      { id: "343961138922258637" },
      { id: "343960168760869069" },
      { id: "343968013220839634" },
      { id: "343961340510994637" },
      { id: "343961508662739149" },
      { id: "343961628090302669" },
    ],
  },
  /* Notaio - Letterato
Legge, Leggere e Scrivere, Lingua -Latino-, Politica ed economia, Storia e filosofia, Teologia
Scegliere due tra:
Letteratura e arte, Lingua -a scelta-, Lingua -a scelta- */
  {
    id: "21905963684002010",
    nome: "Notaio - Letterato",
    ambientazioneRef: "341412111307505868",
    eta: "N",
    abilitaRef: [
      { id: "343961138922258637" },
      { id: "343960168760869069" },
      { id: "343968013220839634" },
      { id: "343961340510994637" },
      { id: "343961508662739149" },
      { id: "343961628090302669" },
    ],
    numeroAbilitaLibera: 2,
    abilitaLiberaListRef: [
      { id: "343961163498782925" },
      { id: "343960188611461325v1" },
      { id: "343960188611461325v2" },
    ],
  },
  /* Segretari tirocinanti
Scegliere 3 tra queste, con grado massimo +2 e 3 abilità per cosa faceva prima, ma non dalla lista seguente 
Legge, Leggere e Scrivere, Lingua -Latino-, Politica ed economia, Storia e filosofia, Teologia  */
  {
    id: "219071247884002011",
    nome: "Segretario tirocinante",
    ambientazioneRef: "341412111307505868",
    eta: "N",
    abilitaRef: [
      { id: "343961138922258637" },
      { id: "343960168760869069" },
      { id: "343968013220839634" },
      { id: "343961340510994637" },
      { id: "343961508662739149" },
      { id: "343961628090302669" },
    ],
    numeroAbilitaLibera: 3,
    abilitaLiberaListRef: [
      { id: "343960031658508493" },
      { id: "343960054820503757" },
      { id: "343960116705362125" },
      { id: "343960130942927053" },
      { id: "343960144603775181" },
      { id: "343960154959511757" },
      { id: "343960188611461325" },
      { id: "343960225473102029" },
      { id: "343960240733028557" },
      { id: "343960281846644941" },
      { id: "343960305710137549" },
      { id: "343960318838309069" },
      { id: "343960335239086285" },
      { id: "343960353026080973" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
      { id: "343960552491450573" },
      { id: "343960572802367693" },
      { id: "343960584919711949" },
      { id: "343960624931274957" },
      { id: "343960641759871181" },
      { id: "343960656041476301" },
      { id: "343960670392287437" },
      { id: "343960724060504269" },
      { id: "343960737749663949" },
      { id: "343960798508351693" },
      { id: "343960818077925581" },
      { id: "343960841070051533" },
      { id: "343960868252287181" },
      { id: "343960881357390029" },
      { id: "343960897696301261" },
      { id: "343960914857296077" },
      { id: "343960932485955789" },
      { id: "343960945631953101" },
      { id: "343960977172070605" },
      { id: "343960994335162573" },
      { id: "343961040254402765" },
      { id: "343961063271694541" },
      { id: "343961081343901901" },
      { id: "343961097641918669" },
      { id: "343961114292256973" },
      { id: "343961163498782925" },
      { id: "343961188338499789" },
      { id: "343961201334550733" },
      { id: "343961225310240973" },
      { id: "343961275507671245" },
      { id: "343961295983214797" },
      { id: "343961312311640269" },
      { id: "343961323029135565" },
      { id: "343961353401139405" },
      { id: "343961388801065165" },
      { id: "343961407678578893" },
      { id: "343961428784316621" },
      { id: "343961444479402189" },
      { id: "343961463669391565" },
      { id: "343961475369402573" },
      { id: "343961491016253645" },
      { id: "343961521508843725" },
      { id: "343961548035719373" },
      { id: "343961562179961037" },
      { id: "343961571675865293" },
      { id: "343961586155651277" },
      { id: "343961600257949901" },
      { id: "343961656401854669" },
      { id: "343961683497058509" },
      { id: "343966802788745421" },
      { id: "343968013220839629" },
      { id: "343968013220839630" },
      { id: "343968013220839631" },
      { id: "343968013220839633" },
      { id: "343968013220839637" },
    ],
  },
  /* *** Inquisizione - End *** */

  /* *** Templari - Begin *** */
  /* Scudiero
  Addestrare -cavallo-, Cavalcare, Lingua -latino-, Orientamento, Teologia, Uso -spada-.
Personaggio giovane o adulto con abilità del Templare Errante, ma solo 2 punti per Grado massimo +2 */
  {
    id: "21805963684002001",
    nome: "Scudiero",
    ambientazioneRef: "341412111307502180",
    eta: "N",
    abilitaRef: [
      { id: "343968013220839637" },
      { id: "343960818077925581" },
      { id: "343968013220839634" },
      { id: "343968013220839629" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
    ],
  },
  /* Templare Sterminatore (Adepto)
  Addestrare -cavallo-, Cavalcare, Lingua -latino-, Orientamento, Teologia, Uso -spada-, Pronto Soccorso, Tattica, Uso -expiator-.
+1 Coordinazione
+2 Forza fisica
-3 ad ognuna di quattro Caratteristiche a propria scelta */
  {
    id: "21805963684002002",
    nome: "Templare Sterminatore (Adepto)",
    ambientazioneRef: "341412111307502180",
    eta: "A",
    abilitaRef: [
      { id: "343968013220839637" },
      { id: "343960818077925581" },
      { id: "343968013220839634" },
      { id: "343968013220839629" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
      { id: "343961388801065165" },
      { id: "343961571675865293" },
      { id: "343968013220839638" },
    ],
  },
  /* Templare Sterminatore (Errante)
  Addestrare -cavallo-, Cavalcare, Lingua -latino-, Orientamento, Teologia, Uso -spada-.
+1 Coordinazione
+2 Forza fisica
-3 ad ognuna di quattro Caratteristiche a propria scelta */
  {
    id: "21805963684002003",
    nome: "Templare Sterminatore (Errante)",
    ambientazioneRef: "341412111307502180",
    eta: "N",
    abilitaRef: [
      { id: "343968013220839637" },
      { id: "343960818077925581" },
      { id: "343968013220839634" },
      { id: "343968013220839629" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
    ],
  },
  /* Templare Guardia nobile
  Addestrare -cavallo-, Cavalcare, Lingua -latino-, Orientamento, Teologia, Uso -spada-, Pronto Soccorso, Tattica, Uso -expiator-.
  Templare Adepto
Aspetto 4
Forza fisica 6
Esclusi con i Difetti Albino, Brutta cicatrice, Cattiva Reputazione, Fedina penale sporca, Grasso, Mutilazione, Nantismo/Gigantismo, Obeso, Puzzolente, Ricercato, Sdentato, Tatuaggio, Zoppia */
  {
    id: "21805963684002004",
    nome: "Templare Guardia Nobile",
    ambientazioneRef: "341412111307502180",
    eta: "A",
    abilitaRef: [
      { id: "343968013220839637" },
      { id: "343960818077925581" },
      { id: "343968013220839634" },
      { id: "343968013220839629" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
      { id: "343961388801065165" },
      { id: "343961571675865293" },
      { id: "343968013220839638" },
    ],
  },
  /* Templare Parisienne  (Adepto)
Addestrare -cavallo-, Cavalcare, Lingua -latino-, Orientamento, Teologia, Uso -spada-, Pronto Soccorso, Tattica, Uso -expiator-.
4 punti da dividere tra "Armi da fuoco" e "Uso -arma-" (pistola o fucile)
Guidare -due ruote- +1
Guidare -quattro ruote- +1
Orientamento +3
Lingua -francese- +3*/
  {
    id: "21805963684002005",
    nome: "Templare Parisienne (Adepto)",
    ambientazioneRef: "341412111307502180",
    eta: "A",
    abilitaRef: [
      { id: "343968013220839637" },
      { id: "343960818077925581" },
      { id: "343968013220839634" },
      { id: "343968013220839629" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
      { id: "343961388801065165" },
      { id: "343961571675865293" },
      { id: "343968013220839638" },
      { id: "343960624931274957" },
      { id: "343968013220839777" },
      { id: "343968013220839647" },
      { id: "343968013220832190" },
    ],
    numeroAbilitaLibera: 1,
    abilitaLiberaListRef: [
      { id: "343968013220839632" },
      { id: "343968013220844432" },
    ],
  },
  /* Templare Parisienne (Errante)
Addestrare -cavallo-, Cavalcare, Lingua -latino-, Orientamento, Teologia, Uso -spada-.
4 punti da dividere tra "Armi da fuoco" e "Uso -arma-" (pistola o fucile)
Guidare -due ruote- +1
Guidare -quattro ruote- +1
Orientamento +3
Lingua -francese- +3*/
  {
    id: "21805963684002006",
    nome: "Templare Parisienne (Errante)",
    ambientazioneRef: "341412111307502180",
    eta: "N",
    abilitaRef: [
      { id: "343968013220839637" },
      { id: "343960818077925581" },
      { id: "343968013220839634" },
      { id: "343968013220839629" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
      { id: "343960624931274957" },
      { id: "343968013220839777" },
      { id: "343968013220839647" },
      { id: "343968013220832190" },
    ],
    numeroAbilitaLibera: 1,
    abilitaLiberaListRef: [
      { id: "343968013220839632" },
      { id: "343968013220844432" },
    ],
  },
  /* Templare Pellegrino (Adepto)
Addestrare -cavallo-, Cavalcare, Lingua -latino-, Orientamento, Teologia, Uso -spada-, Pronto Soccorso, Tattica, Uso -expiator-.
3 punti da dividere tra "Armi da fuoco" e "Uso -arma-" con arma a scelta
Orientamento al Grado +3 o superiore
Correre +1 o superiore */
  {
    id: "21805963684002007",
    nome: "Templare Pellegrino (Adepto)",
    ambientazioneRef: "341412111307502180",
    eta: "A",
    abilitaRef: [
      { id: "343968013220839637" },
      { id: "343960818077925581" },
      { id: "343968013220839634" },
      { id: "343968013220839629" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
      { id: "343961388801065165" },
      { id: "343961571675865293" },
      { id: "343968013220839638" },
      { id: "343960624931274957" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Templare Pellegrino (Errante)
Addestrare -cavallo-, Cavalcare, Lingua -latino-, Orientamento, Teologia, Uso -spada-.
3 punti da dividere tra "Armi da fuoco" e "Uso -arma-" con arma a scelta
Orientamento al Grado +3 o superiore
Correre +1 o superiore */
  {
    id: "21805963684002008",
    nome: "Templare Pellegrino (Errante)",
    ambientazioneRef: "341412111307502180",
    eta: "N",
    abilitaRef: [
      { id: "343968013220839637" },
      { id: "343960818077925581" },
      { id: "343968013220839634" },
      { id: "343968013220839629" },
      { id: "343961628090302669" },
      { id: "343968013220839635" },
      { id: "343960624931274957" },
      { id: "343960377471533261v1" },
    ],
  },
  /* *** Templari - End *** */

  /* *** Trono del Crisantemo - Begin *** */
  /* Lavoratore e Artigiano
Ascoltare, Correre, Leggere e Scrivere, Rissa più due a scelta, in base alle occupazioni svolte, tra: Addestrare Animale, Agronomia, Artigianato -Specifico-, Naturalistica, Pescare, Pronto Soccorso, Raggirare, Uso -arma- */
  {
    id: "21005963684002000",
    nome: "Lavoratore e Artigiano",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    abilitaRef: [
      { id: "343960054820503757" },
      { id: "343960116705362125" },
      { id: "343960168760869069" },
      { id: "343960335239086285" },
    ],
    numeroAbilitaLibera: 2,
    abilitaLiberaListRef: [
      { id: "343960572802367693" },
      { id: "343960584919711949" },
      { id: "343960641759871181" },
      { id: "343961201334550733" },
      { id: "343961312311640269" },
      { id: "343961388801065165" },
      { id: "343961428784316621" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Capovillaggio (A)
Maturo o con pregio Kazoku
Impartire Ordini, Interrogare, Legge, Leggere e Scrivere, Oratoria, Politica ed Economia */
  {
    id: "21005963684002001",
    nome: "Capovillaggio",
    ambientazioneRef: "341412158384373964",
    eta: "A",
    abilitaRef: [
      { id: "343961040254402765" },
      { id: "343961114292256973" },
      { id: "343961138922258637" },
      { id: "343960168760869069" },
      { id: "343961275507671245" },
      { id: "343961340510994637" },
    ],
  },
  /* Becchino
Artigianato -Armatura dei Becchini-, Ascoltare, Correre, Osservare, Uso -arma-, Uso -Naginata-
Oppure Samurai o Samurai Esperto e sostituire un'Abilità con Uso -Naginata- */
  {
    id: "21005963684002002",
    nome: "Becchino",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    abilitaRef: [
      { id: "210068013220839600" },
      { id: "343960054820503757" },
      { id: "343960116705362125" },
      { id: "343960281846644941" },
      { id: "343960377471533261v1" },
      { id: "210068013220839606" },
    ],
  },
  /* Becchino Maestro (A)
Acrobazia, Arte Marziale -Naginatajiutsu-, Arte Marziale -Rissa- */
  {
    id: "21005963684002003",
    nome: "Becchino Maestro",
    ambientazioneRef: "341412158384373964",
    eta: "A",
    abilitaRef: [
      { id: "210068013220839600" },
      { id: "343960054820503757" },
      { id: "343960116705362125" },
      { id: "343960281846644941" },
      { id: "343960377471533261v1" },
      { id: "210068013220839606" },
      { id: "343960552491450573" },
      { id: "210068013220839603" },
      { id: "210068013220839604" },
    ],
  },
  /* Ladruncolo
Borseggiare, Correre, Intrufolarsi, Perquisire, Raggirare, Scassinare */
  {
    id: "21005963684002004",
    nome: "Ladruncolo",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    abilitaRef: [
      { id: "343960724060504269" },
      { id: "343960116705362125" },
      { id: "343960144603775181" },
      { id: "343960305710137549" },
      { id: "343961428784316621" },
      { id: "343961463669391565" },
    ],
  },
  /* Mercante itinerante
Addestrare Animale, Cavalcare, Leggere e Scrivere, Mercanteggiare, Orientamento, Uso -arma- */
  {
    id: "21005963684002005",
    nome: "Mercante itinerante",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    abilitaRef: [
      { id: "343960572802367693" },
      { id: "343960818077925581" },
      { id: "343960168760869069" },
      { id: "343960225473102029" },
      { id: "343968013220839629" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Mercante di Successo (A)
Maturo o con pregio Kazoku
Artigianato -Specifico-, Impartire Ordini, Legge */
  {
    id: "21005963684002006",
    nome: "Mercante di Successo",
    ambientazioneRef: "341412158384373964",
    eta: "A",
    abilitaRef: [
      { id: "343960572802367693" },
      { id: "343960818077925581" },
      { id: "343960168760869069" },
      { id: "343960225473102029" },
      { id: "343968013220839629" },
      { id: "343960377471533261v1" },
      { id: "343960641759871181" },
      { id: "343961040254402765" },
      { id: "343961138922258637" },
    ],
  },
  /* Samurai
Interrogare, Perquisire, Seguire Tracce, Uso -arma-, Uso -arma-, Uso -Katana- */
  {
    id: "21005963684002007",
    nome: "Samurai",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343960305710137549" },
      { id: "343960353026080973" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
      { id: "210068013220839605" },
    ],
  },
  /* Samurai Esperto (A)
Maturo o con pregio Kazoku, deve avere Pregio Bushido
Arte Marziale -Arma-, Arte Marziale -Katana-, Arte Marziale -Rissa- */
  {
    id: "21005963684002008",
    nome: "Samurai Esperto",
    ambientazioneRef: "341412158384373964",
    eta: "A",
    abilitaRef: [
      { id: "210068013220839601" },
      { id: "210068013220839602" },
      { id: "210068013220839604" },
      { id: "343961114292256973" },
      { id: "343960305710137549" },
      { id: "343960353026080973" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
      { id: "210068013220839605" },
    ],
  },
  /* Sacerdote Shintoista
Esorcismo, Naturalistica, Occultismo, Oratoria, Storia e filosofia, Teologia */
  {
    id: "21005963684002009",
    nome: "Sacerdote Shintoista",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    abilitaRef: [
      { id: "343960914857296077" },
      { id: "343961201334550733" },
      { id: "343961225310240973" },
      { id: "343961275507671245" },
      { id: "343961508662739149" },
      { id: "343961628090302669" },
    ],
  },
  /* Monaco Buddista
Leggere e Scrivere, Oratoria, Persuadere, Politica ed Economia, Storia e filosofia, Teologia */
  {
    id: "21005963684002010",
    nome: "Monaco Buddista",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    abilitaRef: [
      { id: "343960168760869069" },
      { id: "343961275507671245" },
      { id: "343960318838309069" },
      { id: "343961340510994637" },
      { id: "343961508662739149" },
      { id: "343961628090302669" },
    ],
  },
  /* Sohei (A)
Arte Marziale -Arma-, Leggere e Scrivere, Oratoria, Persuadere, Politica ed Economia, Storia e filosofia, Teologia, Uso -arma-, Uso -arma- */
  {
    id: "21005963684002011",
    nome: "Sohei",
    ambientazioneRef: "341412158384373964",
    eta: "A",
    abilitaRef: [
      { id: "210068013220839601" },
      { id: "343960168760869069" },
      { id: "343961275507671245" },
      { id: "343960318838309069" },
      { id: "343961340510994637" },
      { id: "343961508662739149" },
      { id: "343961628090302669" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* Shinobi Rei
Acrobazia, Borseggiare, Intrufolarsi, Scassinare, Recitare, Uso -Shinobi-to- */
  {
    id: "21005963684002012",
    nome: "Shinobi Rei",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    abilitaRef: [
      { id: "343960552491450573" },
      { id: "343960724060504269" },
      { id: "343960144603775181" },
      { id: "343961463669391565" },
      { id: "343961444479402189" },
      { id: "210068013220839607" },
    ],
  },
  /* Shinobi
Età tra i 20 e 25 anni, ma Maturo
Può accedere a Via della Mano sinistra 
Acrobazia, Arte Marziale -Arma-, Arte Marziale -Rissa-, Borseggiare, Intrufolarsi, Scassinare, Recitare, Uso -arma-, Uso -Shinobi-to-  */
  {
    id: "21005963684002013",
    nome: "Shinobi",
    ambientazioneRef: "341412158384373964",
    eta: "A",
    abilitaRef: [
      { id: "343960552491450573" },
      { id: "210068013220839601" },
      { id: "210068013220839604" },
      { id: "343960724060504269" },
      { id: "343960144603775181" },
      { id: "343961463669391565" },
      { id: "343961444479402189" },
      { id: "343960377471533261v1" },
      { id: "210068013220839607" },
    ],
  },
  /* Kunochi (A)
Età tra 16 e 30 anni, ma Maturo. Può accedere a Via della Mano sinistra 
Acrobazia, Arte Marziale -Arma-, Arte Marziale -Rissa-, Chimica F-arma-ceutica, Intrufolarsi, Raggirare, Recitare, Uso -arma-, Uso -arma- */
  {
    id: "21005963684002014",
    nome: "Kunochi",
    ambientazioneRef: "341412158384373964",
    eta: "A",
    abilitaRef: [
      { id: "343960552491450573" },
      { id: "210068013220839601" },
      { id: "210068013220839604" },
      { id: "343960841070051533" },
      { id: "343960144603775181" },
      { id: "343961428784316621" },
      { id: "343961444479402189" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* Yakuza, Membro giovane
Obbligo Difetto Tatuaggio 
Armi da Fuoco, Gioco d'azzardo, Mercanteggiare, Persuadere, Rissa, Uso -arma- */
  {
    id: "21005963684002015",
    nome: "Yakuza, Membro giovane",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960994335162573" },
      { id: "343960225473102029" },
      { id: "343960318838309069" },
      { id: "343960335239086285" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Yakuza, Kumicho (A)
Obbligo Difetto Tatuaggio
Armi da Fuoco, Gioco d'azzardo, Impartire Ordini, Mercanteggiare, Persuadere, Politica ed economia, Rissa, Strategia, Uso -arma- */
  {
    id: "21005963684002016",
    nome: "Yakuza, Kumicho",
    ambientazioneRef: "341412158384373964",
    eta: "A",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960994335162573" },
      { id: "343961040254402765" },
      { id: "343960225473102029" },
      { id: "343960318838309069" },
      { id: "343961340510994637" },
      { id: "343960335239086285" },
      { id: "343961521508843725" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Sanguisuga
Guidare -Veicolo- o Cavalcare, Perquisire, Rissa, Torturare, Uso -arma-, Uso -arma- */
  {
    id: "21005963684002017",
    nome: "Sanguisuga",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    abilitaRef: [
      { id: "343960305710137549" },
      { id: "343960335239086285" },
      { id: "343961683497058509" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    numeroAbilitaLibera: 1,
    abilitaLiberaListRef: [
      { id: "343960818077925581" },
      { id: "343960130942927053" },
    ],
  },
  /* Ronin Inscius
Creazione Ronin: creare un pg, poi estrarre un tarocco, se è Diavolo si è un Diabolicus, altrimenti Inscius.
Pescare due Arcani Maggiori per le ferite mortali.
Scegliere se prendere Bushido
  
-1 Memoria
-1 Equilibrio Mentale
Aumentare malus ad Aspetto e portare Equilibrio Mentale a -3 se uno dei colpi mortali è stato portato alla testa.
Inscius ha 7 punti da inserire tra:
Autocontrollo, Arte Marziale -Arma-, Uso -arma-
Autocontrollo deve essere 1 o superiore
 */
  {
    id: "21005963684002018",
    nome: "Ronin - Inscius",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    professionePrecedente: true,
    abilitaRef: [
      { id: "210068013220839608" },
      { id: "210068013220839601" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Ronin - Diabolicus
Creazione Ronin: creare un pg, poi estrarre un tarocco, se è Diavolo si è un Diabolicus, altrimenti Inscius.
Pescare due Arcani Maggiori per le ferite mortali.
Scegliere il dono.
Scegliere se prendere Bushido.
Abilità aggiuntive da Ronin:
Autocontrollo, Arte Marziale -Arma-, Uso -arma-
Autocontrollo deve essere 1 o superiore
Diabolicus ha 1 punto da spendere.

+2 Intuito
+3 Memoria
+2 Percezione
-1 Aspetto
+3 Comando
+2 Creatività
+2 Socievolezza
+3 Coordinazione
+4 Forza Fisica
+2 Mira
+4 Affinità Occulta
-3 Equilibrio Mentale
Volontà 10 */
  {
    id: "21005963684002019",
    nome: "Ronin - Diabolicus",
    ambientazioneRef: "341412158384373964",
    eta: "N",
    professionePrecedente: true,
    abilitaRef: [
      { id: "210068013220839608" },
      { id: "210068013220839601" },
      { id: "343960377471533261v1" },
    ],
  },
  /* *** Trono del Crisantemo - End *** */

  /* *** IV Reich - Begin *** */
  /* Avvocato privato
Interrogare, Legge, Leggere e Scrivere, Persuadere, Politica ed Economia, Raggirare, Seguire tracce */
  {
    id: "20405963684002000",
    nome: "Avvocato privato",
    ambientazioneRef: "341411954837946572",
    eta: "N",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343961138922258637" },
      { id: "343960168760869069" },
      { id: "343960318838309069" },
      { id: "343961340510994637" },
      { id: "343961428784316621" },
      { id: "343960353026080973" },
    ],
  },
  /* Mercante itinerante
Cavalcare o Guidare -veicolo-, Lingua -specifica- o Leggere e Scrivere, Mercanteggiare, Orientamento, Raggirare, Uso -arma- */
  {
    id: "20405963684002001",
    nome: "Mercante itinerante",
    ambientazioneRef: "341411954837946572",
    eta: "N",
    abilitaRef: [
      { id: "343960225473102029" },
      { id: "343968013220839629" },
      { id: "343961428784316621" },
      { id: "343960377471533261v1" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960818077925581" },
          { id: "343960130942927053" },
        ],
      },
      {
        idList: 2,
        listAbilita: [
          { id: "343960188611461325" },
          { id: "343960168760869069" },
        ],
      },
    ],
  },
  /* Agente della Kripo (Kripo Agent) (A)
Guidare -veicolo-, Interrogare, Legge, Perquisire, Seguire tracce, Uso -arma-, Uso -arma-.
Tre a scelta tra: Armi da Fuoco, Biologia, Chimica farmaceutica, Fisica, Fotografia, Intrufolarsi, Occultismo o Pronto Soccorso */
  {
    id: "20405963684002002",
    nome: "Agente della Kripto (Kripto Agent)",
    ambientazioneRef: "341411954837946572",
    eta: "A",
    abilitaRef: [
      { id: "343960130942927053" },
      { id: "343961114292256973" },
      { id: "343961138922258637" },
      { id: "343960305710137549" },
      { id: "343960353026080973" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    numeroAbilitaLibera: 3,
    abilitaLiberaListRef: [
      { id: "343960624931274957" },
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960977172070605" },
      { id: "343960945631953101" },
      { id: "343960144603775181" },
      { id: "343961225310240973" },
      { id: "343961388801065165" },
    ],
  },
  /* Agente Speciale Kripo (A)
    Abilità professione precedente, Seguire tracce, Uso -arma-, Uso -arma-. */
  {
    id: "20405963684002003",
    nome: "Agente Speciale Kripo",
    ambientazioneRef: "341411954837946572",
    eta: "A",
    professionePrecedente: true,
    abilitaRef: [
      { id: "343960353026080973" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* Ispettore della Kripo (Oberinspektor) (E)
Guidare -veicolo-, Impartire Ordini, Interrogare, Legge, Perquisire, Politica ed Economia, Seguire tracce, Tattica, Uso -arma-, Uso -arma-.
Tre a scelta tra: Armi da Fuoco, Biologia, Chimica farmaceutica, Fisica, Fotografia, Intrufolarsi, Occultismo,  Pronto Soccorso */
  {
    id: "20405963684002004",
    nome: "Ispettore della Kripo (Oberinspektor)",
    ambientazioneRef: "341411954837946572",
    eta: "E",
    abilitaRef: [
      { id: "343960130942927053" },
      { id: "343961040254402765" },
      { id: "343961114292256973" },
      { id: "343961138922258637" },
      { id: "343960305710137549" },
      { id: "343961340510994637" },
      { id: "343960353026080973" },
      { id: "343961571675865293" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    numeroAbilitaLibera: 3,
    abilitaLiberaListRef: [
      { id: "343960624931274957" },
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960977172070605" },
      { id: "343960945631953101" },
      { id: "343960818077925581" },
      { id: "343961225310240973" },
      { id: "343961388801065165" },
    ],
  },
  /* Agente della Feuerbrigade (Feuer Agent)
Arrampicarsi o Ascoltare, Guidare -veicolo- o Osservare, Pronto Soccorso o Lanciare, Impartire Ordini, Uso -arma-, Uso -arma-.
Tre a scelta tra: Armi da Fuoco, Biologia, Chimica farmaceutica, Fisica, Fotografia, Intrufolarsi, Occultismo,  Pronto Soccorso */
  {
    id: "20405963684002005",
    nome: "Agente della Feuerbrigade (Feuer Agent)",
    ambientazioneRef: "341411954837946572",
    eta: "N",
    abilitaRef: [
      { id: "343961040254402765" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960031658508493" },
          { id: "343960054820503757" },
        ],
      },
      {
        idList: 2,
        listAbilita: [
          { id: "343960130942927053" },
          { id: "343960281846644941" },
        ],
      },
      {
        idList: 3,
        listAbilita: [
          { id: "343961388801065165" },
          { id: "343960154959511757" },
        ],
      },
    ],
    numeroAbilitaLibera: 3,
    abilitaLiberaListRef: [
      { id: "343960624931274957" },
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960977172070605" },
      { id: "343960945631953101" },
      { id: "343960818077925581" },
      { id: "343961225310240973" },
      { id: "343961388801065165" },
    ],
  },
  /* Ispettore della Feuerbrigade (Feuerinspektor) (A)
Arrampicarsi o Ascoltare, Guidare -veicolo- o Osservare, Pronto Soccorso o Lanciare, Impartire Ordini, Legge, Politica ed Economia, Tattica, Uso -arma-, Uso -arma-.
Tre a scelta tra: Armi da Fuoco, Biologia, Chimica farmaceutica, Fisica, Fotografia, Intrufolarsi, Occultismo,  Pronto Soccorso */
  {
    id: "20405963684002006",
    nome: "Ispettore della Feuerbrigade (Feuerinspektor)",
    ambientazioneRef: "341411954837946572",
    eta: "A",
    abilitaRef: [
      { id: "343961040254402765" },
      { id: "343961138922258637" },
      { id: "343961340510994637" },
      { id: "343961571675865293" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960031658508493" },
          { id: "343960054820503757" },
        ],
      },
      {
        idList: 2,
        listAbilita: [
          { id: "343960130942927053" },
          { id: "343960281846644941" },
        ],
      },
      {
        idList: 3,
        listAbilita: [
          { id: "343961388801065165" },
          { id: "343960154959511757" },
        ],
      },
    ],
    numeroAbilitaLibera: 3,
    abilitaLiberaListRef: [
      { id: "343960624931274957" },
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343960977172070605" },
      { id: "343960945631953101" },
      { id: "343960818077925581" },
      { id: "343961225310240973" },
      { id: "343961388801065165" },
    ],
  },
  /* Agente della Sipo (Sicherheitspolizei) (E)
Armi da Fuoco, Fotografia, Guidare -veicolo-, Interrogare, Intrufolarsi, Perquisire, Pronto Soccorso, Recitare, Scassinare, Seguire tracce, Uso -arma-, Uso -arma- */
  {
    id: "20405963684002007",
    nome: "Agente della Sipo (Sicherheitspolizei)",
    ambientazioneRef: "341411954837946572",
    eta: "E",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960945631953101" },
      { id: "343960130942927053" },
      { id: "343961114292256973" },
      { id: "343960144603775181" },
      { id: "343960305710137549" },
      { id: "343961388801065165" },
      { id: "343961444479402189" },
      { id: "343961463669391565" },
      { id: "343960353026080973" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* *** IV Reich - End *** */
  /* *** Regno di Osiride - Begin *** */
  /* Topo del Deserto - Ufficiale
Artiglieria, Ascoltare, Demolizione, Guidare -veicolo-, Impartire Ordini, Interrogare, Orientamento, Osservare, Tattica, Uso -Mazza-, Uso -arma-. */
  {
    id: "20705963684002001",
    nome: "Topo del Deserto - Ufficiale",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960656041476301" },
      { id: "343960054820503757" },
      { id: "343960868252287181" },
      { id: "343960130942927053" },
      { id: "343961040254402765" },
      { id: "343961114292256973" },
      { id: "343968013220839629" },
      { id: "343960281846644941" },
      { id: "343961571675865293" },
      { id: "207068013220839603" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Topo del Deserto - Sottoufficiale
Artiglieria, Ascoltare, Guidare -veicolo-, Interrogare, Lingua -ieratico-, Orientamento, Osservare, Uso -Mazza-, Uso -arma-.  */
  {
    id: "20705963684002002",
    nome: "Topo del Deserto - Sottoufficiale",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960656041476301" },
      { id: "343960054820503757" },
      { id: "343960130942927053" },
      { id: "343961114292256973" },
      { id: "207068013220839600" },
      { id: "343968013220839629" },
      { id: "343960281846644941" },
      { id: "207068013220839603" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Topo del Deserto - Soldato Semplice
Acrobazia, Ascoltare, Orientamento, Osservare, Perquisire, Uso -Mazza-, Uso -arma-.  */
  {
    id: "20705963684002003",
    nome: "Topo del Deserto - Soldato Semplice",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960552491450573" },
      { id: "343968013220839637" },
      { id: "343960054820503757" },
      { id: "343968013220839629" },
      { id: "343960281846644941" },
      { id: "343960305710137549" },
      { id: "207068013220839603" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Servi di Anubi
  Interrogare, Perquisire, Pronto Soccorso, Rissa, Uso -Fauci di Anubi-, Uso -spada- */
  {
    id: "207059636840020027",
    nome: "Servi di Anubi",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343960305710137549" },
      { id: "343961388801065165" },
      { id: "343960335239086285" },
      { id: "207068013220839601" },
      { id: "343968013220839635" },
    ],
  },
  /* Ispettore Capo
Impartire Ordini, Interrogare, Intrufolarsi, Perquisire, Politica ed Economia, Seguire tracce, Uso -pistola-, Uso -arma-*/
  {
    id: "2070596368400200472",
    nome: "Ispettore Capo",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343961040254402765" },
      { id: "343961114292256973" },
      { id: "343960144603775181" },
      { id: "343960305710137549" },
      { id: "343961340510994637" },
      { id: "343960353026080973" },
      { id: "343968013220844432" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Ispettore
Interrogare, Intrufolarsi, Perquisire, Seguire tracce, Uso -arma-, Uso -arma-*/
  {
    id: "2070596368400200489",
    nome: "Ispettore",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343961114292256973" },
      { id: "343960144603775181" },
      { id: "343960305710137549" },
      { id: "343960353026080973" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* Tecnico di Polizia
Biologia, Erboristeria, Fotografia, Intrufolarsi, Occultismo, Perquisire, Pronto Soccorso, Scassinare, Uso -arma- */
  {
    id: "20705963684002004123",
    nome: "Tecnico di Polizia",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343966802788745421" },
      { id: "343960897696301261" },
      { id: "343960945631953101" },
      { id: "343960144603775181" },
      { id: "343961225310240973" },
      { id: "343960305710137549" },
      { id: "343961388801065165" },
      { id: "343961463669391565" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Soldato
Artiglieria, Correre, Intrufolarsi, Uso -fucile-, Uso -arma- */
  {
    id: "20705963684002005",
    nome: "Soldato",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960656041476301" },
      { id: "343960116705362125" },
      { id: "343960144603775181" },
      { id: "343968013220839632" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Soldato Coscritto
Artiglieria, Correre, Intrufolarsi, Uso -fucile-, Uso -arma-
Selezionare una a scelta tra:
Addestrare, Agronomia, Artigianato, Cacciare, Cantare, Cavalcare, Disegnare, Erboristeria, Guidare, Mercanteggiare, Pescare, Pilotare, Recitare, Scolpire, Suonare
*/
  {
    id: "20705963684002006",
    nome: "Soldato Coscritto",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960656041476301" },
      { id: "343960116705362125" },
      { id: "343960144603775181" },
      { id: "343968013220839632" },
      { id: "343960377471533261v1" },
    ],
    numeroAbilitaLibera: 1,
    abilitaLiberaListRef: [
      { id: "343960572802367693" },
      { id: "343960584919711949" },
      { id: "343960641759871181" },
      { id: "343960737749663949" },
      { id: "343960798508351693" },
      { id: "343960818077925581" },
      { id: "343960881357390029" },
      { id: "343960897696301261" },
      { id: "343960130942927053" },
      { id: "343960225473102029" },
      { id: "343961312311640269" },
      { id: "343961323029135565" },
      { id: "343961444479402189" },
      { id: "343961475369402573" },
      { id: "343961548035719373" },
    ],
  },
  /* Sergente
Impartire Ordini, Tattica, Uso -arma-, Uso -arma- */
  {
    id: "20705963684002007",
    nome: "Sergente",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343961040254402765" },
      { id: "343961571675865293" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* Tenente
Impartire Ordini, Strategia, Tattica, Uso -khopesch-, Uso -arma- */
  {
    id: "20705963684002008",
    nome: "Tenente",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343961040254402765" },
      { id: "343961521508843725" },
      { id: "343961571675865293" },
      { id: "207068013220839602" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Carrista
Artiglieria, Guidare -cingolato-, Tattica, Uso -khopesch-, Uso -arma- */
  {
    id: "20705963684002009",
    nome: "Carrista",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960656041476301" },
      { id: "343968013220839631" },
      { id: "343961571675865293" },
      { id: "207068013220839602" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Medjai
Artiglieria, Guidare -cingolato-, Intrufolarsi, Perquisire, Uso -spada-, Uso -arma-.
Un'abilità di copertura a scelta (Agronomia, Artigianato, Cacciare, Pescare,...)
Addestrare, Agronomia, Artigianato, Cacciare, Cantare, Cavalcare, Disegnare, Erboristeria, Guidare, Mercanteggiare, Pescare, Pilotare, Recitare, Scolpire, Suonare
*/
  {
    id: "20705963684002010",
    nome: "Medjai",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960656041476301" },
      { id: "343968013220839631" },
      { id: "343960144603775181" },
      { id: "343960305710137549" },
      { id: "343968013220839635" },
      { id: "343960377471533261v1" },
    ],
    numeroAbilitaLibera: 1,
    abilitaLiberaListRef: [
      { id: "343960572802367693" },
      { id: "343960584919711949" },
      { id: "343960641759871181" },
      { id: "343960737749663949" },
      { id: "343960798508351693" },
      { id: "343960818077925581" },
      { id: "343960881357390029" },
      { id: "343960897696301261" },
      { id: "343960130942927053" },
      { id: "343960225473102029" },
      { id: "343961312311640269" },
      { id: "343961323029135565" },
      { id: "343961444479402189" },
      { id: "343961475369402573" },
      { id: "343961548035719373" },
    ],
  },
  /* Mohar
Artiglieria, Guidare -cingolato-, Impartire Ordini, Intrufolarsi, Strategia, Tattica, Uso -spada-, Uso -arma-.*/
  {
    id: "20705963684002011",
    nome: "Mohar",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960656041476301" },
      { id: "343968013220839631" },
      { id: "343961040254402765" },
      { id: "343960144603775181" },
      { id: "343961521508843725" },
      { id: "343961571675865293" },
      { id: "343968013220839635" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Mujaheddin
Cavalcare, Impartire Ordini, Pronto Soccorso, Tattica, Uso -spada-, Uso -arma-.*/
  {
    id: "20705963684002012",
    nome: "Mujaheddin",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960818077925581" },
      { id: "343961040254402765" },
      { id: "343961388801065165" },
      { id: "343961571675865293" },
      { id: "343968013220839635" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Esploratore
Ascoltare, Cavalcare, Orientamento, Osservare, Perquisire, Seguire tracce, Uso -spada-, Uso -arma-.*/
  {
    id: "20705963684002013",
    nome: "Esploratore",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960054820503757" },
      { id: "343960818077925581" },
      { id: "343968013220839629" },
      { id: "343960281846644941" },
      { id: "343960305710137549" },
      { id: "343960353026080973" },
      { id: "343968013220839635" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Predone
Artiglieria, Cavalcare, Demolizione, Guidare -veicolo-, Orientamento, Uso -spada-, Uso -arma-, Uso -arma-*/
  {
    id: "20705963684002014",
    nome: "Predone",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960656041476301" },
      { id: "343960818077925581" },
      { id: "343960868252287181" },
      { id: "343960130942927053" },
      { id: "343968013220839629" },
      { id: "343968013220839635" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* Portatore di Fiamma
Cavalcare, Guidare -veicolo-, Impartire Ordini, Pronto Soccorso, Tattica, Uso -spada-, Uso -arma-*/
  {
    id: "20705963684002015",
    nome: "Portatore di Fiamma",
    ambientazioneRef: "341412130688336076",
    eta: "N",
    abilitaRef: [
      { id: "343960818077925581" },
      { id: "343960130942927053" },
      { id: "343961040254402765" },
      { id: "343961388801065165" },
      { id: "343961571675865293" },
      { id: "343968013220839635" },
      { id: "343960377471533261v1" },
    ],
  },
  /* *** Regno di Osiride - End *** */

  /* *** Cacciatori di Morti - Start *** */
  /* Capobranco
Addestrare -cane-, Armi da Fuoco, Cacciare, Naturalistica, Uso -arma-, Uso -arma- */
  {
    id: "21705963684002001",
    nome: "Capobranco",
    ambientazioneRef: "341412111307502170",
    eta: "N",
    abilitaRef: [
      { id: "217068013220839600" },
      { id: "343960624931274957" },
      { id: "343960737749663949" },
      { id: "343961201334550733" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
  },
  /* Esperto di Morti
Armi da Fuoco, Cacciare, Guidare -veicolo- o Cavalcare, Riconoscimento, Uso -arma-, Uso -arma- */
  {
    id: "21705963684002002",
    nome: "Esperto di Morti",
    ambientazioneRef: "341412111307502170",
    eta: "N",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960737749663949" },
      { id: "217068013220839601" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960130942927053" },
          { id: "343960818077925581" },
        ],
      },
    ],
  },
  /* Graduato
Armi da Fuoco, Cacciare, Guidare -veicolo- o Cavalcare, Impartire Ordini, Pronto Soccorso, Strategia, Tattica, Uso -arma-, Uso -arma- */
  {
    id: "21705963684002003",
    nome: "Graduato",
    ambientazioneRef: "341412111307502170",
    eta: "A",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960737749663949" },
      { id: "343961040254402765" },
      { id: "343961388801065165" },
      { id: "343961521508843725" },
      { id: "343961571675865293" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    abilitaSceltaRef: [
      {
        idList: 1,
        listAbilita: [
          { id: "343960130942927053" },
          { id: "343960818077925581" },
        ],
      },
    ],
  },
  /* Guida
Cacciare, Correre, Intrufolarsi, Naturalistica, Orientamento, Osservare, Perquisire, Seguire tracce, Uso -arma- */
  {
    id: "21705963684002004",
    nome: "Guida",
    ambientazioneRef: "341412111307502170",
    eta: "A",
    abilitaRef: [
      { id: "343960737749663949" },
      { id: "343960116705362125" },
      { id: "343960144603775181" },
      { id: "343961201334550733" },
      { id: "343968013220839629" },
      { id: "343960281846644941" },
      { id: "343960305710137549" },
      { id: "343960353026080973" },
      { id: "343960377471533261v1" },
    ],
  },
  /* Necrologo
Biologia, Chimica farmaceutica, Medicina e chirurgia, Occultismo, Teologia, Uso -arma- . */
  {
    id: "21705963684002005",
    nome: "Necrologo",
    ambientazioneRef: "341412111307502170",
    eta: "N",
    abilitaRef: [
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343961188338499789" },
      { id: "343961225310240973" },
      { id: "343961628090302669" },
      { id: "343960377471533261v1" },
    ],
    magiaRituale: true,
  },
  /* Necrologo Esperto
Armi da Fuoco, Biologia, Chimica farmaceutica, Medicina e chirurgia, Occultismo, Riconoscimento, Teologia, Uso -arma-, Uso -arma- . */
  {
    id: "21705963684002006",
    nome: "Necrologo Esperto",
    ambientazioneRef: "341412111307502170",
    eta: "A",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343966802788745421" },
      { id: "343960841070051533" },
      { id: "343961188338499789" },
      { id: "343961225310240973" },
      { id: "217068013220839601" },
      { id: "343961628090302669" },
      { id: "343960377471533261v1" },
      { id: "343960377471533261v2" },
    ],
    magiaRituale: true,
  },
  /* *** Cacciatori di Morti - End *** */
  /* *** I Dossier dell'Impossibile - Start *** */
  /* Architetto
Demolizione, Disegnare, Fisica, Ingegneria, Legge, Politica ed Economia. */
  {
    id: "22205963684002001",
    nome: "Architetto",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [
      { id: "343960868252287181" },
      { id: "343960881357390029" },
      { id: "343960977172070605" },
      { id: "343961063271694541" },
      { id: "343961138922258637" },
      { id: "343961340510994637" },
    ],
    sferaInfluenza: "Burocrazia dei Borghi, maestranze di vario tipo.",
  },
  /* Attore o Ballerino
Acrobazia, Ballare, Cantare, Letteratura ed Arte, Recitare, Suonare.
Prerequisito: Difetto Omossessuale per Maschio, Cattiva reputazione per Femmina */
  {
    id: "22205963684002002",
    nome: "Attore o Ballerino",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [
      { id: "343960552491450573" },
      { id: "343960670392287437" },
      { id: "343960798508351693" },
      { id: "343961163498782925" },
      { id: "343961444479402189" },
      { id: "343961548035719373" },
    ],
    difettiRef: [
      { id: "341974081863680204", sesso: "M" },
      { id: "341973280195870924", sesso: "F" },
    ],
    sferaInfluenza: "Ammiratori segreti.",
  },
  /* Avvocato
Falsificazione, Interrogare, Legge, Leggere e Scrivere, Oratoria, Persuadere.
Prerequisito: Uno tra i seguenti pregi: Parlantina, Ricco, Saper mentire, Voce impostata.
Ha 1 Punto Difetto in meno rispetto a quanto risulterebbe dai suoi pregi. */
  {
    id: "22205963684002003",
    nome: "Avvocato",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [
      { id: "343960932485955789" },
      { id: "343961114292256973" },
      { id: "343961040254402765" },
      { id: "343960168760869069" },
      { id: "343961275507671245" },
      { id: "343960318838309069" },
    ],
    pregiRef: [
      { id: "341972591715549388" },
      { id: "341972670853677260" },
      { id: "341972702222876876" },
      { id: "341972854222356684" },
    ],
    sferaInfluenza: "Clienti soddisfatti.",
  },
  /* Bancario
Falsificazione, Legge, Mercanteggiare, Persuadere. */
  {
    id: "22205963684002004",
    nome: "Bancario",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [
      { id: "343960932485955789" },
      { id: "343961138922258637" },
      { id: "343960225473102029" },
      { id: "343960318838309069" },
    ],
    sferaInfluenza:
      "Piccoli risparmiatore e piccoli investitori. Almeno un cliente danaroso.",
  },
  /* Bibliotecario
Abilità prestampate e quelle del Passato . */
  {
    id: "22205963684002005",
    nome: "Bibliotecario",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [],
    pregiRef: [{ id: "341972630388080844" }],
    difettiSceltaRef: [{ id: "341974205674291404" }],
    prestampateProfessione: true,
    sferaInfluenza: "Libri.",
  },
  /* Casalinga
Artigianato -cuoco-, Mercanteggiare. Abilità prestampate e quelle del Passato. */
  {
    id: "22205963684002006",
    nome: "Casalinga",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [{ id: "222068013220839600" }, { id: "343960225473102029" }],
    prestampateProfessione: true,
    sferaInfluenza: "Altre casalinghe o casalinghi.",
  },
  /* Calzolaio, Parrucchiere, Sarto...
Artigianato specifico, Mercanteggiare. */
  {
    id: "22205963684002007",
    nome: "Calzolaio, Parrucchiere, Sarto...",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [{ id: "343960641759871181" }, { id: "343960225473102029" }],
    sferaInfluenza: "Gente del Borgo o del quartiere in caso di città grandi.",
  },
  /* Facchino /Muratore 
Demolizione. Abilità prestampate e quelle del Passato. 
Forza fisica +1 a PG con 4 o meno in tale Caratteristica.
*/
  {
    id: "22205963684002008",
    nome: "Facchino /Muratore ",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [{ id: "343960868252287181" }],
    prestampateProfessione: true,
    sferaInfluenza: "Piccoli criminali.",
  },
  /* Negoziante
Mercanteggiare, Persuadere, Raggirare. */
  {
    id: "22205963684002009",
    nome: "Negoziante",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [
      { id: "343960225473102029" },
      { id: "343960318838309069" },
      { id: "343961428784316621" },
    ],
    sferaInfluenza: "Gente del Borgo o del quartiere in caso di città grandi.",
  },
  /* Nullafacente
Abilità prestampate e quelle del Passato.
Prerequisito: Difetto Cattiva Reputazione.
Può avere il Pregio Sopravvivenza. */
  {
    id: "22205963684002010",
    nome: "Nullafacente",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [],
    difettiRef: [{ id: "341973280195870924" }],
    pregiSceltaRef: [{ id: "341972738066350284" }],
    prestampateProfessione: true,
    sferaInfluenza: "Nessuna.",
  },
  /* Occultista
Erboristeria, Esorcismo, Impartire Ordini, Occultismo, Persuadere, Raggirare.
Può avere il Pregio Iniziazione Occulta, pagandolo 2 Difetti. */
  {
    id: "22205963684002011",
    nome: "Occultista",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [
      { id: "343960897696301261" },
      { id: "343960914857296077" },
      { id: "343961040254402765" },
      { id: "343961225310240973" },
      { id: "343960318838309069" },
      { id: "343961428784316621" },
    ],
    pregiSceltaRef: [{ id: "341972460271304908" }],
    sferaInfluenza:
      "Se ha Iniziazione Occulta, avrà libri o conoscenze che possono aiutare alcune indagini. Altrimenti solo una serie di squinternati.",
  },
  /* Operaio
Abilità prestampate e quelle del Passato . */
  {
    id: "22205963684002012",
    nome: "Operaio",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [],
    prestampateProfessione: true,
    sferaInfluenza:
      "Lavoratori nel proprio reparto. Sa procurarsi parti meccaniche, trafugandole dalla fabbrica in cui lavora.",
  },
  /* Idraulico/Imbianchino/Elettricista/Giardiniere
Artigianato specifico, Mercanteggiare.
*/
  {
    id: "22205963684002013",
    nome: "Idraulico/Imbianchino/Elettricista/Giardiniere",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [{ id: "343960641759871181" }, { id: "343960225473102029" }],
    sferaInfluenza:
      "Clienti affezionati, di cui conoscono abitazioni o fabbricati in cui hanno lavorato. Conoscono i Muratori. Hanno partecipato all'edificazione di immobili in zona.",
  },
  /* Cameriere di città
Abilità prestampate e quelle del Passato.
Camerieri di città hanno il Pregio Comportamento Educato. */
  {
    id: "22205963684002014",
    nome: "Cameriere",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [],
    pregiRef: [{ id: "341972247204856012" }],
    prestampateProfessione: true,
    sferaInfluenza: "Ubriaconi.",
  },
  /* Cameriere di Borgo
Abilità prestampate e quelle del Passato.
Camerieri dei Borghi possono avere il Pregio Dote Innata solo ottenere Abilità Artigianato -cuoco-. */
  {
    id: "22205963684002015",
    nome: "Cameriere",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [],
    pregiSceltaRef: [{ id: "341972352170459340" }],
    prestampateProfessione: true,
    sferaInfluenza: "Ubriaconi.",
  },
  /* Scrittore
Leggere e Scrivere, Letteratura ed Arte, Mercanteggiare, Politica ed Economia, Storia e filosofia. */
  {
    id: "22205963684002016",
    nome: "Scrittore",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [
      { id: "343960168760869069" },
      { id: "343961163498782925" },
      { id: "343960225473102029" },
      { id: "343961340510994637" },
      { id: "343961508662739149" },
    ],
    sferaInfluenza: "Editori. Ammiratori.",
  },
  /* Veterano
Armi da Fuoco, Artiglieria, Guidare -cingolato-, Intrufolarsi, Uso -arma-, Uso -fucile-.
Possibilità di avere il Pregio Possedimento Iniziale.
Possono essere Anziani o avere il Difetto Mutilazione. */
  {
    id: "22205963684002017",
    nome: "Veterano",
    ambientazioneRef: "341412111307502220",
    eta: "N",
    abilitaRef: [
      { id: "343960624931274957" },
      { id: "343960656041476301" },
      { id: "343968013220839631" },
      { id: "343960144603775181" },
      { id: "343960377471533261v1" },
      { id: "343968013220839632" },
    ],
    difettiSceltaRef: [{ id: "341973933785874636" }],
    pregiSceltaRef: [{ id: "341972618725818572" }],
    sferaInfluenza: "Altri Veterani.",
  },
  /* *** I Dossier dell'Impossibile - End *** */
];

export default Professioni;
