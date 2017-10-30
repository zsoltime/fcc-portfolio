import jump from 'jump.js';

export function addSmoothScroll(selector) {
  document.querySelectorAll(selector)
    .forEach((link) => {
      link.addEventListener('click', (e) => {
        jump(document.querySelector(e.target.hash), {
          duration: 500,
        });
      });
    });
}

export function scrollTo(target) {
  jump(document.querySelector(target), {
    duration: 500,
  });
}
