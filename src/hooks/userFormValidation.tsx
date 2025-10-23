import { useState, useEffect } from 'react';
import * as services from '../services/formValidation';

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
    setValues,
  };
}