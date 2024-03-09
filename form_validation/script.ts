const mailInput = document.getElementById('mail') as HTMLInputElement;
const mailError = document.getElementById('error-mail') as HTMLSpanElement;
const form = document.querySelector('form') as HTMLFormElement;

if (mailInput && mailError) {
  mailInput.addEventListener('input', () => {
    if (mailInput.validity.valid) {
      // Removes previous error messages
      mailError.textContent = "";
    }
    else {
      displayError();
    }
  });
}

if (form) {
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      displayError;
      // Prevents the form form submitting
      e.preventDefault();
    }
  });
}

const displayError = () => {
  if (mailError && mailInput) {
    if (mailInput.validity.tooShort) {
      mailError.textContent = "Enter email longer than 5 characters.";
    }
    else if (mailInput.validity.tooLong) {
      mailError.textContent = "Enter email shorter than 25 characters.";
    }
    else if (mailInput.validity.valueMissing) {

      mailError.textContent = "Enter an email address.";
    }
    else if (mailInput.validity.typeMismatch) {
      mailError.textContent = "Invalid email address.";
    }
  }
};
