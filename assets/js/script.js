const form = document.querySelector('form');
const emailInput = document.querySelector(
  'input[type="email"], input[type="text"]',
);
const submitButton = document.querySelector('button');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Create error message element
const errorMessage = document.createElement('p');
errorMessage.id = 'email-error';
errorMessage.className = 'alert-text visually-hidden';
errorMessage.textContent = 'Oops! Please check your email';
errorMessage.setAttribute('role', 'alert');
errorMessage.setAttribute('aria-live', 'assertive');

form.appendChild(errorMessage);

// Validate email function
function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add('alert');
    emailInput.setAttribute('aria-invalid', 'true');
    errorMessage.classList.remove('visually-hidden');
    return false;
  } else {
    emailInput.classList.remove('alert');
    emailInput.setAttribute('aria-invalid', 'false');
    errorMessage.classList.add('visually-hidden');
    return true;
  }
}

// Real-time validation on input change
emailInput.addEventListener('change', validateEmail);
emailInput.addEventListener('blur', validateEmail);

// Form submission
form.addEventListener('submit', function (event) {
  if (!validateEmail()) {
    event.preventDefault();
  }
});
