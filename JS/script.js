// ?Sistemi di controllo avanzato del codice
'use strict'
// ?Puliamo la console da eventuali errori di default system
console.clear()

/* CATTURIAMO LE VARIABILI NECESSARIE           

1) countdown
2) numbers-list
3) answers-form
4) message

*/

const countdown = document.getElementById('countdown')
const numbersList = document.getElementById('numbers-list')
const answersForm = document.getElementById('answers-form')
const message = document.getElementById('message')
const istruzioni = document.getElementById('instructions')
console.log(countdown)
console.log(numbersList)
console.log(answersForm)
console.log(message)

//! STAMPIAMO SULLA PAGINA IL COUNTDOWN DEL TIMER
let numero = 10
let time = setInterval(() => {
  if (numero > 1) {
    countdown.innerHTML = --numero
    console.log(numero)
  } else {
    clearInterval(time)
    countdown.textContent = 'TEMPO SCADUTO !!'
    istruzioni.innerText = 'Scrivi i numeri nelle caselle'
    numbersList.remove()
    answersForm.classList.remove('d-none')
  }
}, 1000)

// GENERIAMO 5 NUMERI RANDOMICI E LI INSERIAMO ALL'INTERNO DI UN ARRAY INIZIALMENTE VUOTO
const randomNumberPc = []
for (let i = 0; i < 5; i++) {
  randomNumberPc.push(getRndInteger(1, 100))
}
console.log(randomNumberPc)
// ?Aggiungiamo gli elementi dell'Array all'html
numbersList.innerHTML = randomNumberPc.join(' / ') // Customizziamo gli spazi tra i numeri

// !PRENDERE BOTTONE SUBMIT TOGLIERE DEFAULT PREVENT E ALL INVIO STAMPARE I DATI IN CONSOLE

answersForm.addEventListener('submit', (event) => {
  event.preventDefault()
})

// ! FUNZIONE CLICK / ITERAZIONE VALUE ELEMENT INPUT //

const bottone = document.querySelector('button.btn')
// Prendiamo tutti i campi input con .querySelectorAll
const valori = document.querySelectorAll('input')
const numeriInseriti = []
const elementiCom = []
const messaggio = document.getElementById('message')

bottone.addEventListener('click', (event) => {
  event.preventDefault()
  // Iteriamo con foreach  (Ogni elemento) e poi stampiamo i valori nel nuovo array.
  valori.forEach((input) => {
    numeriInseriti.push(parseInt(input.value))
  })

  let validity = false
  for (let i = 0; i < numeriInseriti.length; i++) {
    if (randomNumberPc.includes(numeriInseriti[i])) {
      elementiCom.push(numeriInseriti[i])
      validity = true
    }
  }

  if (validity === false) {
    message.innerText = 'Non hai indovinato nessun numero'
  } else {
    message.innerHTML = `I numeri che hai indovinato sono: ${elementiCom}`
  }
})
