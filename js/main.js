const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus(); //포커스를 강제 적용하는 부분
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  // blur : 포커스 해제될 때
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});
