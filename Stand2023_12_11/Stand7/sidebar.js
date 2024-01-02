const sidebar = document.querySelector('#sidebar');
const sidebar_wrapper = document.querySelector('.sidebar-wrapper');
const sidebar_links = document.querySelector('.sidebar-links');
const hamburger_icon = document.querySelector('.hamburger_button');

// stripes sind die einzelnen Striche im Hamburger icon, also seine "Kinder (children)"
const stripes = hamburger_icon.children;


// (margin Top des sidebar_wrappers wird automatisch angepasst, damit keine Zwischenräume entstehen)
// *wurde weggelassen, da nicht benötigt*

// onclick Eventhandler für den Hamburger Button
window.addEventListener('load', (e) =>{
    hamburger_icon.addEventListener('click', () => {
        sidebar_links.classList.toggle("hidden");
        sidebar_wrapper.classList.toggle("blur");
        sidebar.classList.toggle("sidebar-hidden");
        sidebar.classList.toggle("sidebar-visible");
    });

    // wenn man mit der Maus über den Hamburger button hovert, wird mithilfe einer for-Schleife
    // allen "stripes" die Klasse "stripe_onhover" zugefügt
    hamburger_icon.addEventListener('mouseenter', (e) => {
        for (let i = 0; i < stripes.length; i++){
            stripes[i].classList.add("stripe_onhover");
        }
    });

    // wenn man mit der Maus aus dem Hamburger button herausfährt, wird mithilfe derselben 
    // for-Schleife bei allen "stripes" die Klasse "stripe_onhover" entfernt
    hamburger_icon.addEventListener('mouseleave', (e) => {
        for (let i = 0; i < stripes.length; i++){
            stripes[i].classList.remove("stripe_onhover");
        }
    });
});

