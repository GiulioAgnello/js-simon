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
const inputElement = document.querySelectorAll("#answers-form");
// devo far comparire per un tempo x 5 nuemri random da confrontare con quelli dell'utente e un contdown
let numberMemo = [];
for (let i = 0, t = 5; i < t; i++) {
  const randomNumber = Math.round(Math.random() * 50);
  numberMemo.push(randomNumber);
  numberListEl.innerHTML += `<li>${randomNumber}<li>`;
}
console.log(numberMemo);

let remaining = 10000;

//
let countdown = 10;

//intervallo
let interval = setInterval(function updateCountdown() {
  countdown--;
  countDownEl.innerHTML = countdown;

  if (countdown === 0) {
    // Finito il countdown
    clearInterval(interval);
    showForm();
    const numbersEl = inputElement.querySelectorAll("input");
    console.log(numbersEl);
    formAnswerEl.addEventListener("Submit", (c) => {
      e.preventDefault();
      // prendo i calori indicati da user

      inputElement.value;

      console.log(inputElement);
    });
  }
}, 1000);
// let dispalyinterval = setInterval(() => {}, 1000);
