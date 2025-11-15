// FORM VALIDATIONS

// Validate a single field by name
export function validateField(name: string, value: string, password?: string): string | null {
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
      return null;
  }
}

// Individual validation rules
function validateUsername(username: string): string | null {
  if (!username.trim()) return 'Username is required';
  if (username.length < 10) return 'Username must be at least 10 characters';
  return null
}

function validateEmail(email: string): string | null {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return 'Email is required';
  if (!emailRegex.test(email.trim())) return 'Invalid email address';
  return null;
}

function validatePassword(password: string): string | null {
  if (!password.trim()) return 'Password is required';
  if (password.length < 10) return 'Password must be at least 10 characters';
  return null;
}

function validateConfirmPassword(password: string, confirmPassword: string): string | null {
  if (!confirmPassword.trim()) return 'Confirm Password is required';
  if (password !== confirmPassword) return 'Passwords do not match';
  return null;
}

function validateDropdown(value: string): string | null {
  if (!value.trim()) return 'Please select an option';
  return null;
}