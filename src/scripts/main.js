import Message from './modules/Message';
import { handleSubmit } from './modules/Form';

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
