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
