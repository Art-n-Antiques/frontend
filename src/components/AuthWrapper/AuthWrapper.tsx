import { ReactNode, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import iconDecorLeft from '../../svg/VectorLeft.svg';
import iconDecorRight from '../../svg/VectorRight.svg';
import css from './AuthWrapper.module.css';

type Children = {
  children: ReactNode;
};

const AuthWrapper: React.FC<Children> = ({ children }: Children) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/');

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    modalIsOpen && (
      <div className={css.wrapper}>
        <div className={css.container}>
          <Link className={css.closeBtn} to={backLinkRef.current}>
            <IoMdClose />
          </Link>
          {children}
          <div className={css.decorWrapper}>
            <div>
              <img src={iconDecorLeft} alt="My Decor Icon" />
            </div>
            <div>
              <img src={iconDecorRight} alt="My Decor Icon" />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AuthWrapper;
