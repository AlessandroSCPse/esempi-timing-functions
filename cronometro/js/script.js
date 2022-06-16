// Cliccando su un pulsante, viene avviato un cronometro.
// Per fermare il cronometro, bisogna cliccare 
// su un secondo pulsante.

const timerElement = document.getElementById('timer');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let cronoClock;

// Al click su playBtn
playBtn.addEventListener('click', function() {
    // Leggere il valore del timer
    let timerVal = parseInt(timerElement.innerHTML);

    // definire un setInterval che ogni secondo incrementa il numero in timerElement
    cronoClock = setInterval(function() {
        timerVal++;
        timerElement.innerHTML = timerVal;
    }, 1000);
});

// Al click su stop
stopBtn.addEventListener('click', function() {
    // stoppare il setInterval che avevamo lancianto con playBtn
    clearInterval(cronoClock);
});

// Al click su reset
resetBtn.addEventListener('click', function() {
    timerElement.innerHTML = 0;
});