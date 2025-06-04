// JavaScript principal para todas as páginas

// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const nav = document.querySelector('nav');
    
    if (menuMobile) {
        menuMobile.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuMobile.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuMobile.classList.remove('active');
        });
    });
    
    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            menuMobile.classList.remove('active');
        }
    });
});