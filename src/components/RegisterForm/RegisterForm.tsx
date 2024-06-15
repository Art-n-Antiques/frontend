import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import css from './AuthForm.module.css';
import { registerSchema } from '../../services/schemas';
import { FcGoogle } from 'react-icons/fc';

const RegisterForm: React.FC = () => {
  type FormData = {
    name: string;
    phone: string;
    email: string;
    password: string;
  };

  const INITIAL_FORM_DATA: FormData = {
    name: '',
    phone: '',
    email: '',
    password: '',
  };

  const handleSubmit = (
    data: FormData,
    actions: FormikHelpers<FormData>
  ): void => {
    console.log(data);
    actions.resetForm();
  };
  return (
    <div>
      <h1 className={css.title}>Sign up</h1>
      <Formik
        validationSchema={registerSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
            />
            <ErrorMessage
              className={css.errorMsg}
              name="name"
              component="span"
            />
          </label>

          <label className={css.label}>
            <Field
              className={css.input}
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              autoComplete="off"
            />
            <ErrorMessage
              className={css.errorMsg}
              name="phone"
              component="span"
            />
          </label>

          <label className={css.label}>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
            <ErrorMessage
              className={css.errorMsg}
              name="email"
              component="span"
            />
          </label>

          <label className={css.label}>
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="Enter password"
              autoComplete="off"
            />
            <ErrorMessage
              className={css.errorMsg}
              name="password"
              component="span"
            />
          </label>

          <button type="submit">
            <span>Register</span>
          </button>
          <button type="button">
            <FcGoogle /> Google
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
