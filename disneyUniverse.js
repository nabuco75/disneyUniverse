// Regular expressions (regex) are powerful
// tools for performing pattern matching and can be
// used effectively for form validation.
// Here are a few examples of using regex for
// common form validation scenarios:

// This regex pattern checks if the email address
// has at least one character before and after the "@" symbol,
// with a valid domain extension.
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
// Password Validation (requires at least 8 characters,
// one uppercase letter, one lowercase letter, and one digit):
function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

// This regex pattern checks if the input contains only digits.
function validateNumericInput(input) {
  const regex = /^\d+$/;
  return regex.test(input);
}
