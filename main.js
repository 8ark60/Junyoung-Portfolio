'use strict';

// 스크롤 시 Navbar 이벤트
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', function(){
    // console.log(window.scrollY);
    // console.log(`NavbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// 메뉴 클릭 시 해당 곳으로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', function(event){
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
});