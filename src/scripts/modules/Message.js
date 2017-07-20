function grabElement(selector) {
  if (typeof selector === 'object' && selector !== null) {
    return selector;
  } else if (typeof selector === 'string') {
    const el = document.querySelector(selector);

    if (el === null) {
      throw Error(`"${selector}" is not a valid selector. No Element found within the document.`);
    }
    return el;
  }
  throw new Error('Invalid selector');
}

function Message({ selector, type = 'info', message }) {
  let el;

  function init() {
    el = grabElement(selector);
    el.classList.add('message', 'message--hidden', `message--${type}`);
    el.innerHTML = message;
  }

  function updateContent(newContent) {
    el.innerHTML = newContent;
  }

  function show() {
    el.classList.remove('message--hidden');
  }

  function hide() {
    el.classList.add('message--hidden');
  }

  init();

  return {
    updateContent,
    show,
    hide,
  };
}

export default Message;
