import React, { PropTypes } from 'react';
import classNames from 'classnames';

// Styles
import styles from './styles.scss';

const LandingHeader = ({ compact }) => {
  // Scroll content area to top of viewport
  // Make an arrow function, free binding of this :D
  const scrollToContent = () => {
    const target = document.getElementById('content');
    // scrollIntoView is only supported by Firefox at the moment, remember to
    // import the polyfill for this
    target.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  // Remove focus from button after click to scroll, powered by refs
  const handleClick = () => {
    scrollToContent();
    this.contentArrow.blur();
  };

  const contentStyle = classNames({
    [styles.blogHeader]: true,
    [styles.compact]: compact,
  });

  return (
    <header>
      <div className={contentStyle}>
        <div className={styles.headerContent}>
          <h1>Hipster Blog Title</h1>
          <h2>Chillwave shabby chic retro glossier seitan pitchfork.</h2>
        </div>
        {!compact && <button
          ref={(button) => { this.contentArrow = button; }}
          className={styles.contentArrow}
          onClick={() => handleClick()}
        />}
      </div>
    </header>
  );
};

LandingHeader.propTypes = {
  compact: PropTypes.bool.isRequired,
};

export default LandingHeader;
