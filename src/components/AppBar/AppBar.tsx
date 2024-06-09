import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={css.header}>
      <NavLink to={'/'}>Art&Antiques</NavLink>
      <Navigation />
    </header>
  );
};

export default AppBar;
