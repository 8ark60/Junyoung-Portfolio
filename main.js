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
    scrollIntoView(link);
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({ behavior: 'smooth' });
});

// Home Contact me 클릭 시 contact 이동
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', function(){
    scrollIntoView('#contact')
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// 스크롤 시 up버튼 생성
const arrowUp = document.querySelector('.arrow-up');
const homeHeight = document.querySelector('#home').getBoundingClientRect().height
document.addEventListener('scroll', function(){
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// up버튼 클릭 시 맨 위로
arrowUp.addEventListener('click', function(){
    scrollIntoView('#home');   
});

// project 
const projectBtnContainer = document.querySelector('.projects__categories');
const workContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

projectBtnContainer.addEventListener('click', function(e){
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    // active
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target :
                    e.target.parentNode;
    target.classList.add('selected');

    workContainer.classList.add('anim-out');
    setTimeout(function(){
        projects.forEach(function(project){
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        workContainer.classList.remove('anim-out');
    },300);

    console.log(filter);
});