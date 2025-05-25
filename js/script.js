
//nav bar scrolling
let lastScrollY = window.scrollY;
const topbar = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < 100) {
    topbar.style.top = '0';
  } else if (currentScrollY < lastScrollY) {
    topbar.style.top = '-100px';
  } else {
    topbar.style.top = '0';
  }

  lastScrollY = currentScrollY;
});

