// mit der vordefinierten Funktion getBoundingClientRect() 
// kann man auf die Position von HTML Elementen zugreifen
const isElementInViewport = (element) => {
    const elementPosition = element.getBoundingClientRect();
    const page = document.body.getBoundingClientRect();
    const pageHeight = page.bottom;

    return window.scrollY > elementPosition.top - pageHeight / 1.5;
};

// Wenn eine gewisse "Strecke" gescrollt wurde, soll die entsprechende HTML Section
// von rechts einfliegen.
// Das wird mit einer CSS Klasse umgesetzt, die entfernt wird, sobald weit genug gescrollt wurde

// slide-in Effekt den Elementen hinzufügen
const slideIn = (element) => {
    if (isElementInViewport(element)) {
        element.classList.remove('far_right');
    }
}

// fügt die slideIn Funktion mehreren Sections hinzu
const checkScroll = () => {
    const sections = document.querySelectorAll('.slide-in-element');

    sections.forEach((section) => {
        slideIn(section);
    });
};

// scroll Eventlistener hinzufügen, der die checkScroll Funktion ausführt
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
