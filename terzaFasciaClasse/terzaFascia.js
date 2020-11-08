var jsonFile = null;
var indiceDomanda = 0;
var opzione = null;
var checkRisposta = null;
var didascalia = null;
var sugg = null;
var booleanCounter = false;
var indiceCorretto = null;
var rispostaCorretta = null;
var countTre = 0;
var countQuattro = 0;
var rispostaTre = null;
var rispostaQuattro = null;
var array = [];
var arrayIndex = 0;
var volumeCounter = false;
var soundCounter = true;
var arrayNumeroDomande = [];
var minuti = 0;
var secondi = 0;
var ore = 0;
var myTimer;


/********************************************************
$.ajax({
  type: "GET",
  headers: { "Access-Control-Allow-Origin": "*" },
  url: "terzaFascia.json",
}).done(function readJson(terzaFascia) {
  var indiceSezione = Math.floor(Math.random() * jsonFile.File.length);
  var indicePartenza = indiceSezione;

  var titolo = terzaFascia.titolo1;
  document.getElementById("titolo").innerHTML = titolo;

  jsonFile = JSON.parse(JSON.stringify(terzaFascia));

  var j = 0;
  for (var i = indicePartenza; i < jsonFile.File.length; i++) {
    array[j] = i;
    j++;
  }
  for (var i = 0; i < indicePartenza; i++) {
    array[j] = i;
    j++;
  }

  contatoreDomande();

  regole();
});
*******************************************************/
/*****************************************************/
var myObj = '{"titolo1": "L\'assassinio del direttore","regole": ["Questo è un gioco di classe","Per ogni domanda è presente solo una risposta corretta","Le domande hanno diversi livelli di difficoltà","Per rispondere ad alcune domande dovrai interagire con l\'ambiente intorno a te","Le domande più difficili hanno un punteggio più alto","Alla fine del gioco, confronta il tuo punteggio con quelli degli altri gruppi","State attenti al tempo, che incide sul punteggio","E\' obbligatorio imparare divertendosi!"],"introduzione": "OH NOO!! <br> C\'E\' IL CORPO DEL DIRETTORE DEL MUSEO IN UNA POZZA DI SANGUE!!! <br> La segretaria ha riferito alla polizia che il diretore è stato nei seguenti posti prima di venire ucciso: <ol> <li> Alle 14:30 è stato nella sala dedicata alla Guerra delle Due Rose </li> <li> Alle 15:45 è stato nella sala dedicata alla Guerra Fredda </li> <li> Alle 16:10 è stao nella sala dedicata alla Prima Guerra Mondiale </li> <li> Alle 16:40 è stat nella sala dedicata alla Rivoluzione Francese </li></ol> Guradando attenetamente, si può vedere che il direttore stringe tra le mani un pezzo di carta. Cerca di completare la lettera per scoprire il colpevole.","introduzioneImmagine": "lettera1","narrazione": ["Vai nella sala dedicata alla Guerra delle Due Rose e rispondi alle domande per ottenere un frammento della lettera.","Vai nella sala dedicata alle Guerre Mondiali e rispondi alle domande per ottenere un frammento della lettera.","Vai nella sala dedicata alla Rivoluzione Francese e rispondi alle domande per ottenere un frammento della lettera."],"oggetto": ["York e Lancaster", "bombaAtomica", "guerra"],"indizio": ["<img src=\'img/lettera2.png\'>","<img src=\'img/lettera3.png\'>","<img src=\'img/lettera4.png\'>"],"File": [{"tipo": 2,"domanda": ["Quale famiglia ha vinto la Guerra delle Due Rose?","In quali luoghi si è svolta la Guerra delle Due Rose?","Quali erano le famiglie coinvolte nella Guerra delle Due Rose?"],"opzioni": [["Savoia", "Lancaster", "Beauchamp‎ ", "York"],["Italia, Francia, Germania", "Austria, Svizzera, Slovenia", "Inghilterra, Galles, Calais", "Estonia, Polonia, Irlanda"],["Beauchamp‎ e Savoia", "Savoia e Lancaster", "York e Lancaster", "Beauchamp‎ e York"]],"risposteCorrette": ["Lancaster", "Inghilterra, Galles, Calais", "York e Lancaster"],"didascalia": ["La prima creazione del casato inglese dei Lancaster (il cui stemma era una rosa rossa) fu con l\'investitura a conte di Lancaster da parte di re Enrico III a favore del suo secondogenito Edmondo il Gobbo, nel 1267. Il titolo passò al nipote Enrico Plantageneto, che fu elevato a primo duca di Lancaster nel 1351","La Guerra delle Due Rose scoppiò a causa della successione al trono d\'Inghilterra","La guerra delle due rose fu una sanguinosa lotta dinastica combattuta in Inghilterra tra il 1455 e il 1485 tra due diversi rami della casa regnante dei Plantageneti: i Lancaster e gli York. La guerra fu denominata così a seguito del romanzo \'Anna di Geierstein\' pubblicato da Walter Scott facendo riferimento agli stemmi delle due casate."],"suggerimento": ["E\' una città del nord-ovest dell\'Inghilterra","Nei luoghi coinvolti si parla inglese e francese","Le famiglie coinvolte sono inglesi"],"immagine": ["re", "luogo", "York e Lancaster"]}, {"tipo": 3,"domanda": ["Metti in ordine cronologico questi eventi riguardanti la Prima Guerra Mondiale","Metti in ordine cronologico questi eventi riguardanti la Seconda Guerra Mondiale"],"opzioni": [["Austria_firma_armistizio_con_l\'Italia", "Assasinio_di_Federico_Ferdinando", "Giappone_dichiara_guerra_alla_Germania", "Austria_dichiara_guerra_alla_Serbia"],["Bomba_atomica_su_Hiroshima", "Germania_invade_Polonia", "Firma_del_Patto_Tripartito", "Italia_entra_in_guerra"]],"risposteCorrette": ["Assasinio di Federico Ferdinando - Austria dichiara guerra alla Serbia - Giappone dichiara guerra alla Germania - Austria firma armistizio con l\'Italia - ", "Germania invade Polonia - Italia entra in guerra - Firma del Patto Tripartito - Bomba atomica su Hiroshima - "],"didascalia": ["La Grande Guerra distrusse equilibri politici consolidati da decenni e ridisegnò i confini nazionali di Europa e Medio Oriente: quattro grandi imperi (tedesco, austro-ungarico, russo e ottomano) erano scomparsi lasciando al loro posto nazioni prostrate dalla guerra","La seconda guerra mondiale vide contrapporsi, tra il 1939 e il 1945, le cosiddette potenze dell\'Asse e gli Alleati che, come già accaduto ai belligeranti della prima guerra mondiale, si combatterono su gran parte del pianeta"],"suggerimento": ["Cerca gli avvenimenti nella sala della Prima Guerra Mondiale","Cerca gli avvenimenti nella sala della Seconda Guerra Mondiale"]}, {"tipo": 4,"domanda": ["Metti in ordine cronologico questi eventi riguardanti la rivoluzione francese","Vai nella sala dedicata alle guerre e metti in ordine cronologico queste guerre"],"opzioni": [["Presa_della_Bastiglia", "Luigi_XVI_Decapitato", "Giuramento_della_Pallacorda", "Fuga_da_Varennes"],["Guerra_Civile_Albanese", "Guerra_del_Vietnam", "Guerra_del_Golfo", "Prima_guerra_del_Congo"]],"risposteCorrette": ["Giuramento della Pallacorda - Presa della Bastiglia - Fuga da Varennes - Luigi XVI Decapitato - ","Guerra del Vietnam - Guerra del Golfo - Prima guerra del Congo - Guerra Civile Albanese - "],"didascalia": ["La Rivoluzione francese fu un periodo di sconvolgimento sociale, politico e culturale occorso in Francia tra il 1789 e il 1799, assunto dalla storiografia come lo spartiacque temporale tra l\'età moderna e l\'età contemporanea.","Guerra del Vietnam 1964-1975 <br> Prima Guerra del Golfo 1990-1991 <br> Prima guerra del Congo 1996-1997 <br> Guerra Civile Albanese 1997-1998"],"suggerimento": ["Cerca questi avvenimenti nella sala dedicata alla Rivoluzione Francese","Cerca questi avvenimenti in giro per il museo"]}],"Fine": "Mettendo insieme i vari frammenti che hai trovato, la lettera risultante è quella riportata di sotto. Il colpevole è il vicedirettore Bartolomeo Vespucci!!! <br> BRAVO HAI RISOLTO IL MISTERO!!!","ImmagineFine": "lettera"}';
var jsonFile = JSON.parse(myObj);
var indiceSezione = Math.floor(Math.random() * jsonFile.File.length);
var indicePartenza = indiceSezione;
document.getElementById("titolo").innerHTML = jsonFile.titolo1;

//array per visualizzare in ordine corretto le domande
  var j = 0;
  for (var i = indicePartenza; i < jsonFile.File.length; i++) {
    array[j] = i;
    j++;
  }
  for (var i = 0; i < indicePartenza; i++) {
    array[j] = i;
    j++;
  }

  contatoreDomande();
  regole();
/*****************************************************/

 //Funzione per calcolare il numero di domande rimanenti per una sezione
  //e calcolarne il punteggio
function contatoreDomande() {
  for (var i = 0; i < jsonFile.File.length; i++) {
    arrayNumeroDomande[i] = jsonFile.File[i].domanda.length;
  }
}

//Cancella il contenuto della pagina
function clearContent() {
  document.getElementById("divContent").innerHTML = "";
}

//visualizzazione delle regole del gioco
function regole() {
  clearContent();
  document.getElementById("suggerimento").style.display = "none";
  var myDiv = document.getElementById("divContent");
  var welcomeMsg = document.createElement("h3");
  welcomeMsg.id = "welcomeMsg";
  welcomeMsg.innerHTML = "Benvenuto nel gioco";
  myDiv.appendChild(welcomeMsg);

  var divRegole = document.createElement("div");
  divRegole.className = "classRegole";
  divRegole.id = "regole";
  var regole = jsonFile.regole;
  for (i = 0; i < regole.length; i++) {
    divRegole.innerHTML += i + 1 + ". " + regole[i] + "<br>";
  }
  myDiv.appendChild(divRegole);

  var paragrafo = document.createElement("p");
  paragrafo.className += "center mb-5 title";
  paragrafo.style = "font-size: 20px; margin-top: 4rem";
  paragrafo.innerHTML = "Premi il tasto per iniziare a giocare";

  myDiv.appendChild(paragrafo);

  var btnStart = document.createElement("button");
  btnStart.className += "btn btn-success btn-lg";
  btnStart.id = "btnStart";
  btnStart.innerHTML = "Inizia";

  btnStart.onclick = function () {
    introduzione();
  };
  myDiv.appendChild(btnStart);

  var divSettings = document.createElement("div");
  divSettings.id = "settings";
  var volume = document.createElement("button");
  volume.id = "volumeOn";
  var sound = document.createElement("button");
  sound.id = "soundOn";
  volume.innerHTML =
    "<i class='fas fa-volume-mute fa-3x'></i> <div> Musica Off </div>";
  sound.innerHTML =
    "<i class='fas fa-play-circle fa-3x'></i> <div> Suoni On </div>";
  divSettings.appendChild(volume);
  divSettings.appendChild(sound);
  document.body.appendChild(divSettings);
  //Utilizzata libreria anime.js per le animazioni

  anime({
    targets: "#regole",
    translateX: [{ value: 250, duration: 1000 }, { value: 0 }],
    easing: "easeInQuad",
  });

  anime({
    targets: " #welcomeMsg, #btnStart",
    translateX: [{ value: -250, duration: 1000 }, { value: 0 }],
    easing: "easeInQuad",
  });
}

//Istruzioni jQuery per accensione e spegnimento della musica

$(function () {
  $(document).on("click", "#volumeOn", function () {
    var btn = document.getElementById("volumeOn");
    var audio = document.getElementById("backgroundMusic");
    if (volumeCounter) {
      volumeCounter = !volumeCounter;
      btn.innerHTML =
        "<i class='fas fa-volume-mute fa-3x'></i> <div> Musica Off </div>";
      audio.pause();
    } else {
      volumeCounter = !volumeCounter;
      btn.innerHTML =
        "<i class='fas fa-volume-up fa-3x'></i> <div> Musica On </div>";
      audio.play();
    }
  });
});

//Istruzioni jQuery per accensione e spegnimento dei suoni

$(function () {
  $(document).on("click", "#soundOn", function () {
    var btn = document.getElementById("soundOn");
    if (soundCounter) {
      soundCounter = !soundCounter;
      btn.innerHTML =
        "<i class='fas fa-stop fa-3x'></i> <div> Suoni Off </div>";
    } else {
      soundCounter = !soundCounter;
      btn.innerHTML =
        "<i class='fas fa-play-circle fa-3x'></i> <div> Suoni On </div>";
    }
  });
});

//Attivazione suono per risposta corretta

function playCorrect() {
  var audioCorrect = document.getElementById("audioCorrect");
  if (soundCounter) audioCorrect.play();
}
//Attivazione suono per risposta errata

function playWrong() {
  var audio = document.getElementById("audioWrong");
  if (soundCounter) audio.play();

  var didascalia = document.getElementById("didascalia");
  var divRispostaCorretta = document.createElement("DIV");
  divRispostaCorretta.style = "margin-top:1rem; font-style:italic; color: green";
  divRispostaCorretta.innerHTML= "La risposta corretta è: " + jsonFile.File[indiceSezione].risposteCorrette[indiceDomanda];
  didascalia.appendChild(divRispostaCorretta);
}

//funzione per la simulazione di un timer
function timer() {
  var tempSecondi;
  var tempMinuti;
  var tempOre;
  secondi = secondi + 1;
  if (secondi > 59) {
    secondi = 0;
    minuti = minuti + 1;
  }
  if (minuti > 59) {
    minuti = 0;
    ore = ore + 1;
  }
  if (secondi < 10) tempSecondi = "0" + secondi;
  else tempSecondi = secondi;
  if (minuti < 10) tempMinuti = "0" + minuti;
  else tempMinuti = minuti;
  if (ore < 10) tempOre = "0" + ore;
  else tempOre = ore;

  document.getElementById("divTimer").innerHTML =
    "<b>Tempo</b>: " + tempOre + ":" + tempMinuti + ":" + tempSecondi;
  document.getElementById("divTimer").style = "color:#DC143C";
}

//Visualizzazione dell'introduzione al gioco

function introduzione() {
  myTimer = setInterval(timer, 1000);
  clearContent();
  document.getElementById("settings").style.display = "none";
  document.getElementById("domanda").style.display = "none";
  var myDiv = document.getElementById("divContent");

  var divIntro = document.createElement("DIV");
  var divIntroText = document.createElement("DIV");
  divIntro.className = "borderNarrazione";
  divIntroText.innerHTML = jsonFile.introduzione;
  divIntroText.id = "divIntroText";
  divIntro.style = "font-size: 13px; font-weight: bold";
  divIntro.id = "divIntro";
  document.getElementById("suggerimento").style.display = "none";
  var btnNext = document.createElement("button");
  btnNext.className += "btn btn-success btn-lg mt-1";
  btnNext.innerHTML = "NEXT";
  btnNext.id = "startGame";
  btnNext.onclick = function () {
    clearContent();
    narrazione();
  };
  var divImg = document.createElement("div");
  divImg.style = "margin: 20px";
  var myImg = document.createElement("img");
  myImg.src = "img/" + jsonFile.introduzioneImmagine + ".png";
  myImg.width = 200;
  myImg.id = "myImg";
  myDiv.appendChild(divImg);
  myDiv.appendChild(divIntro);
  divIntro.appendChild(divIntroText);
  divImg.appendChild(myImg);
  divIntro.appendChild(btnNext);

  anime({
    targets: "#startGame, #divIntro",
    translateY: [{ value: 250, duration: 1000 }, { value: 0 }],
    easing: "easeInSine",
  });
}

//function per la visualizzazione della narrazione prima della domanda
function narrazione() {
  clearContent();
  var myDiv = document.getElementById("divContent");

  document.getElementById("domanda").style.display = "none";
  document.getElementById("suggerimento").style.display = "none";

  var narr = document.createElement("div");
  narr.className = "borderNarrazione";
  var narrText = document.createElement("div");
  var btnNextQuestion = document.createElement("button");
  narrText.innerHTML = jsonFile.narrazione[indiceSezione];
  narrText.id = "narrText";
  narrText.innerHTML = narrText.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  btnNextQuestion.className = "btn btn-success btn-lg mt-5";
  btnNextQuestion.innerHTML = "NEXT";
  btnNextQuestion.id = "nextQuest";
  btnNextQuestion.onclick = function () {
    clearContent();
    gestioneDomandaSuccessiva();
  };

  var divImg = document.createElement("div");
  var myImg = document.createElement("img");
  divImg.style = "margin-top: 10px; margin-bottom: 10px";
  myImg.style = "padding-top: 10px; padding-bottom: 10px;";
  myImg.src = "img/" + jsonFile.oggetto[indiceSezione] + ".png";
  myImg.width = 200;
  myImg.id = "myImg";

  myDiv.appendChild(divImg);
  divImg.appendChild(myImg);
  myDiv.appendChild(narr);
  narr.appendChild(narrText);
  narr.appendChild(btnNextQuestion);

  anime({
    targets: "#myImg",
    easing: "easeInOutSine",
    rotateX: { value: "3turn", duration: 2000 },
  });
  anime.timeline({ loop: false }).add({
    targets: "#narrText .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 20 * i,
  });
}

//caricamento di una domanda
function loadDomanda() {
  var dom = document.getElementById("domanda");
  dom.innerHTML = jsonFile.File[indiceSezione].domanda[indiceDomanda];
  dom.innerHTML = dom.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  anime.timeline({ loop: false }).add({
    targets: "#domanda .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 20 * i,
  });
}

//Visualizzazione dell'indizio a seguito di una risposta corretta
// o della terminazione delle domande della sezione
function indizio() {
  if (checkRisposta == true) {
    var myModal = document.getElementById("textModal");
    myModal.innerHTML = jsonFile.indizio[indiceSezione];

    var myModalPunteggio = document.getElementById("textPunteggio");
    myModalPunteggio.innerHTML =
      "Punteggio: +" + arrayNumeroDomande[indiceSezione] * 100;

    $("#exampleModal").modal("toggle");
  } else {
    if (jsonFile.File[indiceSezione].domanda.length - 1 == indiceDomanda) {
      var myModal = document.getElementById("textModal");
      myModal.innerHTML = jsonFile.indizio[indiceSezione];

      var myModalPunteggio = document.getElementById("textPunteggio");
      myModalPunteggio.innerHTML =
        "Punteggio: " + arrayNumeroDomande[indiceSezione];

      $("#exampleModal").modal("toggle");
    }
  }
}

// function che carica la domanda successiva in base alla correttezza della domanda precedente
function domandaSuccessiva() {
  document.getElementById("rispostaCorretta").style.display = "none";
  document.getElementById("rispostaErrata").style.display = "none";
  document.getElementById("next").style.display = "none";
  document.getElementById("didascalia").style.visibility = "hidden";

  booleanCounter = false;
  document.getElementById("apriSuggerimento").style.visibility = "hidden";

  if (checkRisposta == true) {
    sezioneSuccessiva();
  } else {
    indiceDomanda++;
    if (jsonFile.File[indiceSezione].domanda.length > indiceDomanda) {
      gestioneDomandaSuccessiva();
    } else {
      sezioneSuccessiva();
    }
  }
}

// function che legge dal file JSON il tipo della domanda successiva e in base a tale valore richiama il metodo corrispondente
function gestioneDomandaSuccessiva() {
  document.getElementById("domanda").style.display = "block";
  document.getElementById("suggerimento").style.display = "block";
  switch (jsonFile.File[indiceSezione].tipo) {
    case 0:
      tipoZero();
      break;
    case 1:
      tipoUno();
      break;
    case 2:
      tipoDue();
      break;
    case 3:
      tipoTre();
      break;
    case 4:
      tipoQuattro();
      break;
    case 5:
      tipoCinque();
      break;
    case 6:
      tipoSei();
      break;
    case 7:
      tipoSette();
      break;
    default:
      break;
  }
}

// function che incrementa l'indice della sezione
function sezioneSuccessiva() {
  arrayIndex++;
  indiceSezione = array[arrayIndex];
  indiceDomanda = 0;
  narrazione();
}

// function che mostra/nasconde il suggerimento
function suggerimento() {
  booleanCounter = !booleanCounter;
  var popup = document.getElementById("apriSuggerimento");
  if (booleanCounter) {
    popup.style.visibility = "visible";
    popup.style.animation = "fadeIn 1s";
  } else popup.style.visibility = "hidden";
}

// function che gestisce il pulsante "next" (permette di passare alla domanda successiva) e il pulsante "endGame" (per finire il gioco)
function setNextEndBtn() {
  if (checkRisposta == true && arrayIndex + 1 < array.length) {
    document.getElementById("next").style.display = "block";
  } else if (checkRisposta == true && arrayIndex + 1 == array.length) {
    document.getElementById("endGame").style.display = "block";
  }

  if (
    checkRisposta == false &&
    indiceDomanda + 1 < jsonFile.File[indiceSezione].domanda.length
  ) {
    document.getElementById("next").style.display = "block";
  } else if (checkRisposta == false && arrayIndex + 1 == array.length) {
    document.getElementById("endGame").style.display = "block";
  } else if (checkRisposta == false && arrayIndex + 1 < array.length) {
    document.getElementById("next").style.display = "block";
  }
}

function fineDelGioco() {
  clearContent();
  var myDiv = document.getElementById("divContent");
  document.getElementById("rispostaCorretta").style.display = "none";
  document.getElementById("rispostaErrata").style.display = "none";
  document.getElementById("endGame").style.display = "none";
  document.getElementById("domanda").innerHTML = "";
  document.getElementById("didascalia").innerHTML = "";
  document.getElementById("suggerimento").style.display = "none";
  var messFinale = document.createElement("div");
  messFinale.innerHTML = jsonFile.Fine;
  myDiv.appendChild(messFinale);

  var punteggioTotale = 0;
  var tempoImpiegato = ore * 60 * 60 + minuti * 60 + secondi;

  for (var i = 0; i < arrayNumeroDomande.length; i++) {
    punteggioTotale += arrayNumeroDomande[i];
  }

  clearInterval(myTimer);

  var punteggio = document.createElement("H3");
  var punteggioTempo = Math.trunc((1 / tempoImpiegato) * 100);

  punteggio.innerHTML = "Punteggio: " + punteggioTotale * 100 + punteggioTempo;
  messFinale.appendChild(punteggio);

  var divImgFinale = document.createElement("DIV");
  var imgFinale = document.createElement("IMG");
  imgFinale.src = "img/" + jsonFile.ImmagineFine + ".png";
  imgFinale.style.marginTop = "10px";
  imgFinale.width = 300;
  divImgFinale.appendChild(imgFinale);
  messFinale.appendChild(divImgFinale);
}

//Visualizzazione della correttezza o meno della risposta data

function stampaRisposta(checkRisposta) {
  if (checkRisposta) {
    document.getElementById("rispostaCorretta").style.display = "block";
    anime({
      targets: "#rispostaCorretta",
      translateY: [
        { value: 20, duration: 1200 },
        { value: 0, duration: 1200 },
      ],
      rotate: {
        value: "1turn",
        easing: "easeInOutSine",
      },
      fontSize: 2,
    });
    playCorrect();
  } else {
    document.getElementById("rispostaErrata").style.display = "block";
    arrayNumeroDomande[indiceSezione] = arrayNumeroDomande[indiceSezione] - 1;
    anime({
      targets: "#rispostaErrata",
      fontSize: [
        { value: 3, duration: 1000 },
        { value: 1, duration: 1000 },
        { value: 2 },
      ],
      easing: "linear",
    });
    playWrong();
  }
}

// function che carica la domanda di tipo Zero
function tipoZero() {
  clearContent();
  var myDiv = document.getElementById("divContent");

  loadDomanda();

  //carica l'immagine
  var divImg = document.createElement("div");
  var myImg = document.createElement("img");
  myImg.src =
    "img/" + jsonFile.File[indiceSezione].immagine[indiceDomanda] + ".png";
  myImg.style = "width: 60%";

  divImg.appendChild(myImg);
  myDiv.appendChild(divImg);

  //carica le opzioni
  var divOpzioni = document.createElement("div");
  opzione = jsonFile.File[indiceSezione].opzioni[indiceDomanda];
  for (var i = 0; i < opzione.length; i++) {
    var btn = document.createElement("BUTTON");
    btn.className += "btn btn-primary btn-lg m-2 mt-4 ";
    btn.id = "btnTipoZero";
    btn.style = "padding: 0px";
    btn.innerHTML =
      "<div style='font-size: 26px' id=" +
      opzione[i] +
      ">" +
      opzione[i] +
      "</div>";

    divOpzioni.appendChild(btn);

    //carica la risposta corretta
    rispostaCorretta =
      jsonFile.File[indiceSezione].risposteCorrette[indiceDomanda];

  }
  myDiv.appendChild(divOpzioni);
  //carica il suggerimento
  document.getElementById("apriSuggerimento").innerHTML =
    jsonFile.File[indiceSezione].suggerimento[indiceDomanda];

  anime({
    targets: " #btnTipoZero",
    translateX: [{ value: 250, duration: 1000 }, { value: 0 }],
    rotate: "1turn",
    easing: "easeInSine",
  });
  anime({
    targets: "#btnTipoZero",
    translateX: [{ value: -250, duration: 1000 }, { value: 0 }],
    rotate: "1turn",
    easing: "easeInSine",
  });
}

// function che controlla la correttezza della risposta di una domanda di tipo Zero
$(function () {
  $(document).on("click", "#btnTipoZero", function () {
    $('button[id^="btnTipoZero"]').prop("disabled", true);
    document.getElementById("didascalia").style.visibility = "visible";
    didascalia = jsonFile.File[indiceSezione].didascalia[indiceDomanda];
    document.getElementById("didascalia").innerHTML = didascalia;

    var divId = event.srcElement.id;

    if (divId == rispostaCorretta) {
      checkRisposta = true;
    } else {
      checkRisposta = false;
    }

    stampaRisposta(checkRisposta);
    indizio();
    setNextEndBtn();
  });
});

// function che carica la domanda di tipo Uno
function tipoUno() {
  clearContent();
  var myDiv = document.getElementById("divContent");
  loadDomanda();

  //carica l'immagine
  var myImg = document.createElement("img");
  myImg.src =
    "img/" + jsonFile.File[indiceSezione].immagine[indiceDomanda] + ".png";
  //myImg.width = 200;
  myImg.style = "width: 60%";

  myDiv.appendChild(myImg);

  //carica l'inputbox
  var textBox = document.createElement("input");
  textBox.className += "input-group-append mt-5 w-200 h-150";
  textBox.id = "textBox";
  textBox.type = "text";
  myDiv.appendChild(textBox);

  //carica il pulsante di invio
  var submitBtn = document.createElement("button");
  submitBtn.className += "btn btn-dark m-4 btn-md";
  submitBtn.id = "submitBtn";
  submitBtn.innerHTML = "Invia";
  myDiv.appendChild(submitBtn);

  //carica il suggerimento
  document.getElementById("apriSuggerimento").innerHTML =
    jsonFile.File[indiceSezione].suggerimento[indiceDomanda];

  //carica la risposta corretta
  rispostaCorretta =
    jsonFile.File[indiceSezione].risposteCorrette[indiceDomanda];
}

// function che controlla la correttezza della risposta di una domanda di tipo Uno
$(function () {
  $(document).on("click", "#submitBtn", function () {
    $('button[id^="submitBtn"]').prop("disabled", true);
    document.getElementById("didascalia").style.visibility = "visible";
    didascalia = jsonFile.File[indiceSezione].didascalia[indiceDomanda];
    document.getElementById("didascalia").innerHTML = didascalia;

    var textBoxValue = document.getElementById("textBox").value;

    if (textBoxValue == rispostaCorretta) {
      checkRisposta = true;
    } else {
      checkRisposta = false;
    }

    stampaRisposta(checkRisposta);
    indizio();
    setNextEndBtn();
  });
});

// function che carica la domanda di tipo Due
function tipoDue() {
  clearContent();
  var myDiv = document.getElementById("divContent");

  loadDomanda();

  //carica l'immagine
  var myImg = document.createElement("img");
  myImg.src =
    "img/" + jsonFile.File[indiceSezione].immagine[indiceDomanda] + ".png";
  myImg.style = "width: 20%";

  myImg.style = "margin-bottom: 10px";
  myDiv.appendChild(myImg);

  //carica le opzioni tramite radio button
  var divOpzioni = document.createElement("div");
  divOpzioni.setAttribute("align", "left");
  myDiv.appendChild(divOpzioni);
  opzione = jsonFile.File[indiceSezione].opzioni[indiceDomanda];
  for (var i = 0; i < opzione.length; i++) {
    var spazio = document.createElement("BR");
    var radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");
    radioBtn.style = "margin-left: 110px";
    radioBtn.value = opzione[i];
    radioBtn.setAttribute("name", "radioBtnName");
    divOpzioni.appendChild(radioBtn);
    var label = document.createElement("label");
    label.style = "margin-left: 10px";
    label.innerHTML = opzione[i];
    divOpzioni.appendChild(label);
    divOpzioni.appendChild(spazio);

    //carica risposta corretta
    rispostaCorretta =
      jsonFile.File[indiceSezione].risposteCorrette[indiceDomanda];
  }

  //carica suggerimento
  document.getElementById("apriSuggerimento").innerHTML =
    jsonFile.File[indiceSezione].suggerimento[indiceDomanda];

  //carica il pulsante invia
  var inviaBtn = document.createElement("BUTTON");
  inviaBtn.className += "btn btn-dark btn-md m-5";
  inviaBtn.id = "invio";
  inviaBtn.innerHTML = "Invia";
  myDiv.appendChild(inviaBtn);
}

// function che controlla la correttezza della risposta di una domanda di tipo Due
$(function () {
  $(document).on("click", "#invio", function () {
    $('button[id^="invio"]').prop("disabled", true);
    document.getElementById("didascalia").style.visibility = "visible";
    didascalia = jsonFile.File[indiceSezione].didascalia[indiceDomanda];
    document.getElementById("didascalia").innerHTML = didascalia;

    var radioButtons = document.getElementsByName("radioBtnName");
    var selectedBtn;
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        selectedBtn = radioButtons[i].value;
      }
    }

    if (selectedBtn == rispostaCorretta) {
      checkRisposta = true;
    } else {
      checkRisposta = false;
    }
    stampaRisposta(checkRisposta);
    indizio();
    setNextEndBtn();
  });
});

// function che carica la domanda di tipo Tre
function tipoTre() {
  clearContent();
  countTre = 0;
  rispostaTre = "";
  var myDiv = document.getElementById("divContent");

  //carica la domanda
  loadDomanda();

  //carica il suggerimento
  document.getElementById("apriSuggerimento").innerHTML =
    jsonFile.File[indiceSezione].suggerimento[indiceDomanda];

  //carica le opzioni
  opzione = jsonFile.File[indiceSezione].opzioni[indiceDomanda];
  for (var i = 0; i < opzione.length; i++) {
    var btn = document.createElement("BUTTON");
    btn.className += "btn btn-primary btn-md m-2 mt-4 ";
    btn.id = "btnTipoTre";
    btn.style = "padding: 0px";
    btn.innerHTML =
      "<div style='font-size: 16px' id=" +
      opzione[i] +
      ">" +
      opzione[i].replaceAll("_", " ") +
      "</div>";
    myDiv.appendChild(btn);
  }
  anime({
    targets: "#btnTipoTre",
    translateX: [{ value: -250, duration: 1000 }, { value: 0 }],
    easing: "easeInQuad",
  });

  //carica la lable continente le opzioni nell'ordine selezionato
  var labelDiv = document.createElement("DIV");
  var myLabel = document.createElement("LABEL");
  myLabel.id = "myLabelId";
  myLabel.style = "margin-left: 10px";
  labelDiv.appendChild(myLabel);
  myDiv.appendChild(labelDiv);

  // carica la risposta corretta
  rispostaCorretta =
    jsonFile.File[indiceSezione].risposteCorrette[indiceDomanda];
}

// function che controlla la correttezza della risposta di una domanda di tipo Tre
$(function () {
  $(document).on("click", "#btnTipoTre", function () {
    $(this).prop("disabled", true);
    countTre++;
    var divIdTipoTre = event.srcElement.id;
    rispostaTre += divIdTipoTre.replaceAll("_", " ") + "<br>";
    var orderedLabel = document.getElementById("myLabelId");
    orderedLabel.innerHTML = rispostaTre;
    if (countTre == opzione.length) {
      document.getElementById("didascalia").style.visibility = "visible";
      didascalia = jsonFile.File[indiceSezione].didascalia[indiceDomanda];
      document.getElementById("didascalia").innerHTML = didascalia;

      if (rispostaTre.replaceAll("<br>", " - ") == rispostaCorretta) {
        checkRisposta = true;
      } else {
        checkRisposta = false;
      }

      stampaRisposta(checkRisposta);
      indizio();
      setNextEndBtn();
    }
  });
});

// function che carica la domanda di tipo Quattro
function tipoQuattro() {
  clearContent();
  countQuattro = 0;
  rispostaQuattro = "";
  var myDiv = document.getElementById("divContent");

  loadDomanda();

  //carica il suggerimento
  document.getElementById("apriSuggerimento").innerHTML =
    jsonFile.File[indiceSezione].suggerimento[indiceDomanda];

  //carica le opzioni con le relative immagini
  opzione = jsonFile.File[indiceSezione].opzioni[indiceDomanda];
  for (var i = 0; i < opzione.length; i++) {
    var btn = document.createElement("BUTTON");
    btn.className += "btn btn-primary btn-md m-2 mt-4 ";
    btn.id = "btnTipoQuattro";
    btn.style = "padding: 0px; width=200px; max-width:60%; height: auto";
    btn.innerHTML =
      "<div id='" +
      opzione[i] +
      " style='padding: 0px'><img id=" +
      opzione[i] +
      " src=img/" +
      opzione[i] +
      ".png width='200px' max-width:'60%' height='auto'></div>" +
      opzione[i].replaceAll("_", " ") +
      "</div>";
    myDiv.appendChild(btn);
  }
  anime({
    targets: "#btnTipoQuattro",
    translateX: [{ value: -250, duration: 1000 }, { value: 0 }],
    easing: "easeInQuad",
  });

  //carica la lable continente le opzioni nell'ordine selezionato
  var labelDiv = document.createElement("DIV");
  var myLabel = document.createElement("LABEL");
  myLabel.id = "myLabelId";
  myLabel.style = "margin-left: 10px";
  labelDiv.appendChild(myLabel);
  myDiv.appendChild(labelDiv);

  //carica la risposta corretta
  rispostaCorretta =
    jsonFile.File[indiceSezione].risposteCorrette[indiceDomanda];
}

// function che controlla la correttezza della risposta di una domanda di tipo Quattro
$(function () {
  $(document).on("click", "#btnTipoQuattro", function () {
    $(this).prop("disabled", true);
    countQuattro++;
    var divIdTipoQuattro = event.srcElement.id;
    rispostaQuattro += divIdTipoQuattro.replaceAll("_", " ") + "<br>";
    var orderedLabel = document.getElementById("myLabelId");
    orderedLabel.innerHTML = rispostaQuattro;

    console.log(rispostaQuattro);

    if (countQuattro == opzione.length) {
      document.getElementById("didascalia").style.visibility = "visible";
      didascalia = jsonFile.File[indiceSezione].didascalia[indiceDomanda];
      document.getElementById("didascalia").innerHTML = didascalia;

      if (rispostaQuattro.replaceAll("<br>", " - ") == rispostaCorretta) {
        checkRisposta = true;
      } else {
        checkRisposta = false;
      }

      stampaRisposta(checkRisposta);
      indizio();
      setNextEndBtn();
    }
  });
});

// function che carica la domanda di tipo Cinque
function tipoCinque() {
  clearContent();
  var myDiv = document.getElementById("divContent");
  //carica la domanda
  loadDomanda();

  // carica il suggerimento
  document.getElementById("apriSuggerimento").innerHTML =
    jsonFile.File[indiceSezione].suggerimento[indiceDomanda];

  //carica l'immagine
  var myImg = document.createElement("img");
  myImg.src =
    "img/" + jsonFile.File[indiceSezione].immagine[indiceDomanda] + ".png";
  myImg.width = 200;
  myDiv.appendChild(myImg);

  //carica le opzioni
  var myOption = document.createElement("DIV");
  opzione = jsonFile.File[indiceSezione].opzioni[indiceDomanda];
  for (var i = 0; i < opzione.length; i++) {
    var btn = document.createElement("BUTTON");
    btn.className += "btn btn-primary btn-md m-2 mt-4 ";
    btn.id = "btnTipoCinque";
    btn.style = "padding: 0px";
    btn.innerHTML =
      "<img id=" +
      opzione[i] +
      " src=img/" +
      opzione[i] +
      ".png width='80' height='80'> ";
    myOption.appendChild(btn);
  }
  myDiv.appendChild(myOption);
  rispostaCorretta =
    jsonFile.File[indiceSezione].risposteCorrette[indiceDomanda];
}

// function che controlla la correttezza della risposta di una domanda di tipo Cinque
$(function () {
  $(document).on("click", "#btnTipoCinque", function () {
    $('button[id^="btnTipoCinque"]').prop("disabled", true);
    document.getElementById("didascalia").style.visibility = "visible";
    didascalia = jsonFile.File[indiceSezione].didascalia[indiceDomanda];
    document.getElementById("didascalia").innerHTML = didascalia;

    var divId = event.srcElement.id;
    console.log(divId + " - " + rispostaCorretta);

    if (divId == rispostaCorretta) {
      checkRisposta = true;
    } else {
      checkRisposta = false;
    }

    stampaRisposta(checkRisposta);
    indizio();
    setNextEndBtn();
  });
});

// function che carica la domanda di tipo Sei
function tipoSei() {
  clearContent();
  var myDiv = document.getElementById("divContent");

  //carica la domanda
  loadDomanda();

  //carica il suggerimento
  document.getElementById("apriSuggerimento").innerHTML =
    jsonFile.File[indiceSezione].suggerimento[indiceDomanda];

  //carica le opzioni
  opzione = jsonFile.File[indiceSezione].opzioni[indiceDomanda];
  for (var i = 0; i < opzione.length; i++) {
    var btn = document.createElement("BUTTON");
    btn.className += "btn btn-info btn-lg m-2";
    btn.id = "btnTipoSei";
    btn.innerHTML =
      "<img id=" +
      opzione[i] +
      " src=img/" +
      opzione[i] +
      ".png width='120' height='80'> ";
    btn.style = "padding: 0px";
    myDiv.appendChild(btn);
  }

  //carica risposta corretta
  rispostaCorretta =
    jsonFile.File[indiceSezione].risposteCorrette[indiceDomanda];
}

// function che controlla la correttezza della risposta di una domanda di tipo Sei
$(function () {
  $(document).on("click", "#btnTipoSei", function () {
    $('button[id^="btnTipoSei"]').prop("disabled", true);
    document.getElementById("didascalia").style.visibility = "visible";
    didascalia = jsonFile.File[indiceSezione].didascalia[indiceDomanda];
    document.getElementById("didascalia").innerHTML = didascalia;

    var imgId = event.srcElement.id;

    if (imgId == rispostaCorretta) {
      checkRisposta = true;
    } else {
      checkRisposta = false;
    }

    stampaRisposta(checkRisposta);
    indizio();
    setNextEndBtn();
  });
});

function tipoSette() {
  clearContent();
  var myDiv = document.getElementById("divContent");
  //carica la domanda
  loadDomanda();
  // nasconde il suggerimento
  document.getElementById("suggerimento").style.visibility = "hidden";

  var myArticle = document.createElement("ARTICLE");

  for (var i = 1; i < 7; ++i) {
    var str = "div" + i + " = document.createElement('DIV')";
    eval(str);
    var strId = "div" + i + ".id = 'piece-" + i + "'";
    eval(strId);
    var strClassName = "div" + i + ".className = 'pieces'";
    eval(strClassName);
    var strImage =
      "div" +
      i +
      ".style.backgroundImage='url(img/" +
      jsonFile.File[indiceSezione].immagine[i - 1] +
      ".png)'";
    eval(strImage);
    var strAppendChild = "myArticle.appendChild(div" + i + ")";
    eval(strAppendChild);
  }
  myDiv.appendChild(myArticle);

  shuffleTiles();
  var tileClicked = false;
  var firstTileClicked;
  var secondTileClicked;
  var topPosFir = 0;
  var leftPosFir = 0;
  var topPosSec = 0;
  var leftPosSec = 0;

  function shuffleTiles() {
    //console.log(shuffle);
    $("#piece-1").css({ top: 200, left: 166 });
    $("#piece-2").css({ top: 0, left: 166 });
    $("#piece-3").css({ top: 200, left: 83 });
    $("#piece-4").css({ top: 0, left: 83 });
    $("#piece-5").css({ top: 200, left: 0 });
    $("#piece-6").css({ top: 0, left: 0 });
  }

  $(".pieces").click(function () {
    if (tileClicked == false) {
      //  Se nessuna tessera è selezionata
      //  setta le variabili
      firstTileClicked = $(this).attr("id");
      topPosFir = parseInt($(this).css("top"));
      leftPosFir = parseInt($(this).css("left"));

       //  evidenzia tessera
      $(this).addClass("glow");
      tileClicked = true;
    } else {
      //  Se una tessera viene cliccata
      //  setta variabili
      secondTileClicked = $(this).attr("id");
      topPosSec = parseInt($(this).css("top"));
      leftPosSec = parseInt($(this).css("left"));

      //  animazioni
      $("#" + firstTileClicked).css({ top: topPosSec, left: leftPosSec });
      $("#" + secondTileClicked).css({ top: topPosFir, left: leftPosFir });

      // togli l'evidenziamento e resetta la prima tessera
      $(".pieces").removeClass("glow");
      tileClicked = false;

      //Controlla la correttezza della risposta
      setTimeout(function () {
        if (
          $("#piece-1").css("left") == "0px" &&
          $("#piece-1").css("top") == "0px" &&
          $("#piece-2").css("left") == "83px" &&
          $("#piece-2").css("top") == "0px" &&
          $("#piece-3").css("left") == "166px" &&
          $("#piece-3").css("top") == "0px" &&
          $("#piece-4").css("left") == "0px" &&
          $("#piece-4").css("top") == "200px" &&
          $("#piece-5").css("left") == "83px" &&
          $("#piece-5").css("top") == "200px" &&
          $("#piece-6").css("left") == "166px" &&
          $("#piece-6").css("top") == "200px"
        ) {
          $("article").addClass("glow-2");
          checkRisposta = true;
          stampaRisposta(checkRisposta);
          indizio();
          setNextEndBtn();
          document.getElementById("didascalia").style.visibility = "visible";
          didascalia = jsonFile.File[indiceSezione].didascalia[indiceDomanda];
          document.getElementById("didascalia").innerHTML = didascalia;
        }
      }, 1000);
    }
  });
}
