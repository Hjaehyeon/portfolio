// 검색창 활성화
const searchElInput = document.querySelector('.inner .menu .main-menu:last-child .search input')
const searchElIcon = document.querySelector('.inner .menu .main-menu:last-child .search i');


searchElIcon.addEventListener('click', function () {
  searchElInput.focus();
})

searchElInput.addEventListener('focus', function () {
  searchElIcon.classList.add('focused');
  searchElInput.setAttribute('placeholder', '통합검색');
})

searchElInput.addEventListener('blur', function () {
  searchElIcon.classList.remove('focused');
  searchElInput.setAttribute('placeholder', '');
})


// 스크롤 추적 애니메이션
const aloevera = document.querySelectorAll('.aloevera .aloevera-inner.scroll-spy');

aloevera.forEach(function (aloe) {
  new ScrollMagic
    .Scene({
      triggerElement: aloe, 
      triggerHook: .6
    })
    .setClassToggle(aloe, 'show')
    .addTo(new ScrollMagic.Controller());
});

const slowblow = document.querySelectorAll('.slowblow .slowblow-inner.scroll-spy');

slowblow.forEach(function (sb) {
  new ScrollMagic
    .Scene({
      triggerElement: sb, 
      triggerHook: .6
    })
    .setClassToggle(sb, 'show')
    .addTo(new ScrollMagic.Controller());
});