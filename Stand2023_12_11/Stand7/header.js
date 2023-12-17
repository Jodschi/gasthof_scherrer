window.onscroll = stickyHeader;
window.onload = stickyHeader;

const navbar = document.querySelector('#sticky-header');
const header = document.querySelector('header');


let sticky = header.clientHeight;

function stickyHeader() {
    if (window.scrollY > sticky)  {
        navbar.classList.add("sticky");
        navbar.classList.add("bottom_line");
        sidebar.classList.add("sidebar_sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("bottom_line");
        sidebar.classList.remove("sidebar_sticky");
    }
}

