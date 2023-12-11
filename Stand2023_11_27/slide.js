// auf alle sections mittels Variablen zugreifen
const slide_elem = document.querySelector('.slide-in-element');
const sect1 = document.querySelector('#sect1');
const sect2 = document.querySelector('#sect2');
const sect3 = document.querySelector('#sect3');
const sect4 = document.querySelector('#sect4');


// mit der vordefinierten Funktion getBoundingClientRect() 
// kann man auf die Position von HTML Elementen zugreifen

// hier wird nur die Position zu Testzwecken in der Konsole ausgegeben
let sect1_position = sect1.getBoundingClientRect();
console.log(sect1_position.top - 460)

let sect2_position = sect2.getBoundingClientRect();
console.log(sect2_position.top - 460)

let sect3_position = sect3.getBoundingClientRect();
console.log(sect3_position.top - 460)

let sect4_position = sect4.getBoundingClientRect();
console.log(sect4_position.top - 460)


// Wenn eine gewisse "Strecke" gescrollt wurde, soll die entsprechende HTML Section
// von rechts einfliegen.
// Das wird mit einer CSS Klasse umgesetzt, die entfernt wird, sobald weit genug gescrollt wurde
const checkScroll = (e) => {
    
    if (window.scrollY > sect1_position.top - 460){
        sect1.classList.remove('far_left');
    }
    
    if(window.scrollY > sect2_position.top - 460){
        sect2.classList.remove('far_left');
    }
    
    if(window.scrollY > sect3_position.top - 460){
        sect3.classList.remove('far_left');
    }
    
    if(window.scrollY > sect4_position.top - 460){
        sect4.classList.remove('far_left');
    }

}

// beim Laden der Seite und beim Scrollen soll die Funktion von oben ausgeführt werden
window.addEventListener('load', checkScroll );
window.addEventListener('scroll', checkScroll );
