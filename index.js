//Desktop Nav 

const desktopList = document.querySelector('.desktop-ul');

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    (currentScrollPos > 20) ? 
        desktopList.classList.add('onscroll-nav') : desktopList.classList.remove('onscroll-nav')
}

// Mobile nav

document.querySelector(".burger-icon").addEventListener("click", function() {
    document.querySelector(".mobile-nav").classList.toggle("mobile-nav-active");
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

rightArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
    setIndex();
    controlDots[sectionIndex].classList.add('selected');
})

leftArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex();
    controlDots[sectionIndex].classList.add('selected') 
})

controlDots.forEach((indicator, ind) => {
    indicator.addEventListener('click', () => {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    })
})
