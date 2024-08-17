let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar'); 

menuIcon.onclick = () => {
    navbar.classList.toggle('active'); 
};

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0); 
});
