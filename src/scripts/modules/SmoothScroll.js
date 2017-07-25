import jump from 'jump.js';

function addSmoothScrolling(selector) {
  document.querySelectorAll(selector)
    .forEach((link) => {
      link.addEventListener('click', (e) => {
        jump(document.querySelector(e.target.hash), {
          duration: 500,
        });
      });
    });
}

export default addSmoothScrolling;
