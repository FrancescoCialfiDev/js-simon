// ?Sistemi di controllo avanzato del codice
"use strict";
// ?Puliamo la console da eventuali errori di default system
console.clear();

/* CATTURIAMO LE VARIABILI NECESSARIE           

1) countdown
2) numbers-list
3) answers-form
4) message

*/

const countdown = document.getElementById("countdown");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");
const message = document.getElementById("message");
console.log(countdown);
console.log(numbersList);
console.log(answersForm);
console.log(message);


//! STAMPIAMO SULLA PAGINA IL COUNTDOWN DEL TIMER
let numero = 11;
let time = setInterval(() => {
    if (numero > 1) {
        countdown.innerHTML = --numero;
    console.log(numero);
    } else {
        clearInterval(time);
        countdown.remove();
        numbersList.remove();
        answersForm.classList.remove("d-none")
    }
  }, 1000);

//! GENERIAMO 5 NUMERI RANDOMICI E LI INSERIAMO ALL'INTERNO DI UN ARRAY INIZIALMENTE VUOTO
  const randomNumberPc = [];
  for (let i = 0; i < 5; i++) {
    randomNumberPc.push(getRndInteger(1, 100))
  }
  console.log(randomNumberPc);
  // ?Aggiungiamo gli elementi dell'Array all'html
  numbersList.innerHTML = randomNumberPc.join(" / "); // Customizziamo gli spazi tra i numeri












 