import { Form, Formik, FormikHelpers } from 'formik';
import css from './AuthForm.module.css';
import { registerSchema } from '../../services/schemas';
import { FcGoogle } from 'react-icons/fc';
import FormLabel from '../FormLabel/FormLabel';

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
          <FormLabel
            fieldType="text"
            name="name"
            fieldPlaceholder="Enter your name"
          />
          <FormLabel
            fieldType="text"
            name="phone"
            fieldPlaceholder="Enter your phone number"
          />
          <FormLabel
            fieldType="email"
            name="email"
            fieldPlaceholder="Enter your email"
          />
          <FormLabel
            fieldType="password"
            name="password"
            fieldPlaceholder="Enter password"
          />

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
