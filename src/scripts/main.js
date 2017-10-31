import '../../node_modules/waypoints/lib/noframework.waypoints';

import { addSmoothScroll, scrollTo } from './modules/SmoothScroll';
import Message from './modules/Message';
import { handleSubmit } from './modules/Form';

//
// Add smooth scroll to every internal link
//
addSmoothScroll('a[href^="#"]');
document.querySelector('.btn--contact')
  .addEventListener('click', () => {
    scrollTo('#contact');
  });

//
// Remove initial animation
//
document.querySelector('.social__item:last-of-type')
  .addEventListener('animationend', () => {
    document.querySelectorAll('.social__item').forEach((el) => {
      el.classList.remove('anim', 'anim--pop');
    });
  });

//
// Reveal skills
//
const meters = document.querySelectorAll('meter');

meters.forEach((meter) => {
  meter.previousElementSibling.style.width = 0;
  meter.value = 0;
});

// eslint-disable-next-line no-new, no-undef
new Waypoint({
  element: document.getElementById('skills'),
  handler: function handle() {
    meters.forEach((meter, i) => {
      setTimeout(() => {
        const { val } = meter.dataset;
        meter.previousElementSibling.style.width = `${val}%`;
        meter.value = val;
      }, i * 200);
    });
    this.destroy();
  },
  offset: '50%',
});

//
// Reveal portfolio items
//
const portfolioItems = document.querySelectorAll('.portfolio__item');

portfolioItems.forEach((item) => {
  item.classList.add('reveal-item');
});

// eslint-disable-next-line no-new, no-undef
new Waypoint({
  element: document.getElementById('portfolio'),
  handler: function handle() {
    portfolioItems.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add('reveal-item--visible');
      }, i * 200);
    });
    this.destroy();
  },
  offset: '50%',
});

//
// Handle form submit
//
handleSubmit('#contact-form', (err, formData) => {
  if (err) {
    return;
  }
  // eslint-disable-next-line no-console
  console.log('From:', formData.get('name'), formData.get('email'));

  const firstName = formData.get('name').split(' ')[0];
  const msg = Message({
    selector: '#feedback',
    type: 'success',
    message: `Thank you for your message, ${firstName}. I will respond to you as soon as possible.`,
  });
  msg.show();
});
