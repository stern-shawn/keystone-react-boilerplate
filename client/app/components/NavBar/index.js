import React from 'react';

// Components
import LinkButton from '../LinkedComponents/LinkButton';

// Styles
import styles from './styles.scss';

const NavBar = () => (
  <nav className={styles.bar}>
    <LinkButton label="Home" to="/" />
    <LinkButton label="Features" to="/features" />
  </nav>
);

export default NavBar;
