// 슬라이드
new Swiper('.pme .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.pme .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.pme .swiper-prev',
    nextEl: '.pme .swiper-next'
  }
});



