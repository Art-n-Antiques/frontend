import { Form, Formik, FormikHelpers } from 'formik';
import css from '../RegisterForm/AuthForm.module.css';
import { FcGoogle } from 'react-icons/fc';
import { loginSchema } from '../../services/schemas';
import FormLabel from '../FormLabel/FormLabel';

const LoginForm: React.FC = () => {
  type FormData = {
    email: string;
    password: string;
  };

  const INITIAL_FORM_DATA: FormData = {
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
      <h1 className={css.title}>Sign in</h1>
      <Formik
        validationSchema={loginSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <FormLabel
            fieldType="email"
            name="email"
            fieldPlaceholder="Enter your email"
          />
          <FormLabel
            fieldType="password"
            name="password"
            fieldPlaceholder="Enter your password"
          />

          <button type="submit">
            <span>Sign in</span>
          </button>
          <button type="button">
            <FcGoogle /> Google
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
