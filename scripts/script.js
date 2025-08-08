const toggleBtn = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-menu');
const menu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});