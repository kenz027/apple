new Swiper('.swiper', {
  grabCursor: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  speed: 500,
  autoplay: {
    delay: 5000,
  },
});
AOS.init();

const footer__input = document.querySelector('.footer-list-input'),
footer__footerListConfirmbtn = document.querySelector('.footer-list-confirmbtn'),
open__menu = document.querySelector('.open__menu'),
header__navMenu = document.querySelector('.header__nav-menu');
function checker(e){
  if(this.value){
    footer__footerListConfirmbtn.classList.add('active');
  } else{
    footer__footerListConfirmbtn.classList.remove('active');
  }
}
footer__input.addEventListener('change', checker);

open__menu.addEventListener('click', ()=>{
  header__navMenu.classList.toggle('active')
  open__menu.classList.toggle('active')
})
window.addEventListener('scroll', ()=>{
     if (window.scrollY>600){
      header__navMenu.classList.remove('active')
     }
})
