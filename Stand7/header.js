window.onscroll = stickyHeader;
window.onload = stickyHeader;

const navbar = document.querySelector('#sticky-header');
const header = document.querySelector('header');


let sticky = header.clientHeight;

function stickyHeader() {
    if (window.scrollY > sticky)  {
        navbar.classList.add("sticky");
        navbar.classList.add("border");
        sidebar.classList.add("sidebar_sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("border");
        sidebar.classList.remove("sidebar_sticky");
    }
}

