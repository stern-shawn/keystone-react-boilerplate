import React, { PropTypes } from 'react';
import classNames from 'classnames';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const Paginator = ({ currPage, numPages, getPosts }) => {
  let pageRange;

  if (numPages <= 6) {
    // Build up an array of the page indexes from 1...numPages, convert to li's
    pageRange = Array(numPages).fill(0).map((e, i) => i + 1);
  } else {
    const midPoint = Math.floor(numPages / 2);
    pageRange = [1, '...', midPoint - 1, midPoint, midPoint + 1, '...', numPages];
  }

  const pageControls = pageRange.map((val, idx) => {
    // Conditionally add the is-current class from bulma if the current page
    const buttonStyle = classNames({
      [bulma['pagination-link']]: val !== '...',
      [bulma['pagination-ellipsis']]: val === '...',
      [bulma['is-current']]: currPage === val,
    });

    return (
      <li key={idx}>
        <button className={buttonStyle} onClick={() => getPosts(val)}>{val}</button>
      </li>
    );
  });

  // Visually disable the prev/next buttons when at end ranges
  const prevStyle = classNames({
    [bulma['pagination-previous']]: true,
    [bulma['is-disabled']]: currPage === 1,
  });

  const nextStyle = classNames({
    [bulma['pagination-next']]: true,
    [bulma['is-disabled']]: currPage === numPages,
  });

  return (
    <nav className={`${bulma.pagination} ${bulma['is-centered']} ${bulma['is-medium']} ${styles.paginator}`}>
      <a className={prevStyle}>Previous</a>
      <a className={nextStyle}>Next Page</a>
      <ul className={`${bulma['pagination-list']}`}>
        {pageControls}
      </ul>
    </nav>);
};

Paginator.propTypes = {
  currPage: PropTypes.number,
  numPages: PropTypes.number,
  getPosts: PropTypes.func,
};

export default Paginator;
