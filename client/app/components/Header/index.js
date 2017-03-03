import React from 'react';

// Components
import NavBar from '../NavBar';

// Styles
import styles from './styles.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  scrollTo() {
    const target = document.getElementById('content');
    // scrollIntoView is only supported by Firefox at the moment, remember to
    // import the polyfill for this
    target.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    return (
      <header>
        <NavBar />
        <div className={styles.blogHeader}>
          <div className={styles.headerContent}>
            <h1>Hipster Blog Title</h1>
            <h2>Chillwave shabby chic retro glossier seitan pitchfork. Pabst vape man bun mlkshk kale chips, swag ramps four dollar toast.</h2>
          </div>
          <a className={styles.contentArrow} onClick={() => this.scrollTo()}> </a>
        </div>
      </header>
    );
  }
}

export default Header;
