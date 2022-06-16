// Il programma chiede all’utente 
// quanti secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert().

// Chiedere all'utente quanti secondi mancano alla cottura della pasta
const userSeconds = parseInt(prompt('Quanti secondi mancano alla cottura della pasta?'));
console.log(userSeconds);
const userMilliseconds = userSeconds * 1000;
console.log(userMilliseconds);

// Stampare dopo x secondi il messaggio 'La pasta è cotta'
// con setTimout()

// Versione con funzione anonima
// setTimeout(function() {
//     alert('La pasta è cotta');
// }, userMilliseconds);

// Versione con funzione con nome
setTimeout(pastaReadyAlert, userMilliseconds);

function pastaReadyAlert() {
    alert('La pasta è cotta');
}