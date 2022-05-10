// Header-menu when onscroll
const headerMenuEle = document.querySelector('.header-menu');

window.addEventListener('scroll', () => {
    if(scrollY > 50) {
        headerMenuEle.classList.add('active');
    }
    else if(scrollY == 0) {
        headerMenuEle.classList.remove('active')
    }
})

// Scroll Top Btn
const scrollTopBtnEle = document.querySelector('#btn-scroll-top i');

scrollTopBtnEle.addEventListener('click', () => {
    scrollTo({
        behavior: 'smooth',
        top: 0
    })
})

window.addEventListener('scroll', () => {
    if(scrollY > 450) {
        scrollTopBtnEle.classList.add('active');
    }
    else {
        scrollTopBtnEle.classList.remove('active')
    }
})

// Btn MenuBar
const menuBtnEle = document.querySelector('#menu-btn');
const navbarMenuEle = document.querySelector('.navbar');
const closeBtnMenuEle = document.querySelector('#btn--close__menu');

menuBtnEle.addEventListener('click', () => {
    navbarMenuEle.classList.toggle("active")
    menuBtnEle.classList.add('hidden')
})

closeBtnMenuEle.addEventListener('click', () => {
    navbarMenuEle.classList.remove("active")
    menuBtnEle.classList.remove('hidden')
})