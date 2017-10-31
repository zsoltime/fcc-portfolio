import Reveal from './Reveal';

export default function RevealPortfolio() {
  const items = document.querySelectorAll('.portfolio__item');
  const delay = 200;

  function hide() {
    items.forEach((el) => {
      el.classList.add('reveal-item');
    });
  }

  function reveal() {
    items.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('reveal-item--visible');
      }, i * delay);
    });
  }

  Reveal({
    element: document.getElementById('portfolio'),
    onInit: hide,
    onReach: reveal,
  });
}
