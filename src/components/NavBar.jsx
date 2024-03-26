import { useState } from 'react';
import { RiReactjsLine, RiMenu3Fill, RiDeleteBack2Line } from '@remixicon/react';
import styles from "./cssModuleComponent/NavBar.module.css";
import NavTab from './NavTab';
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickopen = () => {

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <Link className={styles.navData} to="/">
          <RiReactjsLine className={styles.reactIcon} />
          React Jobs
        </Link>
        <div
          className={styles.navIcon}
          id="navIcon"
          onClick={onClickopen}
        >
          {!isMenuOpen && <RiMenu3Fill className={styles.navIconOpen} />}
          {isMenuOpen && <RiDeleteBack2Line className={styles.navIconClose} />}
        </div>
      </header>
      {isMenuOpen && <NavTab />}
    </>
  );
};

export default NavBar;
