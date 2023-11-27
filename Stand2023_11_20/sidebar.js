const sidebar = document.querySelector('#sidebar');
const sidebar_wrapper = document.querySelector('.sidebar-wrapper');
const hamburger_icon = document.querySelector('.hamburger_button');


sidebar_wrapper.style.marginTop = `${navbar.clientHeight}px`;
console.log(navbar.clientHeight);


window.addEventListener('load', (e) =>{
    hamburger_icon.addEventListener('click', () => {
        sidebar_wrapper.classList.toggle("hidden");
        console.log("Click");
    });
});