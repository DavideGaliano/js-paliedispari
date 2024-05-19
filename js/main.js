// Chiede all'utente di inserire una parola
const parola = prompt("Inserisci una parola:");

// Definisce una funzione per verificare se una parola è palindroma
function Palindroma(parola) {
  // Converte la parola in minuscolo
  const parolaMinuscola = parola.toLowerCase();

  // Inverte la parola
  const parolaInversa = parolaMinuscola.split("").reverse().join("");

  // Verifica se la parola originale è uguale alla sua versione invertita
  return parolaMinuscola === parolaInversa;
}

// Chiama la funzione Palindroma e stampa il risultato in console
if (Palindroma(parola)) {
  console.log("La parola inserita è palindroma.");
} else {
  console.log("La parola inserita non è palindroma.");
}


// Chiede all'utente di scegliere "pari" o "dispari"
let sceltaUtente = prompt("Scegli pari o dispari:").toLowerCase();

// Verifica che l'input dell'utente sia pari o dispari
while (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
  console.log("Per favore, inserisci una scelta valida: 'pari' o 'dispari'.");
  sceltaUtente = prompt("Scegli pari o dispari:").toLowerCase();
}

// Chiede all'utente di inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Verifica che l'input dell'utente sia un numero valido
while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
    console.log("Per favore, inserisci un numero valido tra 1 e 5.");
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
}

// Funzione per generare un numero casuale da 1 a 5 per il computer
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

// Genera un numero casuale per il computer
const numeroComputer = generaNumeroCasuale();

// Somma i due numeri
const somma = numeroUtente + numeroComputer;

// Funzione per stabilire se un numero è pari o dispari
function pari(numero) {
    return numero % 2 === 0;
}

// Determina se la somma è pari o dispari
const sommaPari = pari(somma);

// Dichiara chi ha vinto
if ((sommaPari && sceltaUtente === "pari") || (!sommaPari && sceltaUtente === "dispari")) {
    console.log(`Hai vinto! Il numero del computer era ${numeroComputer} e la somma è ${somma}.`);
} else {
    console.log(`Hai perso. Il numero del computer era ${numeroComputer} e la somma è ${somma}.`);
}
