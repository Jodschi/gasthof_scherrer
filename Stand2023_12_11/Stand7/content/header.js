window.onload = stickyHeader;

function stickyHeader() {  
    const navbar = document.querySelector('#sticky-header');
    const header = document.querySelector('header');

    let header_height;
    let navbar_height;
    let added_height;

    // die Berechnung der Höhen der Elemente ist in einer Funktion ausgelagert
    const calculateHeights = () => {
        header_height = header.clientHeight;
        navbar_height = navbar.clientHeight;

        // die Sidebar soll erst unter der Navbar beginnen
        // also wird der "top" style tag so ausgerechnet, dass er 
        // immer die Höhe des Headers und der Navbar miteinbezieht
        added_height = header_height + navbar_height;

    }

    const scrollPosition = () => {
        if (window.scrollY > header_height)  {
            navbar.classList.add("sticky");
            navbar.classList.add("bottom_line");
            sidebar_wrapper.classList.add("sidebar_sticky");
            sidebar_wrapper.style.top = navbar_height + "px";
        } else {
            navbar.classList.remove("sticky");
            navbar.classList.remove("bottom_line");
            sidebar_wrapper.classList.remove("sidebar_sticky");
            
            sidebar_wrapper.style.top = added_height + "px";
        }

        
    }

    // die Höhen werden am Anfang einmal ausgerechnet
    calculateHeights();
    scrollPosition();

    // jedesmal wenn die Größe des Fensters geändert wird, 
    // werden die Höhen erneut ausgerechnet
    window.addEventListener('resize', () => {
        calculateHeights();
        scrollPosition();        
    });
    
    window.addEventListener('scroll', () => {
        scrollPosition();
        
    });

    window.addEventListener('touchmove', () => {
        scrollPosition();
    });
}
