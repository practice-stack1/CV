const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const progresItems = document.querySelectorAll('.skills__progres-counter');
const progresLines = document.querySelectorAll('.skills__progres-line span');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
close.addEventListener('click', () => {
    menu.classList.remove('active');
});

function changeProgres(items, lines){
    items.forEach((e, i) => {
        lines[i].style.width = `${parseInt(e.textContent)}%`;
    });
}

changeProgres(progresItems, progresLines);