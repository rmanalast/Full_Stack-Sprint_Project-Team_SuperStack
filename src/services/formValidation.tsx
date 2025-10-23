// FORM VALIDATIONS

// Validate a single field by name
export function validateField(name: string, value: string, password?: string): string {
  switch (name) {
    case 'username':
      return validateUsername(value);
    case 'email':
      return validateEmail(value);
    case 'password':
      return validatePassword(value);
    case 'confirmPassword':
      return validateConfirmPassword(password || '', value);
    case 'dropdown':
      return validateDropdown(value);
    default:
      return '';
  }
}

// Individual validation rules
function validateUsername(username: string): string {
  if (!username.trim()) return 'Username is required';
  if (username.length < 10) return 'Username must be at least 10 characters';
  return '';
}

function validateEmail(email: string): string {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return 'Email is required';
  if (!emailRegex.test(email)) return 'Invalid email address';
  return '';
}

function validatePassword(password: string): string {
  if (!password.trim()) return 'Password is required';
  if (password.length < 10) return 'Password must be at least 10 characters';
  return '';
}

function validateConfirmPassword(password: string, confirmPassword: string): string {
  if (!confirmPassword.trim()) return 'Confirm Password is required';
  if (password !== confirmPassword) return 'Passwords do not match';
  return '';
}

function validateDropdown(value: string): string {
  if (!value.trim()) return 'Please select an option';
  return '';
}