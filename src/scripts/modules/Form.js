function handleSubmit(selector, onSubmit) {
  const form = document.querySelector(selector);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (typeof onSubmit !== 'function') {
      throw new TypeError('onSubmit is not a function');
    }
    // TODO: add validation
    onSubmit(null, new FormData(form));
    form.reset();
  }

  form.addEventListener('submit', handleFormSubmit);
}

export { handleSubmit };
