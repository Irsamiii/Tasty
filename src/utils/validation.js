import * as yup from 'yup';

export const signUpSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password')
});

export const signInSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
  rememberMe: yup.boolean()
});

export const businessTypeSchema = yup.object({
  businessType: yup.string().required('Please select a business type'),
  openDays: yup.array().min(1, 'Select at least one day'),
  fromTime: yup.string().required('Opening time is required'),
  toTime: yup.string().required('Closing time is required')
});