import React, { PropTypes } from 'react';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

// Components
// import LinkButton from '../LinkedComponents/LinkButton';

const Paginator = ({ currPage, numPages }) => {
  let pageRange = [];
  let pageControls;

  if (numPages < 5) {
    // Build up an array of the page indexes from 1...numPages, convert to li's
    pageRange = Array(numPages).fill(0).map((e, i) => i + 1);
    pageControls = pageRange.map((val) =>
      <li key={val}>
        <a className={`${bulma['pagination-link']}`}>{val}</a>
      </li>
    );
  }

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
