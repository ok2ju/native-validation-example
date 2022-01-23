import './style.css'

const form = document.getElementById('form');
form.noValidate = true;

/**
 * Note: `username` uses standard html5 validation
 */
form.addEventListener('submit', (event) => {
  const formInstance = event.target;
  const formControls = Array.from(formInstance.elements);

  // Reset controls validation state
  formControls.forEach((control) => {
    control.setCustomValidity('');
    control.parentElement.classList.remove('invalid');
  });

  const isEmailSet = !!formInstance.email.value;
  const isTelephoneSet = !!formInstance.tel.value;

  formInstance.email.setCustomValidity(isEmailSet ? '' : 'Email is not set');
  formInstance.tel.setCustomValidity(isTelephoneSet ? '' : 'Telephone is not set');

  if (!formInstance.checkValidity()) {
    // Don't submit form if form has invalid state
    event.preventDefault();
    event.stopImmediatePropagation();

    formControls.forEach((control) => {
      if (!control.checkValidity()) {
        control.parentElement.classList.add('invalid');
      }
    });
  }
});