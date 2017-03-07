import React from 'react';

// Components
import LinkButton from '../LinkedComponents/LinkButton';

// Styles
import styles from './styles.scss';

// TODO: Replace with a clickable hamburger/etc and have as a slide in side-menu
const NavBar = () => (
  <div className={styles.bar}>
    <LinkButton label="Home" to="/" />
    <LinkButton label="Features" to="/features" />
    <LinkButton label="Blog" to="/blog" />
  </div>
);

export default NavBar;
