var jsonFile = null;
var indiceSezione = 0;
var indicePartenza = indiceSezione;
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


/********************************************************
$.ajax({
  type: "GET",
  headers: { "Access-Control-Allow-Origin": "*" },
  url: "data/secondaFascia.json",
}).done(function readJson(secondaFascia) {
  var titolo = secondaFascia.titolo1;
  document.getElementById("titolo").innerHTML = titolo;

  jsonFile = JSON.parse(JSON.stringify(secondaFascia));

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
******************************************************/

/***************************************************** */
var myObj = '{"titolo1": "Il quadro scomparso","regole": ["Questo è un gioco di gruppo","Per ogni domanda è presente solo una risposta corretta","Le domande hanno diversi livelli di difficoltà","Tocca la lampadina per avere un suggerimento","Per rispondere ad alcune domande dovrai interagire con l\'ambiente intorno a te","Le domande più difficili hanno un punteggio più alto","Alla fine del gioco, confronta il tuo punteggio con quelli dei tuoi amici","E\' obbligatorio imparare divertendosi!"],"introduzione": "OH NOO!! <br> E\' SPARITO UN QUADRO!!! <br> la polizia brancola nel buio, aiutaci a scoprire il colpevole e a ritrovare il quadro che ha un inestimabile valore","introduzioneImmagine" : "QuadroVuoto","narrazione": ["Guarda ci sono delle impronte. Seguiamole e vediamo dove ci portano.","Questo guanto deve appartenere al colpevole, cerca nella vicinanze l\'altro guanto","Seguiamo queste tracce di detersivo e vediamo dove ci porta"],"oggetto": ["passi", "guanto", "goccia"],"indizio" : ["Guarda... c\'è un guanto in lattice...", "Ehi... cos\'è quella macchia per terra? Sembra detersivo per pavimenti... ", "Guarda... le tracce di detersivo conducono alla porta di quel ripostiglio... vai a vedere."],"File": [{"tipo": 0,"domanda": ["Le impronte si fermano vicino a questo quadro. Secondo te a quale corrente artistica appartiene?","Questo è l\'autoritratto dell\'artista che ha dipinto il quadro precedente. Come si chiama?","Van Gogh ha dipinto questo quadro che rappresenta un elemento tipico del suo paese: i tulipani. Sai indicare il suo paese di origine?"],"opzioni": [["Classico", "Impressionismo", "Barocco", "Romanticismo"],["Picasso", "Monet", "VanGogh", "Dalì"],["Francia", "Olanda", "Norvegia", "Danimarca"]],"risposteCorrette": ["Impressionismo", "VanGogh", "Olanda"],"didascalia": ["L Impressionismo è una corrente artistica sviluppatasi in Francia, a Parigi, nella seconda metà dell\'Ottocento, precisamente tra il 1860 e il 1870 e durata fino ai primi anni del Novecento.", "Vincent Willem van Gogh è stato un pittore olandese. Fu autore di quasi novecento dipinti e di più di mille disegni, senza contare i numerosi schizzi non portati a termine e i tanti appunti destinati probabilmente all\'imitazione di disegni artistici di provenienza giapponese.", "L\'Olanda è un\'area geografica dei Paesi Bassi che corrisponde approssimativamente al territorio appartenuto all\'antica Contea d\'Olanda, ovvero alle due attuali province dell\'Olanda Settentrionale e dell\'Olanda Meridionale che insieme contano circa 7 000 000 abitanti."],"suggerimento": ["Dipingevano all\'aria aperta, con una tecnica che permetteva di completare l\'opera in poche ore","il suo orecchio tagliato è leggendario","E\' il paese con tanti canali"],"immagine": ["vangogh1", "vangogh2", "vangogh3"]}, {"tipo": 1,"domanda": ["Ecco l\'altro guanto! Ci troviamo nella sala del Rinascimento Italiano. Ti trovi di fronte a questo quadro chiamato \'Primavera\'. Scrivi il cognome dell\'autore","Questo dipinto si chiama \'Ultima Cena\' ed è stato fatto da Leonardo da Vinci. Quanti apostoli sono presenti nel quadro? (scrivilo in numeri)","Questa scultura è il David di Michelangelo Buonarroti. In quale città italiana è conservata?"],"risposteCorrette": ["botticelli", "12", "firenze"],"didascalia": ["La Primavera è un dipinto a tempera su tavola di Sandro Botticelli, databile tra il 1478 e il 1482 circa. Realizzata per la villa medicea di Castello","E un dipinto parietale ottenuto con una tecnica mista a secco su intonaco (460×880 cm), databile al 1494-1498 e realizzato su commissione di Ludovico il Moro nel refettorio del convento adiacente al santuario di Santa Maria delle Grazie a Milano.","Il David è una scultura realizzata in marmo, databile tra il 1501 e l\'inizio del 1504 e conservata nella Galleria dell\'Accademia a Firenze."],"immagine": ["primavera", "ultimaCena" ,"david"],"suggerimento": ["B +- T + - + L - I","Gesù non è un apostolo","F + - + - - E"]},{"tipo": 4,"domanda": ["Le tracce finiscono in questa sala dedicata a Pablo Picasso. Leggi le didascalie dei quadri e metti in ordine cronologico.","Ci sono altre tracce che portano alla sala della Storia dell\'Arte. Leggi le didascalie dei quadri e metti in ordine cronologico."],"opzioni": [["Cubista", "Rosa", "Blu", "Tradizionale"],["Medioevo", "ArteModerna", "Barocco", "Preistoria"]],"risposteCorrette": ["Blu Rosa Cubista Tradizionale ", "Preistoria Medioevo Barocco ArteModerna "],"didascalia": ["Snodo cruciale tra la tradizione ottocentesca e l\'arte contemporanea, Picasso è stato un artista innovatore e poliedrico, che ha lasciato un segno indelebile nella storia dell\'arte mondiale per esser stato il fondatore del cubismo.","Il termine arte moderna denota lo stile e la concezione dell\'arte propri di quell\'epoca e, più in generale, alle espressioni artistiche che esprimono una forma di «rifiuto» per il passato e di apertura alla sperimentazione."],"suggerimento": ["periodo blu, periodo rosa, periodo cubista, periodo tradizionale","preistoria, medioevo, barocco, arte moderna"]}],"Fine" : "ECCO IL QUADRO!!! <br> Si trovava nel ripostiglio dell\'addetto alle pulizie. <br> Ricapitolando, le prove trovate durante l\'indagine sono: <br> <ol><li> le impronte </li> <li> il guanto in lattice</li> <li> le tracce di detersivo</li></ol> <br> Aggiungendo il fatto che il quadro si trovava all\'interno del ripostiglio dell\'addetto alle pulizie, il colpevole deve essere lui! <br> BRAVO! HAI RISOLTO IL MISTERO!!!","ImmagineFine" : "pikachu"}';
var jsonFile = JSON.parse(myObj);

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

//Visualizzazione dell'introduzione al gioco
function introduzione() {
  clearContent();
  document.getElementById("settings").style.display = "none";
  document.getElementById("domanda").style.display = "none";
  var myDiv = document.getElementById("divContent");

  var divIntro = document.createElement("DIV");
  var divIntroText = document.createElement("DIV");
  divIntro.className = "borderNarrazione";
  divIntroText.innerHTML = jsonFile.introduzione;
  divIntroText.id = "divIntroText";
  divIntroText.innerHTML = divIntroText.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  divIntro.style = "font-size: 18px; font-weight: bold";
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

  anime.timeline({ loop: false }).add({
    targets: "#divIntroText .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 450,
    delay: (el, i) => 30 * i,
  });

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

//caricamento della domanda
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

// function che legge il tipo della domanda successiva e in base a tale valore richiama il metodo corrispondente
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

//function per la conclusione del gioco
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
  for (var i = 0; i < arrayNumeroDomande.length; i++) {
    punteggioTotale += arrayNumeroDomande[i];
  }

  var punteggio = document.createElement("H3");
  punteggio.innerHTML = "Punteggio: " + punteggioTotale * 100;
  messFinale.appendChild(punteggio);

  var imgFinale = document.createElement("IMG");
  imgFinale.src = "img/" + jsonFile.ImmagineFine + ".png";
  imgFinale.style.marginTop = "10px";
  imgFinale.width = 200;
  messFinale.appendChild(imgFinale);
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
    console.log(divId);
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

    var textBoxValue = document.getElementById("textBox").value.toLowerCase();

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
  myImg.style = "width: 60%";

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
    $('button[id^="invia"]').prop("disabled", true);
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
      "<div style='font-size: 26px' id=" +
      opzione[i] +
      ">" +
      opzione[i] +
      "</div>";
    myDiv.appendChild(btn);
  }

  //carica la label continente le opzioni nell'ordine selezionato
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
    rispostaTre += divIdTipoTre + " ";
    var orderedLabel = document.getElementById("myLabelId");
    orderedLabel.innerHTML = rispostaTre;
    if (countTre == opzione.length) {
      document.getElementById("didascalia").style.visibility = "visible";
      didascalia = jsonFile.File[indiceSezione].didascalia[indiceDomanda];
      document.getElementById("didascalia").innerHTML = didascalia;

      if (rispostaTre == rispostaCorretta) {
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
    btn.style = "padding: 0px; width=100px; max-width:30%; height: auto";
    btn.innerHTML =
      "<div id= " +
      opzione[i] +
      " style='padding: 0px'><img id=" +
      opzione[i] +
      " src=img/" +
      opzione[i] +
      ".png width='100%' height='auto'></div>" +
      opzione[i].replaceAll("_", " ") +
      "</div>";
    myDiv.appendChild(btn);
  }

  //carica la label continente le opzioni nell'ordine selezionato
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
    rispostaQuattro += divIdTipoQuattro + " ";
    var orderedLabel = document.getElementById("myLabelId");
    orderedLabel.innerHTML = rispostaQuattro;
    if (countQuattro == opzione.length) {
      document.getElementById("didascalia").style.visibility = "visible";
      didascalia = jsonFile.File[indiceSezione].didascalia[indiceDomanda];
      document.getElementById("didascalia").innerHTML = didascalia;

      if (rispostaQuattro == rispostaCorretta) {
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

//Carica domanda di tipo Sette
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
