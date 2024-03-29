const Difetti = [
  /* *** Manuale Base - Begin *** */
  {
    id: "341973020334620876",
    nome: "Abitudine ossessiva",
    descrizioneBreve: "",
    descrizione:
      "C'è una cosa nella tua giornata (o in un giorno particolare della settimana) che tu devi fare, a qualunque costo: può trattarsi di pulire i pavimenti di casa, telefonare a tua mamma, comprare una cravatta nuova, ascoltare un disco o qualunque altra cosa... ma se non la fai dai di matto!",
    carta: 1,
    seme: 1,
  },
  {
    id: "341973112884035788",
    nome: "Affascinabile (allocco)",
    descrizioneBreve: "",
    descrizione:
      "Sei particolarmente sensibile al fascino del sesso opposto. Qualsiasi cosa ti venga proposto o imposto da una persona con una prorompente bellezza sarà, ai tuoi occhi, vero, giusto, bello, indiscutibile.",
    carta: 2,
    seme: 1,
  },
  {
    id: "341973129101312204",
    nome: "Albino",
    descrizioneBreve: "",
    difettoRef: "341973352259256524",
    descrizione:
      'Sei affetto da albinismo (e purtroppo non sei Elric; Moorcock docet). La tua pelle come ogni pelo dal tuo corpo e i tuoi capelli sono bianco latte, i tuoi occhi sono rossi e deboli (aggiungi il Difetto "Difetti di vista"). Sei cosi particolare che ti sarà impossibile passare inosservato.',
    carta: 3,
    seme: 1,
  },
  {
    id: "341973146936541388",
    nome: "Allergia",
    descrizioneBreve: "",
    descrizione:
      "Scegli la causa della tua allergia e tenta di stargli lontano, se non vuoi avere un bel rush cutaneo o un attacco d'asma!",
    carta: 4,
    seme: 1,
  },
  {
    id: "341973164182470860",
    nome: "Antipatico",
    caratteristicaRef: [{ id: "341575965808263373", valore: 1 }],
    descrizioneBreve: "-1 Socievolezza",
    descrizione:
      "Nei momenti meno opportuni te ne esci con qualche battuta, critica o freddura veramente imbarazzante o inopportuna. Spesso risulti offensivo, fuori luogo, decisamente sgradevole... ma perché non stai un po' zitto? (-1 a Socievolezza)",
    carta: 5,
    seme: 1,
  },
  {
    id: "341973181893968076",
    nome: "Astemio",
    descrizioneBreve: "",
    descrizione:
      "L'alcol non ti piace, ti fa schifo il suo sapore, non puoi bere per motivi di salute, oppure perché sei stato un alcolista e ora non puoi più avvicinarti a una bottiglia senza stare male. Indipendentemente dalla causa cercherai di non bere e se sarai costretto a farlo ti ubriacherai o darai di stomaco con un solo sorso!",
    carta: 6,
    seme: 1,
  },
  {
    id: "341973218383364300",
    nome: "Balbuziente",
    descrizioneBreve: "",
    descrizione:
      "H-h-h-a-ai qu-qu-qu-qu-alche p-p-p-ro-o-blemino di d-d-iz-z-ione?",
    carta: 7,
    seme: 1,
  },
  {
    id: "341973245510025420",
    nome: "Brutta cicatrice",
    caratteristicaRef: [{ id: "341575948055871693", valore: 1 }],
    descrizioneBreve: "-1 Aspetto",
    descrizione:
      "Hai una cicatrice molto grande ed evidente che ti deturpa il volto: non solo sei più brutto, ma sei anche più facilmente riconoscibile. (-1 ad Aspetto).",
    carta: 8,
    seme: 1,
  },
  {
    id: "341973262353301708",
    nome: "Bugiardo",
    descrizioneBreve: "",
    descrizione:
      "Non puoi fare a meno di mentire. Non lo fai né per cattiveria né a fin di bene, le bugie escono dalla tua bocca senza che tu te ne renda conto, il dramma è che nessuno sa più quando crederti e forse, ormai, non lo sai neanche tu.",
    carta: 9,
    seme: 1,
  },
  {
    id: "341973280195870924",
    nome: "Cattiva reputazione",
    descrizioneBreve: "",
    descrizione:
      "Ahi, ahi, non sei per nulla ben visto... ma cosa hai fatto per attirarti contro il disgusto della gente? Hai ucciso, rubato, stuprato, copiato il compito di mate? Chissà?!?",
    carta: 10,
    seme: 1,
  },
  {
    id: "341973293200310476",
    nome: "Curioso",
    descrizioneBreve: "",
    descrizione:
      "Può non sembrare un Difetto ma ... aspetta di andare a vedere cos'è che rantola nel buio sottoscala della magione bombardata.",
    carta: 11,
    seme: 1,
  },
  {
    id: "341973328976675020",
    nome: "Difetti d'udito",
    descrizioneBreve: "-2 Ascoltare",
    abilitaRef: [{ id: "343960054820503757", valore: 2 }],
    descrizione:
      'Eh?... come hai detto scusa... c\'è un orto? Dove? Come? Non ti sento! Ah... hai detto "Morto", non orto! Ah ecco... ARGHHH! (-2 ai Test "Ascoltare")',
    carta: 12,
    seme: 1,
  },
  {
    id: "341973352259256524",
    nome: "Difetti di vista",
    abilitaRef: [{ id: "343960281846644941", valore: 2 }],
    descrizioneBreve: "-2 Osservare",
    descrizione:
      'Chi è quel tipo laggiù? Non vedo bene ... avviciniamoci un po\'? Mah ... sembra un simpatico vecchietto lento e impacciato ... "ehi simpatico signore lento e impacciat...ARGHHH!!!!" (-2 ai Test "Osservare")',
    carta: 13,
    seme: 1,
  },
  {
    id: "341973371367456972",
    nome: "Distratto",
    caratteristicaRef: [{ id: "341575935372296397", valore: 1 }],
    descrizioneBreve: "-1 Percezione",
    descrizione:
      'Sei costantemente e bellamente immerso nei tuoi pensieri, non hai una visione chiara di ciò che ti accade attorno, la tua percezione è scarsa e ne risentono le tue azioni, meno pronte e precise (-1 ai Test "Percezione").',
    carta: 14,
    seme: 1,
  },
  {
    id: "341973423686156492",
    nome: "Eccentrico",
    descrizioneBreve: "",
    descrizione:
      'Il tuo comportamento è in qualche modo anormale e strano, non causa alcun danno alla società, certo, ma è fonte di pettegolezzi e pubblico ludibrio. Può essere il tuo modo di vestire o di vivere in generale, i tuoi studi o le tue idee bislacche che sciorini ai quattro venti, ma attento: i nuovi regimi non vedono di buon occhio i "diversi".',
    carta: 1,
    seme: 2,
  },
  {
    id: "341973440970883276",
    nome: "Familiare a carico",
    descrizioneBreve: "",
    descrizione:
      "Hai la classica palla al piede che ti assorbe tempo, denaro e libertà: sarai costretto a mentire per uscire con i tuoi amici, essere presente a noiosissime feste di compleanno dove decine di bambini urlanti ti strillano attorno, cambiare pannolini o ricordarti anniversari, mesiversari, giornoversari ... e per ognuno un regalino diverso ... e non tornare tardi, che la cena si raffredda ...",
    carta: 2,
    seme: 2,
  },
  {
    id: "341973459369197772",
    nome: "Fedina penale sporca",
    descrizioneBreve: "",
    descrizione:
      'Hai commesso crimini contro la società; se cadi nelle mani della legge dovrai scontare tutte le tue "marachelle" ... e i processi ora non funzionano come nei film americani: i giudici tendono ad essere un tantino severi. Se il tuo crimine è grave (omicidio, lesioni gravi, magari a un ufficiale, crimini contro l\'umanità, come tenere un Morto in casa, o altro ... ) aggiungi "Ricercato".',
    carta: 3,
    seme: 2,
  },
  {
    id: "341973472832913612",
    nome: "Fobia",
    descrizioneBreve: "",
    descrizione:
      "Sei affetto da una fobia Lieve (anche se il tuo Equilibrio Mentale è superiore a 3. Questa fobia non è curabile in nessun modo e non andrà via finché campi (e se sei sfortunato non andrà via neanche dopo!).",
    carta: 4,
    seme: 2,
  },
  {
    id: "341973488876126412",
    nome: "Fumatore",
    descrizioneBreve: "",
    descrizione:
      "Pessimo vizio fumare! Non sei ancora dipendente dal fumo, ma potresti diventarlo se continui così. Ti porti dietro le sigarette o i sigari ovunque e sei di pessimo umore se non li hai con te!",
    carta: 5,
    seme: 2,
  },
  {
    id: "341973535613255884",
    nome: "Giocatore incallito",
    descrizioneBreve: "",
    descrizione:
      "Ti piace proprio fare una bella partita a carte, a dadi o a scacchi. Non sei dipendente dal gioco d'azzardo e non sperperi i tuoi averi in maniera metodica e compulsiva ... ami solo giocare ... a qualsiasi cosa! Staccarti dal tavolo da gioco non sarà facile e spesso tenterai di raccogliere scommesse anche nelle situazioni di rischio personale ... scommettiamo che se non la smetti ci lasci le penne?",
    carta: 6,
    seme: 2,
  },
  {
    id: "341973609074393292",
    nome: "Grasso",
    caratteristicaRef: [{ id: "341575970478620877", valore: 1 }],
    descrizioneBreve: "-1 Coordinazione",
    descrizione:
      "La gola è il tuo peccato preferito, oppure mamma natura ha abbondato quando ti ha disegnato ... sei un po' goffo e lento, senza contare che probabilmente i tuoi amici hanno inventato un sacco di nomignoli su di te, Ciccio! (-1 a Coordinazione)",
    carta: 7,
    seme: 2,
  },
  {
    id: "341973624330125516",
    nome: "Idealista",
    descrizioneBreve: "",
    descrizione:
      'Sei un inguaribile idealista: nella tua mente gli uomini, la società, il mondo sono differenti o potrebbero divenirlo ... vivi per questo miglioramento, per il tuo alto ideale, qualunque esso sia. Chiaramente questo ti rende un pochino "rigido" nelle valutazioni e nel tuo modo di relazionarti con gli altri.',
    carta: 8,
    seme: 2,
  },
  {
    id: "341973645228245196",
    nome: "Impotente/Frigida",
    descrizioneBreve: "",
    descrizione:
      "La tua vita sessuale è un disastro completo, hai anche un po' di vergogna e senso d'inferiorità. Cercherai di evitare situazioni altrimenti imbarazzanti. Ricorda: non esiste nessuna pillolina blu nel mondo di Sine Requie ... e non esisterà mai.",
    carta: 9,
    seme: 2,
  },
  {
    id: "341973660272165068",
    nome: "Impulsivo",
    descrizioneBreve: "",
    descrizione:
      "Agisci istintivamente, senza ragionare, parli spesso a sproposito e ti lasci trascinare dalle tue emozioni, che dominano incontrastate il tuo pensiero e le tue azioni. Se la posta in gioco è alta non ti curi piu dei rischi reali e compi azioni decisamente stupide: alcuni ti riterranno un impavido, ma questo tuo agire d'impulso potrà solo avvicinarti alla morte.",
    carta: 10,
    seme: 2,
  },
  {
    id: "341973686718300364",
    nome: "Incapacità di sentire odori e sapori",
    descrizioneBreve: "",
    descrizione:
      "Un danno cerebrale o a livello delle terminazioni nervose ti preclude un universo di sensazioni chimiche note come odori e sapori.",
    carta: 11,
    seme: 2,
  },
  {
    id: "341973706696818892",
    nome: "Incoerente",
    descrizioneBreve: "",
    descrizione:
      "Non hai un'idea che duri più di una settimana; qualunque ideale, qualunque passione, sarà destinata a passare attraverso la tua mente per poi lasciarla, libera di accoglierne una successiva, anche contraria. La tua incoerenza ti porta ad essere inconcludente, spesso incomprensibile agli altri e decisamente irritante... su di te non si può contare.",
    carta: 12,
    seme: 2,
  },
  {
    id: "341973731061530828",
    nome: "Infestato da parassiti",
    descrizioneBreve: "",
    descrizione:
      "Sei portatore di noiosissimi parassiti che ti causano dolori (es. tenia), prurito (pulci), cachessia (tutti nei casi più gravi). Potresti toglierli ma la medicina è di poco aiuto quando probabilmente è l'ambiente che abitualmente frequenti che pullula di parassiti, che oltretutto sembrano considerarti un piatto prelibato.",
    carta: 13,
    seme: 2,
  },
  {
    id: "341973745794023628",
    nome: "Innamorato",
    descrizioneBreve: "",
    descrizione:
      "Hai un grande amore e non lo nascondi, per lui/lei faresti qualunque cosa, anche a rischio della vita.",
    carta: 14,
    seme: 2,
  },
  {
    id: "341973765900468428",
    nome: "Invidioso",
    descrizioneBreve: "",
    descrizione:
      "Ciò che hanno gli altri è sempre più bello, più grande, più pulito... non importa che lo sia davvero, per te lo è e questo basta. Invidierai sempre ciò che appartiene ad altri: vestiti, lavoro, dolce metà compresa, e se ti sarà possibile ne prenderai possesso.",
    carta: 1,
    seme: 3,
  },
  {
    id: "341973780222968012",
    nome: "Libidinoso",
    descrizioneBreve: "",
    descrizione:
      "Il sesso per te è tutto, vuoi farlo bene e più frequentemente possibile, non importa se ciò può comportare rischi, anzi il rischio ti eccita maggiormente. Non cerchi partner particolarmente affascinanti e non è la conquista il tuo fine... tu vuoi solo fare sesso, con chiunque ti permetta di soddisfare i tuoi istinti.",
    carta: 2,
    seme: 3,
  },
  {
    id: "341973830254723276",
    nome: "Molto entusiasmabile",
    descrizioneBreve: "",
    descrizione:
      "Il tuo spirito si infiamma facilmente alla lettura o all'ascolto di sermoni, dichiarazioni d'intenti, proclami, volantini reazionari e rivoluzionari... se un pazzo cercasse discepoli, tu abboccheresti istantaneamente prendendoti a cuore qualunque causa anche se stupida o assurda (ma non direttamente suicida...).",
    carta: 3,
    seme: 3,
  },
  {
    id: "341973933785874636",
    nome: "Mutilazione",
    descrizioneBreve: "",
    descrizione:
      "Durante uno scontro, per un incidente sul lavoro, a causa di un'infezione o quant'altro, sei rimasto gravemente mutilato (una mano, un braccio, un piede...); handicap e difetti andranno considerati in base a quale zona stata amputata.",
    carta: 4,
    seme: 3,
  },
  {
    id: "341973954980741324",
    nome: "Nanismo/Gigantismo",
    caratteristicaRef: [
      { id: "341575970478620877", valore: 1 },
      { id: "341575948055871693", valore: 1 },
      { id: "341575952441016525", valore: 1 },
    ],
    descrizioneBreve: "-1 Coordinazione, -1 Aspetto, -1 Comando",
    descrizione:
      "Siete dei diversi... quindi riconoscibili e additati da tutti. I vostri arti sono troppo tozzi o troppo lunghi, le vostre capacita di movimento sono ridotte (-1 a Coordinazione, -1 ad Aspetto, -1 a Comando).",
    carta: 5,
    seme: 3,
  },
  {
    id: "341973980547121356",
    nome: "Narcisista",
    descrizioneBreve: "",
    descrizione:
      "Ti senti bello come un adone, e fai di tutto per migliorarti; sei vanesio ed egocentrico, sicuro di te stesso (apparentemente) e poco autocritico. Oltre ad essere tedioso sei anche fonte di un'infinita serie di piccole baggianate su te stesso che spari in continuazione per atteggiarti. Chiaramente non tutti ci cascano.",
    carta: 6,
    seme: 3,
  },
  {
    id: "341973996905955532",
    nome: "Nemico mortale",
    descrizioneBreve: "",
    descrizione:
      'Hai un nemico ... purtroppo è uno di quelli tosti. E ti vuole morto! Puoi scegliere, in accordo col Cartomante, di chi si tratti e del perché voglia la tua morte. Ricorda... non vuole sbatterti in cella o "fartela pagare"... vuole proprio ucciderti!',
    carta: 7,
    seme: 3,
  },
  {
    id: "341974021755109580",
    nome: "Nome e/o cognome ridicoli",
    descrizioneBreve: "",
    descrizione:
      "La maledizione della famiglia è scesa su di te il giorno del tuo battesimo, cara la mia Domenica Lalavai...e assieme a te ci sono: Dina Lampa, Corto Uccello, Pasquale Uovo, Dino Sauro, Dal Caldo Alfredo...",
    carta: 8,
    seme: 3,
  },
  {
    id: "341974042742358220",
    nome: "Non sai ascoltare",
    caratteristicaRef: [{ id: "341575965808263373", valore: 1 }],
    descrizioneBreve: "-1 Socievolezza",
    descrizione:
      "Che dire... sei un pessimo ascoltatore, i problemi degli altri non ti interessano, i discorsi lunghi e contorti ti annoiano, non hai consigli per nessuno e speri non te ne chiedano... non è che lo fai apposta, ma dopo pochi minuti di conversazione ti distrai e i tuoi pensieri migrano altrove... frase tipica: -Parli da sola anche quando non ci sono?- (ci vuole un po' per capirla...). (-1 a Socievolezza).",
    carta: 9,
    seme: 3,
  },
  {
    id: "341974060890063052",
    nome: "Obeso",
    caratteristicaRef: [{ id: "341575970478620877", valore: 2 }],
    descrizioneBreve: "-2 Coordinazione",
    descrizione:
      "La realta è che mangi come un elefante bulimico! Non sei grasso... sei enorme! (-2 a Coordinazione).",
    carta: 10,
    seme: 3,
  },
  {
    id: "341974081863680204",
    nome: "Omosessuale",
    descrizioneBreve: "",
    descrizione:
      "Questo none un difetto di per sé, ma lo è (e grave) all'interno dei nuovi regimi, specialmente nel Reich (il nazismo non lo consente), e nel Sanctum Imperium (dove la sodomia e punibile con l'evirazione).",
    carta: 11,
    seme: 3,
  },
  {
    id: "341974108908552396",
    nome: "Puzzolente",
    descrizioneBreve: "",
    descrizione:
      "Le secrezioni del! tuo corpo sono particolarmente acri... sudore, alito o altro hanno un odore forte, inconfondibile; il tuo cane ti adorerà perché saprà sempre dove sei, ma per gli esseri umani... beh, è un altro paio di maniche...",
    carta: 12,
    seme: 3,
  },
  {
    id: "341974129326424268",
    nome: "Religione minoritaria",
    descrizioneBreve: "",
    descrizione:
      'Appartieni a una religione o a un "partito" minoritario e ghettizzato; la vita per te sarà più difficile e parzialmente ammantata da mistero per evitare guai maggiori. I diversi, come ho già detto più volte, non sono ben visti.',
    carta: 13,
    seme: 3,
  },
  {
    id: "341974143774752972",
    nome: "Ricercato",
    descrizioneBreve: "",
    descrizione:
      "Hai commesso un grave crimine e sei ricercato nel tuo stato... prega che non ti trovino!",
    carta: 14,
    seme: 3,
  },
  {
    id: "341974175457476812",
    nome: "Sdentato",
    caratteristicaRef: [{ id: "341575948055871693", valore: 1 }],
    descrizioneBreve: "-1 Aspetto",
    descrizione:
      'Per anzianità, malattia o trauma non hai più molti denti, hai difficoltà nel mangiare e una buffa parlata, ad esempio "col fischio" (-1 ad Aspetto).',
    carta: 1,
    seme: 4,
  },
  {
    id: "341974190900904140",
    nome: "Segreto minore",
    descrizioneBreve:
      "Hai combinato qualcosa che bene non si sappia in giro... potresti avere avuto una relazione proibita o aver commesso qualche piccolo crimine, oppure nella tua famiglia è avvenuto un fatto indecoroso. Se la verità venisse a galla la tua reputazione ne risentirebbe: forse qualche amico ti potrebbe voltare le spalle, oppure la tua compagna potrebbe spaccarti un servizio da dodici sulla nuca...",
    descrizione: "",
    carta: 2,
    seme: 4,
  },
  {
    id: "341974205674291404",
    nome: "Segreto minaccioso",
    descrizioneBreve: "",
    descrizione:
      "Hai visto qualcosa che non dovevi vedere. Forse hai avuto un contatto con una setta segreta o con un'associazione per delinquere, in ogni caso sai qualcosa che, se venisse a galla, ti metterebbe in serio pericolo... se quei loschi fuorilegge sospettassero di te tenterebbero sicuramente di darti una bella lezione così da metterti a tacere per sempre.",
    carta: 3,
    seme: 4,
  },
  {
    id: "341974239473041612",
    nome: "Segreto mortale",
    descrizioneBreve: "",
    descrizione:
      "Hai fatto qualcosa di proibito. Sei parte di una setta segreta, hai un omicidio sulla coscienza, sintetizzi droga nella cantina di casa, contrabbandi armi dietro i giardinetti della chiesa... a te la scelta. Ma sappi che, se la verità venisse a galla, avresti tutta la rispettabile società, e soprattutto le forze dell'ordine, alle calcagna! E non saranno gentili con te!",
    carta: 4,
    seme: 4,
  },
  {
    id: "341974254352335052",
    nome: "Sonno pesante",
    descrizioneBreve: "",
    descrizione:
      'Quando dormi lo fai "seriamente", non ti svegliano nemmeno le cannonate... se dormi, dormi! E per svegliarti una comune sveglia non basta di certo.',
    carta: 5,
    seme: 4,
  },
  {
    id: "341974271803785420",
    nome: "Sonno rumoroso",
    descrizioneBreve: "",
    descrizione:
      'Russi, russi, russi come un trattore! Simile al ruggito di un leone asmatico, il tuo "barrito" è udibile attraverso spesse pareti e completamente insopportabile per chi ti dorme vicino.',
    carta: 6,
    seme: 4,
  },
  {
    id: "341974285543276748",
    nome: "Spendaccione",
    descrizioneBreve: "",
    descrizione:
      "Il vero valore dei soldi ti è sconosciuto, o ne hai così tanti da non sapere come finirli. Compri di tutto: bello, brutto, utile, inutile, pregiato o da rigattiere non importa, se ti piace lo acquisti... e sei felice.",
    carta: 7,
    seme: 4,
  },
  {
    id: "341974303826247884",
    nome: "Stonato",
    abilitaRef: [{ id: "343960798508351693", valore: 3 }],
    descrizioneBreve: "-3 Cantare",
    descrizione:
      'La tua voce è quanto di più inadatto esista per il canto, sei una cornacchia, le tue ninne-nanne svegliano i bimbi di tutto il quartiere. (-3 ai Test "Cantare")',
    carta: 8,
    seme: 4,
  },
  {
    id: "341974321727537356",
    nome: "Superstizioso",
    descrizioneBreve: "",
    descrizione:
      'Sei un credulone e un ingenuo, tutto ciò che può essere "strano" ti spaventa a morte e non lo sottovaluterai mai. Inoltre non passerai mai sotto una scala, non verserai mai del sale a terra, tratterai con cura gli specchi e... occhio ai gatti neri.',
    carta: 9,
    seme: 4,
  },
  {
    id: "341974335923159244",
    nome: "Tatuaggio",
    descrizioneBreve: "",
    descrizione:
      "Grande e brutto, piccolo e curato è comunque un marchio che, come o più di una cicatrice, ti rende riconoscibile.",
    carta: 10,
    seme: 4,
  },
  {
    id: "341974352935256268",
    nome: "Troppo sincero",
    descrizioneBreve:
      'Non riesci a mentire, nemmeno per salvarti o a fin di bene, il concetto "bugia = bambino cattivo" è in te troppo radicato; è sicuramente apprezzabile, ma aspettate di dire ad una SS che siete stati voi, per incidente, a graffiargli l\'autoblindo... vedrete come apprezzerà!',
    descrizione: "",
    carta: 11,
    seme: 4,
  },
  {
    id: "341974373546066124",
    nome: "Turbe mentali",
    descrizioneBreve: "",
    descrizione:
      "Hai un Disturbo Mentale Grave, può condizionarti la vita. Tale patologia verrà segnata tra i Difetti e non tra le Malattie mentali, pertanto non potrà essere guarita in nessun modo e sarà presente costantemente nella vita del Personaggio indipendemente dal suo punteggio di Equilibrio Mentale.",
    carta: 12,
    seme: 4,
  },
  {
    id: "341974451733135564",
    nome: "Voce femminea/mascolina",
    descrizioneBreve: "",
    descrizione:
      "La tua voce è femminea se sei un uomo, mascolina se sei una donna. Sei meno affascinante e credibile, a volte anche po' ridicolo.",
    carta: 13,
    seme: 4,
  },
  {
    id: "341974465831239884",
    nome: "Zoppia",
    descrizioneBreve: "-1 Coordinazione",
    caratteristicaRef: [{ id: "341575970478620877", valore: 1 }],
    descrizione:
      "Zoppichi a causa di una ferita o di una malformazione congenita; avrai difficoltà nel correre, marciare, saltare, ballare, giocare a pallone. Dimenticavo: chi sta con te impara a zoppicare... (-1 a Coordinazione)",
    carta: 14,
    seme: 4,
  },
  /* *** Manuale Base - End *** */
  /* *** Trono di Crisantemo - Begin *** */
  {
    id: "210072873742647510",
    ambientazioneRef: "341412158384373964",
    nome: "Burakumin",
    descrizioneBreve: "",
    descrizione:
      "La feccia della società nipponica è costituita dai Burakumin, disposti o costretti a fare i lavori più umili per sopravvivere, anche quelli che hanno a che fare con l'impurità. Molti di loro sono semplicemente contadini e operai sottopagati, altri accedono a mestieri che solo un Burakumin può compiere, come il macellaio, il Boia e il Becchino. Solo i personaggi con Difetto Burakumin possono accedere alle Professioni di Becchino.",
  },
  {
    id: "210072873742647511",
    ambientazioneRef: "341412158384373964",
    nome: "Zainichi Korean",
    descrizioneBreve: "",
    descrizione:
      "Se i Burakumin sono il livello più basso della società nipponica, i coreani rifugiati nel Sol Levante non sono neppure parte della società nel senso stretto del termine. Sono loro concessi solo lavori umilianti e sottopagati, solitamente fanno parte della forza lavoro dei campi e dei tagliaboschi. Spesso vengono disprezzati e maltrattati apertamente. Il forte razzismo che vige tutt'ora in Giappone si scatena contro gli Zainichi Korean, che molto difficilmente ottengono giustizia per le vessazioni e i danni subiti. I coreani non possono ottenere alcun mestiere che preveda l'uso di armi, per cui neppure i lavori solitamente destinati ai Burakumin sono accessibili a questi disgraziati. Esistono però anche avamposti e villaggi gestiti e abitati solo da Zainichi Korean e in questi luoghi i coreani occupano tutte le cariche normalmente riservate ai giapponesi: dal Capovillaggio al Samurai, dal Boia al Mercante. Sebbene all'interno del loro villaggio la vita scorra più tranquilla, non è loro concesso commerciare con i villaggi giapponesi, inoltre più uno Zainichi Korean si fregerà di un titolo di prestigio nel suo villaggio più sarà odiato, preso di mira e duramente colpito dai giapponesi più razzisti.",
  },
  /* *** Trono di Crisantemo - End *** */
];

export default Difetti;
