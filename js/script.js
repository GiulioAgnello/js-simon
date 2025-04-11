// FUNCTIONS
function showForm() {
  numberListEl.classList.add("d-none");
  formAnswerEl.classList.remove("d-none");
}

// prendo gli elementi su cui devo andare a lavorare

const istruzioniEl = document.getElementById("instructions");
const countDownEl = document.getElementById("countdown");
const numberListEl = document.getElementById("numbers-list");
const formAnswerEl = document.getElementById("answers-form");
const inputAnswerEl = document.getElementById("input-group");
const inputElement = document.querySelectorAll("#input-group");
// devo far comparire per un tempo x 5 nuemri random da confrontare con quelli dell'utente e un contdown
let NumberMemo = [];
for (let i = 0, t = 5; i < t; i++) {
  NumberMemo.push(Math.round(Math.random() * 50));
}
console.log(NumberMemo);
numberListEl.innerHTML += NumberMemo;
let remaining = 10000;

//
let countdown = 10;

//intervallo
let interval = setInterval(function updateCountdown() {
  countdown--;
  countDownEl.innerHTML = countdown;

  if (countdown === 0) {
    clearInterval(interval);
    showForm();
  }
}, 1000);
// let dispalyinterval = setInterval(() => {}, 1000);
const elementForm = inputElement.value;
console.log(elementForm);
