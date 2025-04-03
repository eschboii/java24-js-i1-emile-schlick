let namn = "";
let omgang = 1;
let poang = 0;
let totalPoang = 0;
let dice = 1;
let harKastat = false;


const dieFace = ['one', 'two', 'three', 'four', 'five', 'six'];

function setNamn(){
    const params = new URLSearchParams(window.location.search);
    namn = params.get("namn");

    if (namn) {
        document.getElementById("namnBox").textContent = namn;
    }
}

function setDice(){
    dice = Math.floor(Math.random() * 6) + 1;
    setDiceFace(dice);
    countPoang(dice);
    harKastat = true;
}

function setDiceFace(dice){
    const allDice = document.querySelectorAll(".die");
    allDice.forEach(die => die.classList.remove("show"));

    
    const dieToShow = document.querySelector(`.die.${dieFace[dice - 1]}`);
    if (dieToShow) dieToShow.classList.add("show");
}

function countPoang(dice){
    if (dice === 1) {
        avslutaRunda();
    } else {
        poang += dice;
        document.getElementById("rundanBox").innerText = poang;
    }
}

function setPoang(){
    if (!harKastat) return;

    totalPoang += poang;
    document.getElementById("totPoangBox").innerText = totalPoang;

    avslutaRunda();

    if (totalPoang >= 100) {
        window.location.href = `resultat.html?namn=${encodeURIComponent(namn)}&poang=${totalPoang}&omgang=${omgang}`;
    }
}

function avslutaRunda() {
    omgang++;
    poang = 0;
    harKastat = false;

    document.getElementById("omgangBox").innerText = omgang;
    document.getElementById("rundanBox").innerText = 0;
}


window.onload = (event) => {
    setNamn();
    document.getElementById("totPoangBox").innerText = totalPoang;
    document.getElementById("omgangBox").innerText = omgang;
    document.getElementById("rundanBox").innerText = 0;
  };