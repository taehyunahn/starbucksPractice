// 일단, 사용할 요소를 찾는다.
const searchEl = document.querySelector('.search'); //HTML 전체 문서에서 클래스가 search인 요소
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus(); //포커스를 강제 적용하는 부분
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused'); //classList(클래스 정보를 가진 객체)에 add함으로서 클래스 정보 추가
  searchInputEl.setAttribute('placeholder', '통합검색'); // attribute는 HTML의 속성
});

searchInputEl.addEventListener('blur', function () {
  // blur : 포커스 해제될 때
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// 화면 스크롤할 때 많이 사용하는 lodash 라이브러리의 함수 : _.throttle(함수, 시간)
window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 배지 숨기기
      // badgeEl.style.display = 'none';
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0, // 불투명도로 안보이게
        display: 'none', // 클릭도 안되게
      });
    } else {
      // 배지 보이기
      // badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300)
);
