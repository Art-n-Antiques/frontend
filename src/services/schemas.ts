import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'password must be at least 7 characters!')
    .max(50, 'password must be less than 50 characters!')
    .required('password is required!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
      'Password must include a lowercase letter, an uppercase letter, and a number'
    ),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Register name must be at least 3 characters!')
    .max(50, 'Register name must be less than 50 characters!')
    .required('Register name is required!'),
  tel: Yup.string()
    .min(5, 'Phone number must be at least 5 characters!')
    .max(20, 'Phone number must be less than 20 characters!')
    .required('Phone number is required!')
    .matches(
      /^\+?(\d{1,3})?[- .]?\(?\d{3}\)?[- .]?\d{3}[- .]?\d{1,4}$/,
      'Password must include a lowercase letter, an uppercase letter, and a number'
    ),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'password must be at least 7 characters!')
    .max(50, 'password must be less than 50 characters!')
    .required('password is required!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
      'Password must include a lowercase letter, an uppercase letter, and a number'
    ),
});
