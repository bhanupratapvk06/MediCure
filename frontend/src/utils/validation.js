import * as yup from 'yup';

// Common field validators
export const requiredString = yup
  .string()
  .required('This field is required')
  .trim();

export const email = yup
  .string()
  .email('Please enter a valid email address')
  .required('Email is required');

export const phone = yup
  .string()
  .matches(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number with country code')
  .required('Phone number is required');

export const minLength = (min, message) =>
  yup
    .string()
    .min(min, message || `Minimum ${min} characters required`);

export const maxLength = (max, message) =>
  yup
    .string()
    .max(max, message || `Maximum ${max} characters allowed`);

export const number = yup
  .number()
  .typeError('Please enter a valid number')
  .required('This field is required')
  .positive('Value must be positive')
  .integer('Value must be an integer');

export const minNumber = (min, message) =>
  yup
    .number()
    .min(min, message || `Minimum value is ${min}`);

export const maxNumber = (max, message) =>
  yup
    .number()
    .max(max, message || `Maximum value is ${max}`);

// Form schemas
export const contactFormSchema = yup.object({
  name: requiredString.min(2, 'Name must be at least 2 characters'),
  email: email,
  message: requiredString.min(10, 'Message must be at least 10 characters'),
});

export const rareInjectionSchema = yup.object({
  name: requiredString,
  quantity: number.min(1, 'Quantity must be at least 1'),
  urgency: yup
    .string()
    .oneOf(['Low', 'Medium', 'High'], 'Please select a valid urgency level')
    .required('Urgency level is required'),
  location: requiredString,
  contact: phone,
});

// Utility functions
export const validateForm = async (schema, values) => {
  try {
    await schema.validate(values, { abortEarly: false });
    return { valid: true, errors: {} };
  } catch (err) {
    const errors = {};
    err.inner.forEach((error) => {
      errors[error.path] = error.message;
    });
    return { valid: false, errors };
  }
};

export const getFieldError = (errors, fieldName) => {
  return errors[fieldName] || '';
};
