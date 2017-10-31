import Reveal from './Reveal';

export default function RevealPortfolio() {
  const items = document.querySelectorAll('meter');
  const delay = 200;

  function hide() {
    items.forEach((el) => {
      el.previousElementSibling.style.width = 0;
      el.value = 0;
    });
  }

  function reveal() {
    items.forEach((el, i) => {
      setTimeout(() => {
        const { val } = el.dataset;
        el.previousElementSibling.style.width = `${val}%`;
        el.value = val;
      }, i * delay);
    });
  }

  Reveal({
    element: document.getElementById('skills'),
    onInit: hide,
    onReach: reveal,
  });
}
