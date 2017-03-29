import React from 'react';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

// Components
// import LinkButton from '../LinkedComponents/LinkButton';

const NavBar = () => (
  <nav className={`${bulma.pagination} ${bulma['is-centered']} ${styles.paginator}`}>
    <a className={`${bulma['pagination-previous']}`}>Previous</a>
    <a className={`${bulma['pagination-next']}`}>Next Page</a>
    <ul className={`${bulma['pagination-list']}`}>
      <li><a className={`${bulma['pagination-link']}`}>1</a></li>
      <li><span className={`${bulma['pagination-ellipsis']}`}>&hellip;</span></li>
      <li><a className={`${bulma['pagination-link']}`}>45</a></li>
      <li><a className={`${bulma['pagination-link']} ${bulma['is-current']}`}>46</a></li>
      <li><a className={`${bulma['pagination-link']}`}>47</a></li>
      <li><span className={`${bulma['pagination-ellipsis']}`}>&hellip;</span></li>
      <li><a className={`${bulma['pagination-link']}`}>86</a></li>
    </ul>
  </nav>
);

export default NavBar;
