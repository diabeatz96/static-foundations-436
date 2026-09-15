const dropdown = document.querySelector('.dropdown');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

dropdown.addEventListener('click', () => {
    if (menuOpen == false) {
        navLinks.style.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
    }
});