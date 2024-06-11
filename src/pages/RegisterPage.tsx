import RegisterForm from '../components/RegisterForm/RegisterForm';
import AuthWrapper from '../components/AuthWrapper/AuthWrapper';

const RegisterPage: React.FC = () => {
  return (
    <AuthWrapper>
      <RegisterForm />
    </AuthWrapper>
  );
};

export default RegisterPage;
