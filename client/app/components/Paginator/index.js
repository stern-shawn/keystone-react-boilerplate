import React, { PropTypes } from 'react';
import classNames from 'classnames';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

const Paginator = ({ currPage, numPages }) => {
  let pageRange;

  if (numPages <= 6) {
    // Build up an array of the page indexes from 1...numPages, convert to li's
    pageRange = Array(numPages).fill(0).map((e, i) => i + 1);
  } else {
    pageRange = [1, '...', Math.floor(numPages / 2) - 1, Math.floor(numPages / 2), Math.floor(numPages / 2) + 1, '...', numPages];
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
        <a className={buttonStyle}>{val}</a>
      </li>
    );
  });

  return (
    <nav className={`${bulma.pagination} ${bulma['is-centered']} ${bulma['is-medium']} ${styles.paginator}`}>
      <a className={`${bulma['pagination-previous']}`}>Previous</a>
      <a className={`${bulma['pagination-next']}`}>Next Page</a>
      <ul className={`${bulma['pagination-list']}`}>
        {pageControls}
        {/*<li><a className={`${bulma['pagination-link']}`}>1</a></li>
        <li><span className={`${bulma['pagination-ellipsis']}`}>&hellip;</span></li>
        <li><a className={`${bulma['pagination-link']}`}>45</a></li>
        <li><a className={`${bulma['pagination-link']} ${bulma['is-current']}`}>46</a></li>
        <li><a className={`${bulma['pagination-link']}`}>47</a></li>
        <li><span className={`${bulma['pagination-ellipsis']}`}>&hellip;</span></li>
        <li><a className={`${bulma['pagination-link']}`}>86</a></li>*/}
      </ul>
    </nav>);
};

Paginator.propTypes = {
  currPage: PropTypes.number,
  numPages: PropTypes.number,
};

export default Paginator;
