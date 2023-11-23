window.onscroll = function() {stickyHeader()};

const navbar = document.querySelector('.sticky-header');
const header = document.querySelector('header');


let sticky = header.clientHeight;

function stickyHeader() {
    if (window.scrollY > (sticky))  {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
