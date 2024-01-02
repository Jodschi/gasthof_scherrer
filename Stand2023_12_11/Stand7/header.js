window.onscroll = stickyHeader;
window.onload = stickyHeader;

const navbar = document.querySelector('#sticky-header');
const header = document.querySelector('header');

if(document.querySelector('sidebar-wrapper') != null){
    const sidebar_wrapper = document.querySelector('sidebar-wrapper');
};


let sticky = header.clientHeight;

function stickyHeader() {
    if (window.scrollY > sticky)  {
        navbar.classList.add("sticky");
        navbar.classList.add("bottom_line");
        sidebar_wrapper.classList.add("sidebar_sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("bottom_line");
        sidebar_wrapper.classList.remove("sidebar_sticky");
    }
}

