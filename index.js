//Desktop Nav 

const desktopList = document.querySelector('.desktop-nav ul');

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    (currentScrollPos > 20) ? 
        desktopList.classList.add('onscroll-nav') : desktopList.classList.remove('onscroll-nav')
}

// Mobile nav

const burgerIcon = document.querySelector(".burger-icon");
const mobileNav = document.querySelector(".mobile-nav");

burgerIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('mobile-nav-active');
    document.querySelector('.burger-icon .burger').classList.toggle('burger-icon-active');
    document.querySelector('.burger-icon .cross').classList.toggle('cross-icon-active');
})

// Carousel

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const controlDots = document.querySelectorAll('.controls li');

let sectionIndex = 0;

const setIndex = () => {
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate('+ (sectionIndex) * - 33.33 +'%)';
}

const moveLeft = () => {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex();
    controlDots[sectionIndex].classList.add('selected')
}

const moveRight = () => {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
    setIndex();
    controlDots[sectionIndex].classList.add('selected');
}

// Arrow icons

leftArrow.addEventListener('click', () => {
    moveLeft();
})

rightArrow.addEventListener('click', () => {
    moveRight();
})

// Keyboard arrows

document.addEventListener('keydown', (e) => {
        if (e.key === "ArrowLeft") {
            moveLeft();
        } else if (e.key === "ArrowRight") {
            moveRight();
        }   
})

// Bottom dots

controlDots.forEach((indicator, ind) => {
    indicator.addEventListener('click', () => {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    })
})
