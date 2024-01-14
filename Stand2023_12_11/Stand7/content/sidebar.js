const sidebar = document.querySelector('#sidebar');
const sidebar_wrapper = document.querySelector('.sidebar-wrapper');
const sidebar_links = document.querySelector('.sidebar-links');
const hamburger_icon = document.querySelector('.hamburger_button');

// stripes sind die einzelnen Striche im Hamburger icon, also seine "Kinder (children)"
const stripes = hamburger_icon.children;

// nach einer gewissen Zeit nachdem die Seite geladen ist,
// wird die Animation sichtbar
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => document.body.classList.remove('preload'), 400);
});

// onclick Eventhandler für den Hamburger Button
window.addEventListener('load', (e) =>{
    
    
    hamburger_icon.addEventListener('click', () => {
        sidebar_links.classList.toggle("hidden");
        sidebar_wrapper.classList.toggle("blur");
        sidebar_wrapper.classList.toggle("sidebar-hidden");
        sidebar_wrapper.classList.toggle("sidebar-visible");
        hamburger_icon.classList.toggle("hamburger_button_onclick");
        
    });


    // wenn man mit der Maus über den Hamburger button hovert, wird mithilfe einer for-Schleife
    // allen "stripes" die Klasse "stripe_onhover" zugefügt
    hamburger_icon.addEventListener('mouseenter', () => {
        for (let i = 0; i < stripes.length; i++){
            stripes[i].classList.add("stripe_onhover");
        }
    });


    // wenn man mit der Maus aus dem Hamburger button herausfährt, wird mithilfe derselben 
    // for-Schleife bei allen "stripes" die Klasse "stripe_onhover" entfernt
    hamburger_icon.addEventListener('mouseleave', () => {
        for (let i = 0; i < stripes.length; i++){
            stripes[i].classList.remove("stripe_onhover");
        }
    });


});


