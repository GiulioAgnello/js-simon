// prendo gli elementi su cui devo andare a lavorare

const istruzioniEl = document.getElementById("instructions");
const countDownEl = document.getElementById("countdown");
const numberListEl = document.getElementById("numbers-list");
const formAnswerEl = document.getElementById("answers-form");
const inputAnswerEl = document.getElementById("input-group");

// devo far comparire per un tempo x 5 nuemri random da confrontare con quelli dell'utente e un contdown
let NumberMemo = [];
for (let i = 0, t = 5; i < t; i++) {
  NumberMemo.push(Math.round(Math.random() * 50));
}
console.log(NumberMemo);
numberListEl.innerHTML += NumberMemo;
let remaining = 10000;

console.log(remaining);
// timer
const startingMinutes = 10;
let time = startingMinutes % 60;

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  let timerStatus = true;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdown.innerHTML = seconds;
  time--;

  if (minutes + seconds <= 0) {
    clearInterval(interval);
  } else {
  }
  //
}
//intervallo
let interval = setInterval(updateCountdown, 1000);

console.log(interval);

// numberListEl.classList.add("d-none");
//   formAnswerEl.classList.remove("d-none");
