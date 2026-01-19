const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"], input[type="text"]');
const submitButton = document.querySelector('button');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Create error message element
const errorMessage = document.createElement('p');
errorMessage.className = 'alert-text';
errorMessage.textContent = 'Oops! Please check your email';
errorMessage.style.display = 'none';
form.appendChild(errorMessage);

// Validate email function
function validateEmail() {
  const emailValue = emailInput.value.trim();
  
  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add('alert');
    errorMessage.style.display = 'block';
    return false;
  } else {
    emailInput.classList.remove('alert');
    errorMessage.style.display = 'none';
    return true;
  }
}

// Real-time validation on input change
emailInput.addEventListener('change', validateEmail);
emailInput.addEventListener('blur', validateEmail);

// Form submission
form.addEventListener('submit', function(event) {
  if (!validateEmail()) {
    event.preventDefault();
  }
});
