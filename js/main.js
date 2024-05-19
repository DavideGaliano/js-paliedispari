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
