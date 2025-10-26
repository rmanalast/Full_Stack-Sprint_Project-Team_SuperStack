import { useState, useEffect } from 'react';
import * as services from '../services/formValidation';

/**
 * Custom hook for reusable form validation and input handling logic.
 *
 * @param {object} initialValues - Default form field values.
 * @returns {object} - Contains:
 *   - values: current field values
 *   - errors: current validation errors
 *   - isSubmitting: submission state
 *   - handleChange: updates values and validates fields on change
 *   - handleSubmit: processes form submission with validation
 *   - validateAllFields: validates all fields before submission
 *   - resetForm: clears form values and errors
 *   - setValues: manually set form state
 */

type FormValues = { [key: string]: string };
type FormErrors = { [key: string]: string };

export function useFormValidation(initialValues: FormValues = {}) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Validate immediately on change
    const error = services.validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle form submission
  const handleSubmit = (callback: () => void) => (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors: FormErrors = {};
    Object.keys(values).forEach((key) => {
      const error = services.validateField(key, values[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      callback(); // run custom submit logic if valid
    }

    setIsSubmitting(false);
  };

  // Validate all fields manually (for use in WishlistForm)
  const validateAllFields = (): boolean => {
    const newErrors: FormErrors = {};
    Object.keys(values).forEach((key) => {
      const error = services.validateField(key, values[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Reset form values and errors
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  // Log errors for debugging
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log('Validation errors:', errors);
    }
  }, [errors]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    validateAllFields,
    resetForm,
    setValues,
  };
}