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



//OPEN CLOSE Saiba Mais
const seeMoreButtons = document.querySelectorAll('#see-more-btn');

    seeMoreButtons.forEach((button) => {
        button.addEventListener('click', () => {
            
            const description = button.previousElementSibling; 

            if (description.style.webkitLineClamp === 'none') {
                description.style.webkitLineClamp = '3';
                button.textContent = 'Saiba Mais'; 
            } else {
                description.style.webkitLineClamp = 'none';
                button.textContent = 'Mostrar Menos';
            }
        });
});

