const Pregi = [
  /* *** Manuale Base - Begin *** */
  {
    id: "341971750549979340",
    nome: "Affascinante",
    numeroDifetti: 2,
    descrizioneBreve: "+1 Quadri",
    descrizione:
      "Hai qualcosa che ti fa avere un certo ascendente sul sesso opposto, forse la voce, il portamento o il modo in cui parli... (+1 ai Test su Caratteristiche di Quadri verso il sesso opposto).",
  },
  {
    id: "341971856190865612",
    nome: "Amato",
    numeroDifetti: 2,
    descrizioneBreve: "",
    descrizione:
      "Qualcuno ti ama e farà di tutto per dimostrartelo! Avrai un aiuto fidato e sempre pronto in qualunque situazione; lei/lui arriverà a mettere a repentaglio la propria vita per salvarti o proteggerti se sarà necessario.",
  },
  {
    id: "341971875227762892",
    nome: "Ambidestro",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Attaccare con due spade, sparare con due pistole, bere due caffè contemporaneamente... uno scherzo per te! Grazie a questo Pregio non subirai alcun Malus (normalmente -2 al Test per colpire) utilizzando armi o altri oggetti con l'arto non dominante.",
  },
  {
    id: "341972072556134604",
    nome: "Bella Calligrafia",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Questo Pregio ti permette di scrivere bene e comprensibilmente anche in situazioni disagiate o concitate. Se hai a disposizione tempo e strumenti adatti, il tuo scrivere può diventare una vera forma d'arte e col dovuto insegnamento potresti diventare un ottimo miniaturista.",
  },
  {
    id: "341972142311604428",
    nome: "Bella voce",
    numeroDifetti: 1,
    abilitaRef: [{ id: "343960798508351693", valore: +2 }],
    descrizioneBreve: "+2 Cantare",
    descrizione:
      'Hai una voce particolare e piena di personalità, ottima per cantare in un\'opera lirica o in un complesso famoso (+2 ai Test di "Cantare")',
  },
  {
    id: "341972187522007244",
    nome: "Bisex",
    difettoRef: "341974081863680204",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Un Personaggio col Difetto Omosessuale col Pregio Bisex può camuffare parzialmente la propria inclinazione frequentando persone del sesso opposto... questo può risultare utile per cancellare o confondere le malelingue in quei regimi dove le abitudini sessuali non conformi alle ferree leggi dello stato e della morale vengono severamente punite. Grazie a questo Pregio, in ogni caso, potrete godere di qualunque amore, non facendovi condizionare dal sesso del vostro partner.",
  },
  {
    id: "341972220553199820",
    nome: "Buona reputazione",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Sei conosciuto e stimato come persona. La gente sarà generalmente propensa ad aiutarti, senza però esporsi o rischiare in prima persona; è probabile che tu riceva sconti nei negozi, che tutti ti salutino cordialmente, che qualche mamma ti veda come buon partito per la figlioletta o che nessuno ti rifiuti un prestito. Non è pensabile che per te si gettino verso morte certa o vadano contro ai propri principi.",
  },
  {
    id: "341972247204856012",
    nome: "Comportamento educato",
    numeroDifetti: 1,
    descrizioneBreve: "+1 Socievolezza",
    descrizione:
      "Conosci le regale della buona educazione, non sarai a disagio né a cena con i suoceri né a un gala dell'alta società, sarai all'altezza della situazione, evitando imbarazzanti gaffe e mostrandoti sicuro e a tuo agio (+1 a Socievolezza durante incontri che richiedano una certa etichetta).",
  },
  {
    id: "341972270493728972",
    nome: "Conoscenza di un ambiente",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Sei nato e cresciuto in un particolare ambiente che per te non ha segreti: la montagna, il bosco, la costa, le strade malfamate della tua città o l'ambiente ricco e sfarzoso della nobiltà... qualunque sia il tuo ambiente tu conosci i trucchi per muoverti senza dare nell'occhio, conosci le persone giuste da contattare per avere favori e informazioni e sai percorrere i sentieri più nascosti per raggiungere la tua meta.",
  },
  {
    id: "341972292962615500",
    nome: "Conoscenze importanti",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Sei fortunato, un tuo caro amico è un pezzo da novanta e non ti negherà certo un favore. Scegliete con cura chi sia questo amico, potreste averlo conosciuto nell'ambito lavorativo o in quello privato, potrebbe essere un politico o un esperto combattente. Definite il suo ruolo con cura per essere certi di servirvi di lui nelle situazioni in cui il suo aiuto sia veramente determinante. Ma ricordate: nessuno dà niente per niente nel mondo di Sine Requie e anche gli amici non vi offriranno il loro appoggio per sempre... a meno che non abbiano un valido tornaconto.",
  },
  {
    id: "341972309684256972",
    nome: "Coraggioso",
    numeroDifetti: 2,
    descrizioneBreve: "+3 Paura",
    descrizione:
      "Sai come affrontare la paura, come chiuderla nel tuo cuore senza che domini le tue azioni; niente e nessuno può spaventarti: sergenti iracondi, sangue, armi, pericolo... Morti... ci vorrà ben altro per uno tosto come te! (+3 ai Test di Paura).",
  },
  {
    id: "341972326447841484",
    nome: "Dinoccolato",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Le tue giunture possono resistere a insulti pesanti senza grossi problemi: puoi toglierti manette, attraversare pertugi strettissimi, rannicchiarti in posti piccolissimi come casse o barili per non farti scoprire o grattarti l'orecchio destro col piede sinistro...",
  },
  {
    id: "341972352170459340",
    nome: "Dote innata",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Hai un'Abilità (a Grado +0) in più... nessuno te l'ha insegnata ma la conosci di fatto, quasi istintivamente. Può essere qualunque Abilità che non richieda un vero studio per essere appresa.",
  },
  {
    id: "341972376986058956",
    nome: "Feeling con -animale-",
    numeroDifetti: 1,
    abilitaRef: [{ id: "343960572802367693", valore: +2 }],
    descrizioneBreve: "+2 Addestrare -animale-",
    descrizione:
      'Con gli animali di una certa specie ci hai sempre saputo fare, tu li ami e loro lo capiscono e ricambiano il tuo amore mostrandosi sempre pacifici e affettuosi. Animali addestrati alla violenza difficilmente sentiranno il tuo buon influsso ma, se risparmieranno una preda, quella sarai tu. Quando prenderete questo Pregio dovrete decidere verso quale specie animale avrete un buon feeling, ad esempio: cani, cavalli, gatti... (+2 ai Test "Addestrare -animale-")',
  },
  {
    id: "341972388888445132",
    nome: "Fisionimista",
    numeroDifetti: 2,
    descrizioneBreve: "+3 Memoria",
    descrizione:
      "Nessun volto ti sfugge, nessuna particolare camminata, espressione o sguardo sono da te sottovalutati o dimenticati. Puoi riconoscere una persona anche dopo che il tempo, la guerra o un pesante trucco ne abbiano modificato parzialmente i lineamenti (+3 a Memoria per il riconoscimento di volti)",
  },
  {
    id: "341972407950508236",
    nome: "Fortunato al gioco",
    numeroDifetti: 1,
    abilitaRef: [{ id: "343960994335162573", valore: +3 }],
    descrizioneBreve: "+3 Gioco d'azzardo",
    descrizione:
      'Giocare è sempre stato il tuo forte, hai una fortuna sfacciata e irritante... per chi gioca contro di te! (+3 ai Test "Gioco d\'azzardo")',
  },
  {
    id: "341972425133523148",
    nome: "Genio artistico",
    numeroDifetti: 2,
    descrizioneBreve: "+1 Creatività",
    caratteristicaRef: [{ id: "341575960680726733", valore: 1 }],
    descrizione:
      "Tutto ciò che fai nel campo dell'arte è considerato geniale o per lo più gradevole, riesci un po' in tutto: pittura, musica, scultura... (+1 a Creatività)",
  },
  {
    id: "341972440765694156",
    nome: "Gusto estetico",
    numeroDifetti: 2,
    caratteristicaRef: [{ id: "341575948055871693", valore: 1 }],
    descrizioneBreve: "+1 Aspetto",
    descrizione:
      "Sai cos'è bello, cos'è elegante e raffinato e la tua figura, così come gli oggetti di cui ti circondi, ne sono testimonianza indelebile (+1 a Aspetto)",
  },
  {
    id: "341972460271304908",
    nome: "Iniziazione occulta",
    numeroDifetti: 3,
    caratteristicaRef: [{ id: "341575989366620365", valore: 2 }],
    descrizioneBreve: "+2 Affinità Occulta",
    descrizione:
      "Qualcuno, nella tua infanzia, ti ha iniziato alla conoscenza della vera magia, oppure semplicemente sei nato così... un po' strano, capace di vedere o sentire cose che agli altri sono da sempre negate (+2 a Affinità Occulta, se essa è maggiore di 8 possiedi anche un potere innato).",
  },
  {
    id: "341972477984899276",
    nome: "Lettura veloce",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Puoi leggere così velocemente da non essere visto o notato mentre lo fai (nessuno penserà che in quella manciata di secondi tu abbia letto tutto quanto...) o da terminare un libro nella metà del tempo.",
  },
  {
    id: "341972491707613388",
    nome: "Non impressionabile",
    numeroDifetti: 2,
    descrizioneBreve: "+2 Orrore",
    descrizione:
      "Potranno immergerti in una vasca di sangue, gettarti in un pozzo abitato da viscidi vermi striscianti, costringerti a guardare tua madre sbranata dai Morti... forse resisterai all'orrore (Bonus +2 sui Test di Orrore)",
  },
  {
    id: "341972502913745100",
    nome: "Orientamento ottimo",
    numeroDifetti: 2,
    abilitaRef: [{ id: "343968013220839629", valore: +3 }],
    descrizioneBreve: "+3 Orientamento",
    descrizione:
      'Troveresti la strada di casa anche se ti risvegliassi in un bosco di notte; ti bastano pochi particolari per orientarti e, col cielo sereno, potrai ritornare dall\'Inferno seguendo le stelle! (+3 ai Test di "Orientamento")',
  },
  {
    id: "341972524323569868",
    nome: "Orologio biologico",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Sai sempre che ore sono, ti svegli sempre all'ora giusta e sai quando è ora di cena; anche chiuso in una cella o in una grotta saprai sempre ora e giorno, anche dopo settimane. Utile per prevedere ronde e turni di guardia...",
  },
  {
    id: "341972539643265228",
    nome: "Ottima vista",
    numeroDifetti: 1,
    abilitaRef: [{ id: "343960281846644941", valore: +1 }],
    descrizioneBreve: "+1 Osservare",
    descrizione:
      'hai una vista ottima e sai porre attenzione a ciò che vedi. Hai quello che si dice un "occhio di falco". Non hai solo degli occhi perfetti, hai anche un metodo di osservazione che ti permette di vedere più cose e di porvi maggior attenzione, di ricostruire mentalmente immagini poco chiare o frammentarie con una certa precisione (+1 ai Test "Osservare").',
  },
  {
    id: "341972558943355084",
    nome: "Ottimo gusto e olfatto",
    numeroDifetti: 1,
    descrizioneBreve: "+2 ai Test su odori e sapori",
    descrizione:
      "Riconosci odori e sapori con una certa precisione e anche a distanza di molto tempo... se c'è qualcosa di strano nel tuo pollo, tu lo sentirai anche senza assaggiarlo! (+2 ai Test su odori e sapori).",
  },
  {
    id: "341972570270073036",
    nome: "Ottimo udito",
    numeroDifetti: 1,
    abilitaRef: [{ id: "343960054820503757", valore: +1 }],
    descrizioneBreve: "+1 Ascoltare",
    descrizione:
      'Hai un udito spaventosamente sensibile e sai porre attenzione alle stimolazioni sonore, scomporle, comprenderle e processarle con cura nella tua mente. Insomma non solo "senti meglio" ma soprattutto capisci meglio quello che senti (+1 ai Test "Ascoltare").',
  },
  {
    id: "341972591715549388",
    nome: "Parlantina",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Parleresti per ore indipendentemente da quale sia l'argomento intavolato e da chi sia il tuo interlocutore, fino a farlo desistere o persino a farlo fuggire educatamente. Non ti mancano gli argomenti, siano essi interessanti o squisitamente futili.",
  },
  {
    id: "341972605875519692",
    nome: "Portato per le lingue",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Impari i fondamentali di lingue straniere con velocità impressionante; se ti mandassero in un paese straniero, in pochi giorni sapresti già cavartela discretamente. Ogni volta che apprendi un Grado di Lingua puoi sommare uno aggiuntivo.",
  },
  {
    id: "341972618725818572",
    nome: "Possedimento iniziale",
    numeroDifetti: 2,
    descrizioneBreve: "",
    descrizione:
      "Hai qualcosa che ti è stato regalato, oppure che un vero e proprio cimelio di famiglia: un fucile d'epoca, un dipinto costoso, un'auto o un biplano ancora funzionante...",
  },
  {
    id: "341972630388080844",
    nome: "Preciso",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "L'ordine è la tua fissazione, saprai sempre dove hai riposto un oggetto, dove cercare una scheda, in quale ordine disporre i tuoi libri, ma sei ordinato anche nello scrivere, nel vestire e in generale nell'organizzarti la vita.",
  },
  {
    id: "341972660442366156",
    nome: "Resistenza al ",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      'sei più resistente di altri a qualcosa in particolare, ma puoi scegliere solo una categoria tra le seguenti. In gioco potrai usufruire di un Bonus di +2 ai tiri per resistere a:\n• Caldo: inteso come calore ambientale, non fuoco o piastre incandescenti...\n• Dolore fisico: torture, leve articolari, non certo colpi di pistola o di accetta...\n• Dolore psicologico: morte o sevizie a un amico, un parente, te stesso...\n• Fame: muori comunque di inedia in dieci/quindici giorni... ma soffri di meno. Questo Pregio non ha niente a che spartire con la Fame dei Morti, sulla quale non ha alcun effetto.\n• Freddo: come per "caldo", non resisti per molto in una cella frigo, ma su un ghiacciaio sì!\n• Sete: la morte per inedia (in sette giorni circa) non puoi evitarla, ma soffrirai meno degli altri.\n• Vizio: smettere di fumare, di bere, di giocare non è per te fonte di preoccupazione.',
  },
  {
    id: "341972670853677260",
    nome: "Ricco",
    numeroDifetti: 2,
    descrizioneBreve: "",
    descrizione:
      "Hai un conto in banca esagerato... e l'hai avuto senza muovere un dito, solo un colpo di fortuna! Ora dovrai essere bravo ad amministrarlo.",
  },
  {
    id: "341972685885014220",
    nome: "Romantico",
    numeroDifetti: 1,
    caratteristicaRef: [{ id: "341575960680726733", valore: +1 }],
    descrizioneBreve: "+1 Creatività",
    descrizione:
      "hai uno spirito poetico e sognatore che affascina l'altro sesso e ti rende un poeta qualunque cosa tu faccia; se questa sensibilità viene affiancata a una forma d'arte, essa risulterà più sdolcinata e commovente (Bonus di +1 a Creatività e nei Test finalizzati a sedurre un partner).",
  },
  {
    id: "341972702222876876",
    nome: "Saper mentire",
    numeroDifetti: 2,
    abilitaRef: [{ id: "343961428784316621", valore: +2 }],
    descrizioneBreve: "+2 Raggirare",
    descrizione:
      'Sei bravissimo a mentire e anche se non è detto che tu lo faccia spesso, quando ti capita di farlo nessuno ti scopre. Se le bugie hanno le gambe corte nel tuo caso le muovono veloci! (+2 ai Test "Raggirare").',
  },
  {
    id: "341972717500629196",
    nome: "Scattante",
    numeroDifetti: 1,
    risoluzioneValore: +2,
    descrizioneBreve: "+2 Risoluzione",
    descrizione:
      "Sei sempre pronto a difenderti, i tuoi sensi sono sempre all'erta, probabilmente sei un po' iperteso e nervoso, ma in compenso sarà difficile prenderti in castagna. (+2 a Risoluzione).",
  },
  {
    id: "341972738066350284",
    nome: "Sopravvivenza",
    numeroDifetti: 2,
    descrizioneBreve: "",
    descrizione:
      "Se ti trovi in una situazione di crisi puoi fare di tutto, hai una conoscenza rudimentale di ogni terreno, conosci ricette improbabili e hai risorse così nascoste che non sapevi di avere.",
  },
  {
    id: "341972752719151308",
    nome: "Senso musicale",
    numeroDifetti: 1,
    abilitaRef: [{ id: "343961548035719373", valore: +1 }],
    descrizioneBreve: "+1 Suonare -strumento-",
    descrizione:
      "Hai la musica nel sangue. Hai un gusto sopraffino e un'incredibile abilità nell'imparare l'uso di uno strumento o nel ricordare, anche per intero, pezzi musicali di ogni tipo (+1 ai Test \"Suonare -strumento-\").",
  },
  {
    id: "341972767558598860",
    nome: "Sesto senso",
    numeroDifetti: 3,
    descrizioneBreve: "",
    descrizione:
      "A volte prima che ti succeda qualcosa di grave hai come un presentimento, come un lieve malessere o un lieve senso di angoscia, sarà difficile però interpretarlo in modo corretto e tempestivo.",
  },
  {
    id: "341972783888072908",
    nome: "Simpatico",
    numeroDifetti: 2,
    caratteristicaRef: [{ id: "341575965808263373", valore: +1 }],
    descrizioneBreve: "+1 Socievolezza",
    descrizione:
      "Qualunque cosa tu dica scatenerai il sorriso e, spesso, il riso irrefrenabile... che fai per Capodanno? (+1 a Socievolezza).",
  },
  {
    id: "341972798687674572",
    nome: "Sonno leggero",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Sei sempre all'erta come un predatore (in realtà come una preda), sei pronto a scattare al minimo segnale di pericolo o di allarme; se vuoi farti una dormita come si deve è bene che ti prenda delle pillole.",
  },
  {
    id: "341972816102424780",
    nome: "Stimato professionalmente",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      "Indipendentemente da come sei come persona, ciò che fai sul lavoro ha una qualità ineccepibile, sei stimato e visto come punto di riferimento nell'ambiente lavorativo.",
  },
  {
    id: "341972834038317260",
    nome: "Superdotato/Maggiorata",
    numeroDifetti: 1,
    descrizioneBreve: "",
    descrizione:
      'I tuoi caratteri sessuali sono prorompentemente visibili o intuibili e ciò ti rende stimato e invidiato (segretamente) dai tuoi "simili", ma desiderata morbosamente dall\'altro sesso (non da ognuno ma da molti esponenti... sicuramente i meno poetici...)',
  },
  {
    id: "341972854222356684",
    nome: "Voce impostata",
    numeroDifetti: 1,
    abilitaRef: [{ id: "343960318838309069", valore: +1 }],
    descrizioneBreve: "+1 Persuadere",
    descrizione:
      'Puoi impostare la voce dandogli un tono diverso molto marcato e convincente così da adattarla alla situazione in maniera vantaggiosa: amore, rispetto, calma ... (+1 a Test "Persuadere").',
  },
  {
    id: "341972873742647500",
    nome: "Volto comune",
    numeroDifetti: 2,
    descrizioneBreve: "",
    descrizione:
      "Hai una faccia... banale... questo non vuol dire che tu sia brutto, ma è difficile che qualcuno si ricordi il tuo volto a meno che non ti conosca bene.",
  },
  /* *** Manuale Base - End *** */
  /* *** Trono di Crisantemo - Begin *** */
  {
    id: "210072873742647500",
    ambientazioneRef: "341412158384373964",
    nome: "Kazoku",
    numeroDifetti: 2,
    descrizioneBreve: "",
    arrayProfessioneEta: ["N", "A"],
    descrizione:
      "I nobili giapponesi, decaduti o meno, godono di un certo prestigio nella società nipponica, inoltre hanno mantenuto ingenti quantità di denaro, talvolta sotto forma di terre o attività in cui possono mettere dei lavoratori a sgobbare per loro. I Kazoku accedono solitamente ai mestieri di Capovillaggio, Mercante di successo o, nel caso siano decaduti, Samurai (più per il prestigio che per seguire realmente i dettami del Bushido). In tutti questi casi possono accedere a Professioni Avanzate (A) anche se non sono Personaggi Maturi o Anziani.",
  },
  {
    id: "210072873742647501",
    ambientazioneRef: "341412158384373964",
    nome: "Bushido",
    numeroDifetti: 1,
    descrizioneBreve: "",
    caratteristicaRef: [
      { id: "341575965808263373", valore: +2 },
      { id: "341575940363518157", valore: +2 },
      { id: "341575952441016525", valore: +2 },
    ],
    descrizione:
      "Nella società giapponese esiste un forte senso dell' onore e del prestigio personale oltre che nazionale. L'onesta, il rispetto, l'obbedienza ai dettami del Sovrano Celeste, il coraggio, la lealtà, sono valori validi in ogni paese e tempo, ma che in Giappone, mescolati con un nazionalismo molto spinto, sono più accesi che altrove.\nAll'interno di questa società esistono alcuni uomini e donne che hanno intrapreso la Via del Guerriero: il Bushido. Chi padroneggia questa disciplina si dedica, solitamente, a Professioni come il Samurai e il Ronin, ma è possibile per qualunque giapponese seguire i dettami del Bushido. Alcune persone non possono seguire il Bushido, perché la loro condotta morale o le azioni richieste o ricercate nelle loro Professioni sono in aperto contrasto con i principi della Via del Guerriero. Questo è il caso dei criminali comuni, degli Shinobi, dei membri della Yakuza, delle più spietate Sanguisughe, dei mercanti avidi e senza scrupoli e ovviamente di coloro che si sono dedicati a discipline differenti, come Sacerdoti Shintoisti e monaci buddisti.\nE' possibile creare un Personaggio Samurai o Ronin senza il Pregio Bushido. In questo caso il PG conoscerà la Via del Guerriero e dirà di praticarla, forse sarà persino convinto di farlo ma nella realtà questo non cambia la sua vita come invece avviene a chi sceglie di legarsi a questo Pregio. Un Giocatore che crea un PG che ha questo Pregio dovrà tenere conto che sarà continuamente costretto a un certo tipo di comportamento, che potrebbe anche essere molto lontano da quello del suo Tarocco Dominante. Può farlo, ovviamente, ma tenendo sempre in considerazione che vivere lontani dalle proprie pulsioni più istintive e dalle proprie emozioni spontanee porta a una difficoltà nell'automiglioramento (insomma non prenderà quasi mai i Punti Avanzamento relativi al suo Tarocco Dominante!)\nChi segue la pratica del Bushido (che, ricordiamo, non viene fatta a parole ma con gesti quotidiani e le grandi imprese) è ben visto e onorato dal popolo, inoltre avrà una Volontà di ferro, per cui chi possiede questo Pregio ottiene:\n+2 Comando\n2 Volontà\n\n\nQuesto Pregio ha però, insito in sé, un grande Difetto: qualora chi lo possiede non segua alla lettera i suoi insegnamenti o fallisca un'impresa in modo disonorevole (cioè salvandosi, preservando se stesso, invece di dedicare anche la vita al perseguimento della vittoria), può essere obbligato dal Cartomante a effettuare un Test Volontà Usuale. Se ha successo avrà il coraggio di mettere fine alla vergogna che lo accompagna, togliendosi la vita in modo rituale, e cioè col Seppuku per i Samurai, oppure, per un Ronin, gettandosi volontariamente tra le fiamme o subendo la \"Trasformazione in Kami\" con l'aiuto dei propri compagni. Se il test è un insuccesso il Personaggio mostrerà di non avere abbastanza coraggio da togliersi la vita, per cui sceglierà di vivere nella vergogna. Egli smetterà di seguire il Bushido, perdendo tutti i bonus a esso connessi e segnerà il Difetto \"Tradimento del Bushido\" al posto del Pregio Bushido . Il PG continuerà nel suo viaggio e nella propria vita, magari anche come Samurai o Ronin, se gli sarà permesso o se nessuno conoscerà il suo \"tradimento\", ma proverà un costante e doloroso senso di disagio, avrà la certezza interiore di essere un fallimento e tutto questo si manifesterà in malus \"speculare\" rispetto ai bonus che aveva (e che ormai ha già perduto!) grazie al Bushido:\n- 2 Socievolezza\n- 2 Comando\n- 2 Volontà\nUna volta perso, il Pregio Bushido non può essere più riguadagnato. L'unico modo per lavare la vergogna è la morte.\n\nNota: se un PG ha Volontà 5 e prende il pregio Bushido, la Volontà sale a 7. Se poi tradisce il Bushido perde il bonus acquisito ( da 7 a 5) ed e costretto a prendere il Difetto \"Tradimento del Bushido\" che conferisce un malus di 2 a Volontà (da 5 a 3).\n\nLe azioni per cui il Cartomante può richiedere di testare la Volontà per il tradimento del Bushido sono:\n- crimini di ogni tipo come furto, violenza, sopraffazione di un debole, omicidio a sangue freddo, distruzione di beni e oggetti senza un valido motivo, rapimento ecc.;\n- compiere un'azione per se stessi, guidati dall'orgoglio, dall'arroganza, dal disprezzo e dalla superbia;\n- tradire il principio del Gi, che rappresenta l'onestà, la rettitudine, il senso di giustizia che il Samurai (o il Ronin) devono applicare altri altri e a se stessi;\n- tradire il principio del Yu, che rappresenta l'eroismo e il coraggio. Il Samurai (o il Ronin) combatte quando le persone normali fuggono o lo fa fino alla vittoria o fino alla propria morte. Un altro esito non è ammissibile;\n- tradire il principio del Jin, che rappresenta la struggente compassione e la pietà del Samurai (o il Ronin) , per cui non può rifiutarsi di dare il proprio aiuto qualora sia richiesto e deve vivere cercando persone da aiutare;\n- tradire il principio del Rei, cioè la gentilezza che il Samurai (o il Ronin) deve mostrare verso qualunque altra persona, compresi i nemici che hanno scelto di affrontarlo con onore. Visto che gli Shiryo e gli Yokai sono considerati privi di una vera volontà o ripieni di una volontà malvagia, verso di loro i Ronin non sono tenuti a mostrare alcuna gentilezza;\n- tradire il principio del Makoto, ovvero la indissolubilità della parola dall'azione. Il Samurai (o il Ronin) non promette e non rimanda. Compie  le azioni che vanno compiute. Promettere o parlare e non realizzare ciò che si è detto è un atto gravissimo;\n- tradire il principio del Meiyo, ovvero non applicare su se stessi un giusto giudizio. Essere indulgenti con le proprie azioni. Questa è quello che avviene anche quando il Samurai (o il Ronin) sceglie di vivere dopo un'onta perché non ha il coraggio di togliersi la vita;\n- tradire il principio del Chugi, cioè della totale responsabilità del proprio operato. II Samurai ( o il Ronin) è interamente e assolutamente responsabile di ogni evento generato da una sua azione. Non può sfuggire alle proprie responsabilità.",
  },
  {
    id: "210072873742647502",
    ambientazioneRef: "341412158384373964",
    nome: "Via della Mano Sinistra",
    numeroDifetti: 2,
    caratteristicaRef: [
      { id: "341575940363518157", valore: +3 },
      { id: "341575965808263373", valore: +3 },
      { id: "341575989366620365", valore: +3 },
      { id: "341576027967848653", valore: +3 },
      { id: "341576033844068557", valore: +3 },
    ],
    descrizioneBreve: "",
    descrizione:
      'Solo gli Shinobi ben addestrati seguono la Via della Mano Sinistra, una filosofia che li porta ad annullare la propria identità per non essere scalfiti da paura, sensi di colpa, emozioni e pulsioni personali. Questa atteggiamento li porta a seguire il fluire degli eventi e delle energie dell\'universo senza opporsi a esse.\nChi sceglie il Pregio "Via della Mano Sinistra" ottiene i seguenti bonus:\n+ 3 Volontà\n+ 3 Socievolezza\n+ 3 Affinità Occulta\n+ 3 Equilibrio Mentale\n+ 3 Karma\n\nII Personaggio con il Pregio "Via della Mano Sinistra" cancella dalla scheda il suo Tarocco Dominante, ma non i bonus e malus alle Caratteristiche ottenuti da essi. Chi ha il Pregio "Via della Mano Sinistra" non può effettuare il test "Distanza dalla Morte": quando è il suo tempo di morire egli muore.\n[Attenzione: molti Shinobi, persino il fondatore Genjo Umon, non seguono la Via in maniera davvero completa, anche se sono convinti di farlo, e solo pochissimi hanno raggiunto un livello di annullamento cosi totale da perdere il proprio Tarocco Dominante. A livello di gioco incontrerete molti Ninja che non hanno il Pregio "Via della Mano Sinistra", sebbene facciano di tutto per aderire ai suoi precetti].',
  },
  /* *** Trono di Crisantemo - End *** */
];

export default Pregi;
