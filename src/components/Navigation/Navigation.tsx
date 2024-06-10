import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

type IsActive = { isActive: boolean };
type LinkClass = ({ isActive }: IsActive) => string;

const Navigation = () => {
  const bildLinkClass: LinkClass = ({ isActive }: IsActive) =>
    clsx(css.link, isActive && css.active);

  return (
    <nav className={css.navigation}>
      <NavLink className={bildLinkClass} to={'/'}>
        Home
      </NavLink>
      <NavLink className={bildLinkClass} to={'/register'}>
        Sign up
      </NavLink>
      <NavLink className={bildLinkClass} to={'/login'}>
        Sign in
      </NavLink>
      <NavLink className={bildLinkClass} to={'/cart'}>
        Cart (here will be cart icon)
      </NavLink>
    </nav>
  );
};

export default Navigation;
