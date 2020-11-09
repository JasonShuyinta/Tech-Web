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


/************************************
 $.ajax({
  type: "GET",
  headers: { "Access-Control-Allow-Origin": "*" },
  url: "/home/web/site192017/data/primaFascia.json",
}).done(function readJson(primaFascia) {
  var titolo = primaFascia.titolo1;
  document.getElementById("titolo").innerHTML = titolo;

  jsonFile = JSON.parse(JSON.stringify(primaFascia));

  var j = 0;
  for (var i = indicePartenza; i < jsonFile.File.length; i++) {
    array[j] = i;
    j++;
  }
  for (var i = 0; i < indicePartenza; i++) {
    array[j] = i;
    j++;
  }

  regole();
});
**********************************************/



/************************************************/
var myObj = '{"titolo1": "Il Mistero del Vaso Rotto","regole": ["Questo è un gioco individuale","Per ogni domanda è presente solo una risposta corretta","Le domande hanno diversi livelli di difficoltà","Tocca la lampadina per avere un suggerimento","Per rispondere ad alcune domande dovrai interagire con l\' ambiente intorno a te","E  obbligatorio imparare divertendosi!"],"introduzione": "OH NOO!! <br> Qualcuno ha rotto un preziosissimo vaso greco! <br> La tua missione è scoprire chi è stato! <br> Cerca degli indizi in giro per il museo per consegnare il colpevole nelle mani della giustizia! <br> Guarda! Ci sono degli oggetti vicino al vaso rotto. Potrebbero essere collegati al colpevole. Andiamo ad esaminarli da vicino!","narrazione": ["E\' stato trovato un cappello! E\' molto particolare! Sembra tipico di un paese. Andiamo a cercare informazione nella Sala del Mondo.","Guarda c\'è una moneta! Sopra c\'è l\'incisione della regina Elisabetta. Andiamo a scoprire in quale stato regna la famosa regina","Accanto alla scena del crimine, è stata trovata una cartolina molto rovinata! Vai nella Sala dei Monumenti e cerca di scoprire in che paese si trova il monumento raffigurato nella cartolina.","Guarda! c\'è un puzzle di fianco al vaso, pare ci sia rappresentato un dipinto. Vai nella Sala dei Quadri e cerca di risolverlo. E vedi cosa scopri"],"oggetto": ["irish", "sterlina", "cartolina", "MonnaLisa"],"indizio": ["Pare che il sospettato n.1 sia irlandese","Pare che il sospettato n.2 sia inglese","Pare che il sospettato n.3 sia francese","Un\'altro indizio che porta al sospettato francese"],"File": [{"tipo": 0,"domanda": ["Il cappello proviene dal paese mostrato qui. Secondo te qual è il nome di questo paese? ","In quale continente si trova questo paese?","In quale emisfero si trova questo paese?"],"opzioni": [["Italia", "Australia", "Russia", "Irlanda"],["Asia", "Europa", "Oceania", "Africa", "America", "Antartide"],["Australe", "Boreale"]],"risposteCorrette": ["Irlanda", "Europa", "Boreale"],"didascalia": ["La Repubblica di Irlanda occupa la maggior parte dell\'isola d\'Irlanda, al largo delle coste di Galles e Inghilterra. La sua capitale, Dublino, è la città natale di scrittori quali Oscar Wilde e della birra Guinness.","L\'Europa è una regione geografica del mondo, comunemente considerata un continente in base a fattori storico-culturali e geopolitici, l\'unico situato interamente nell\'emisfero settentrionale. Costituisce l\'estremità occidentale del supercontinente euroasiatico, o anche una delle tre parti del supercontinente Eurafrasia","L\'emisfero boreale anche detto emisfero nord o emisfero settentrionale è la calotta semisferica del globo terrestre posta a nord dell\'equatore, quindi con latitudine N. L\'altra metà del globo è detta emisfero australe."],"suggerimento": ["E\' la terra degli gnomi!","E\' anche detto il Vecchio Continente","Al nord dell\'Equatore"],"immagine": ["Irlanda", "Irlanda", "Irlanda"]},{"tipo": 6,"domanda": ["Vai nella Sala dei Reali e scopri la nazionalità della regina","Vai nella Sala del Mondo e scopri qual è il monumento più famoso del Regno Unito","Guarda il mappamondo presente al centro della sala e seleziona un elemento simbolo del Regno Unito"],"opzioni": [["bandieraInghilterra","bandieraIndia","bandieraBrasile","bandieraSvizzera"],["bigBen", "piramidi", "pisa", "colosseo"],["taxiAmericano", "bus", "ferrari", "tuktuk"]],"risposteCorrette": ["bandieraInghilterra", "bigBen", "bus"],"didascalia": ["Il Regno Unito, ufficialmente Regno Unito di Gran Bretagna e Irlanda del Nord, è uno Stato insulare dell\'Europa occidentale con una popolazione di circa 64,5 milioni di abitanti.","Big Ben è il soprannome della campana più grande della torre dell\'orologio del palazzo di Westminster, a Londra. Per tradizione l\'uso del nome si è esteso per sineddoche anche all\'orologio e all\'intera torre in stile neogotico, alta 96 m, la cui edificazione iniziò nel 1834 e si concluse nel 1858.","Tra i Paesi in cui questo tipo di autobus è storicamente impiegato per il trasporto pubblico urbano, vi è la Gran Bretagna e a Londra è decisamente una delle icone più rappresentative, nonché un mezzo largamente utilizzato"],"suggerimento": ["E\' il paese in cui si usa la sterlina","E\' la torre con l\'orologio più famoso del mondo","E\' in grado di trasportare le persone su due piani"]},{"tipo": 0,"domanda": ["Sei nella Sala dei Monumenti. Trova il monumento presente nella cartolina. In quale città si trova questo monumento? ","In quale paese si trova il monumento?","In quale continente si trova questo paese?"],"opzioni": [["Roma", "Sydney", "Mosca", "Parigi"],["Marocco", "Brasile", "Germania", "Francia"],["Asia", "Europa", "Oceania", "Africa", "America", "Antartide"]],"risposteCorrette": ["Parigi", "Francia", "Europa"],"didascalia": ["La città si trova su un\'ansa della Senna, posizione molto favorevole poiché fondamentale snodo di trasporti e traffici del continente europeo","La Francia è uno Stato principalmente situato nell\'Europa occidentale, ma che possiede ugualmente territori disseminati su più oceani e altri continenti. Parigi è la capitale, la lingua ufficiale è il francese.","L\'Europa comprende una parte continentale ed una parte peninsulare, separate dall\'istmo ponto-baltico"],"suggerimento": ["E\' la città dove è ambientato il film \'Ratatouille\'","La bandiera è formata da blu, bianco e rosso","E\' il continente più vecchio"],"immagine": ["cartolina", "cartolina", "cartolina"]},{"tipo": 7,"domanda": ["Questo è un famoso dipinto chiamato Monna Lisa. Vai nella Sala del Mondo e cerca il dipinto per metterlo in ordine. Una volta trovato il dipinto, tocca due caselle per scambiarle di posizione. Infine cerca in quale paese si trova"],"didascalia": ["La Gioconda, nota anche come Monna Lisa, è un dipinto a olio su tavola di legno di pioppo realizzato da Leonardo da Vinci, databile al 1503-1504 circa e conservato nel Museo del Louvre di Parigi."],"immagine": ["monnaLisa1","monnaLisa2","monnaLisa3","monnaLisa4","monnaLisa5","monnaLisa6"]}],"Fine": "Dopo varie ricerche e aver giro vagato per il museo abbiamo scovato 4 oggetti che portano a 3 sospettati. <br> Questo significa che due oggetti portano alla stessa persona! <br> I sospettati sono: <br> <ol><li>il cappello trovato riporta a un irlandere </li> <li>la moneta trovata riporta a una inglese </li> <li>la cartolina e il puzzle riportano a un fracese.</li></ol> Con queste prove possiamo affermare che il colpevole e\' il francese! <br> MISTERO RISOLTO!!! <br> BRAVO!!! <br>","ImmagineFine": "pikachu"}';
jsonFile = JSON.parse(myObj);

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
  regole();
/************************************************/

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
  var divInt = document.createElement("DIV");
  divInt.className = "borderNarrazioneEsterna";
  divInt.id = "divInt";
  var divIntroText = document.createElement("DIV");
  divIntro.className = "borderNarrazione";
  divIntroText.innerHTML = jsonFile.introduzione;
  divIntroText.id = "divIntroText";
  divIntroText.innerHTML = divIntroText.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  divIntro.style = "font-size: 18px; font-weight: bold;";
  divIntro.id = "divIntro";
  document.getElementById("suggerimento").style.display = "none";
  var btnNext = document.createElement("button");
  btnNext.className += "btn btn-success btn-md mt-1";
  btnNext.innerHTML = "NEXT";
  btnNext.id = "startGame";
  btnNext.onclick = function () {
    clearContent();
    narrazione();
  };
  var divImg = document.createElement("div");
  var myImg = document.createElement("img");
  myImg.src = "img/pieces1.png";
  myImg.width = 200;
  myImg.id = "myImg";
  myDiv.appendChild(divImg);
  myDiv.appendChild(divInt);
  divInt.appendChild(divIntro);
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
}

//function per la visualizzazione della narrazione prima della domanda
function narrazione() {
  clearContent();
  var myDiv = document.getElementById("divContent");

  document.getElementById("domanda").style.display = "none";
  document.getElementById("suggerimento").style.display = "none";

  var narr = document.createElement("div");
  var narrBorder = document.createElement("div");
  narrBorder.className = "borderNarrazioneEsterna";
  narr.className = "borderNarrazione";
  var narrText = document.createElement("div");
  var btnNextQuestion = document.createElement("button");
  narrText.innerHTML = jsonFile.narrazione[indiceSezione];
  narrText.id = "narrText";
  narrText.innerHTML = narrText.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  btnNextQuestion.className = "btn btn-success btn-md mt-1";
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
  myDiv.appendChild(narrBorder);
  narrBorder.appendChild(narr);
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

//Visualizzazione dell'indizio a seguito di una risposta corretta
// o della terminazione delle domande della sezione
function indizio() {
  if (checkRisposta == true) {
    var myModal = document.getElementById("textModal");
    myModal.innerHTML = jsonFile.indizio[indiceSezione];
    $("#exampleModal").modal("toggle");
  } else {
    if (jsonFile.File[indiceSezione].domanda.length - 1 == indiceDomanda) {
      var myModal = document.getElementById("textModal");
      myModal.innerHTML = jsonFile.indizio[indiceSezione];
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

  var imgFinale = document.createElement("IMG");
  imgFinale.src = "img/" + jsonFile.ImmagineFine + ".png";
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

//Caricamento della domanda
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
    btn.style = "padding: 0px; width = 100px; max - width: 30 %; height: auto";
    btn.innerHTML =
      "<div id= " +
      opzione[i] +
      " style='padding:0px'><img id=" +
      opzione[i] +
      " src=img/" +
      opzione[i] +
      ".jpg width='100%' height='auto'></div>" +
      opzione[i].replaceAll("_", " ") +
      "</div>";
    myDiv.appendChild(btn);
  }

  //carica la label contenente le opzioni nell'ordine selezionato
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
  var domanda = jsonFile.File[indiceSezione].domanda[indiceDomanda];
  document.getElementById("domanda").innerHTML = domanda;
  loadDomanda();

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

// function che carica la domanda di tipo Sette
function tipoSette() {
  clearContent();
  var myDiv = document.getElementById("divContent");
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

  anime({
    targets: "#domanda",
    translateX: [{ value: 250, duration: 1000 }, { value: 0 }],
    rotate: "2turn",
    easing: "easeInSine",
  });

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
