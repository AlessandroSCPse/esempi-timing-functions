// Al click su un div, il testo 
// del div stesso cambia dopo 3 secondi

const textContainer = document.getElementById('text-container');
console.log(textContainer);

textContainer.addEventListener('click', function() {
    console.log(this);

    // L'arrow function eredità il this dalla funzione che la racchiude
    setTimeout(() => {
        this.innerHTML = 'Sono stato cliccato';
    }, 3000);
});