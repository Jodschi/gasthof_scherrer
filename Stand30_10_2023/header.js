window.onscroll = function() {stickyHeader()};

const navbar = document.querySelector('.sticky-header');
const header = document.querySelector('header');

let sticky = header.clientHeight;

function stickyHeader() {
    
        navbar.classList.toggle("sticky", window.scrollY > sticky);
}
