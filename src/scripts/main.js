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
