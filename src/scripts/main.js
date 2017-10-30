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
// Reveal skills
//
const meters = document.querySelectorAll('meter');
const itemsToReveal = document.querySelectorAll('.skills');

meters.forEach((meter) => {
  meter.previousElementSibling.style.width = 0;
  meter.value = 0;
});

itemsToReveal.forEach((item) => {
  // eslint-disable-next-line no-new, no-undef
  new Waypoint({
    element: item,
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
