const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    }
    else {
        nav.style.display = 'none';
    }
}



const button = document.getElementById('see-more-btn');
const paragraph = document.querySelector('.service-description');

button.addEventListener('click', () => {
    
    if (paragraph.style.webkitLineClamp === 'none') {

        paragraph.style.webkitLineClamp = '5';
        button.textContent = 'Saiba Mais';
    } else {

        paragraph.style.webkitLineClamp = 'none';
        button.textContent = 'Mostrar Menos';
    }

});