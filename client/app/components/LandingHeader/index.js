import React from 'react';

// Styles
import styles from './styles.scss';

const LandingHeader = () => {
  // Make an arrow function, free binding of this :D
  const scrollTo = () => {
    const target = document.getElementById('content');
    // scrollIntoView is only supported by Firefox at the moment, remember to
    // import the polyfill for this
    target.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <header>
      <div className={styles.blogHeader}>
        <div className={styles.headerContent}>
          <h1>Hipster Blog Title</h1>
          <h2>Chillwave shabby chic retro glossier seitan pitchfork.</h2>
        </div>
        <a className={styles.contentArrow} onClick={() => scrollTo()}> </a>
      </div>
    </header>
  );
};

export default LandingHeader;
