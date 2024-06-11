import Layout from './components/Layout/Layout';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './index.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const CartPage = lazy(() => import('./pages/CartPage'));

function App() {
  return (
    <Suspense fallback={null}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Navigate to={'/'} replace />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
