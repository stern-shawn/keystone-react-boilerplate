import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import styles from './styles.scss';

class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="nav" className={styles.bar}>
        <Link to="/" className={styles.link}>
          <FormattedMessage {...messages.home} />
        </Link>
        <Link to="/features" className={styles.link}>
          <FormattedMessage {...messages.features} />
        </Link>
        <Link to="/blog" className={styles.link}>
          Blog
        </Link>
      </div>
    );
  }
}

export default NavBar;
