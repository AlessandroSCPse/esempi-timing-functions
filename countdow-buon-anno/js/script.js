// Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

// Mi prendo il numero nel div che è il numero iniziale -> startNumber
const timerElement = document.getElementById('timer');
let startNumber = parseInt(timerElement.innerHTML);
console.log(startNumber);

// Ogni secondo
const clock = setInterval(function() {
    // Decremento startNumber
    startNumber--;
    console.log(startNumber);
    // Stampo nel timer il nuovo secondo decrementato startNumber
    if(startNumber === 0) {
        // Se startNumber è arrivata a zero scrivo buon anno e stoppo il setInterval
        clearInterval(clock);
        timerElement.innerHTML = 'Buon anno!';
    } else {
        timerElement.innerHTML = startNumber;
    }
}, 1000);