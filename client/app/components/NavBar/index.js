import React from 'react';

// Components
import LinkButton from '../LinkedComponents/LinkButton';

// Styles
import styles from './styles.scss';

const NavBar = () => (
  <nav className={styles.bar}>
    <LinkButton label="Home" to="/" />
    <LinkButton label="Blog" to="/page/1" />
    <LinkButton label="Store" to="/store" />
    <LinkButton label="About" to="/about" />
  </nav>
);

export default NavBar;
