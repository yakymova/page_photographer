let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__items');

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

document.addEventListener('click', (e) => {
    let click = e.composedPath().includes(menuBtn);

    if (!click) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
})



let hiddenElements = document.querySelectorAll('[data-hidden]');
const windowHeight = document.documentElement.clientHeight;

let hiddenElementsPosition = [];
if (hiddenElements.length > 0) {
    hiddenElements.forEach(el => {
        if (el.dataset.hidden) {
            hiddenElementsPosition.push(el.getBoundingClientRect().top + screenY);
            hiddenScrollCheck();
        }
    })
}

window.addEventListener('scroll', () => {
    if (document.querySelectorAll('[data-hidden]').length > 0) {
        hiddenScrollCheck();
    }
})

function hiddenScrollCheck() {
    let hiddenElemIndex = hiddenElementsPosition.findIndex(
        item => scrollY > item - windowHeight
    )
    if (hiddenElemIndex >= 0) {
        hiddenElements[hiddenElemIndex].classList.add('visible');
        hiddenElements[hiddenElemIndex].removeAttribute('data-hidden');
    }
    delete hiddenElementsPosition[hiddenElemIndex];
}
