import React from 'react';

// Components
import LinkButton from '../LinkedComponents/LinkButton';

// Styles
import styles from './styles.scss';

const NavBar = () => (
  <nav className={styles.bar}>
    <LinkButton label="Home" to="/" />
    <LinkButton label="About" to="/about" />
    <LinkButton label="Store" to="/store" />
  </nav>
);

export default NavBar;
