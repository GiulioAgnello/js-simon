// prendo gli elementi su cui devo andare a lavorare

const istruzioniEl = document.getElementById("instructions");
const countDownEl = document.getElementById("countdown");
const numberListEl = document.getElementById("numbers-list");
const formAnswerEl = document.getElementById("answers-form");
const inputAnswerEl = document.getElementById("input-group");

// devo far comparire per un tempo x 5 nuemri random da confrontare con quelli dell'utente e un contdown
let NumberMemo = [];

const randomnumber = Math.floor(Math.random() * 100);
for (i = 0; i < 4; i++) {
  let arrayNumber = [i];
  console.log(randomnumber);
}

setInterval(() => {
  const randomnumber = Math.floor(Math.random() * 100);
  console.log(randomnumber);
}, 8000);
