// prendo gli elementi su cui devo andare a lavorare

const istruzioniEl = document.getElementById("instructions");
const countDownEl = document.getElementById("countdown");
const numberListEl = document.getElementById("numbers-list");
const formAnswerEl = document.getElementById("answers-form");
const inputAnswerEl = document.getElementById("input-group");

// devo far comparire per un tempo x 5 nuemri random da confrontare con quelli dell'utente e un contdown
let NumberMemo = [];
for (let i = 0, t = 5; i < t; i++) {
  NumberMemo.push(Math.round(Math.random() * 99));
}
console.log(NumberMemo);
numberListEl.innerHTML += NumberMemo;

setInterval(() => {
  numberListEl.classList.add("d-none");
  formAnswerEl.classList.remove("d-none");
}, 8000);
