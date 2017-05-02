import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

// Components
import RangeButtons from './RangeButtons';

const Paginator = ({ currPage, numPages }) => {
  // Wrapper function to prevent out of range page requests
  const getPostsSafe = (e, target) => {
    if (!(target > 0 && target <= numPages)) {
      console.warn(`User attempted to request invalid page number: ${target}`);
      e.preventDefault();
    }
  };

  const paginatorStyle = classNames(
    bulma.pagination,
    styles.paginator,
    bulma['is-right'],
    bulma['is-large']
  );

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
    <nav className={paginatorStyle}>
      <Link to={`/page/${currPage - 1}`} className={prevStyle} onClick={(e) => getPostsSafe(e, currPage - 1)}>
        Previous
      </Link>
      <Link to={`/page/${currPage + 1}`} className={nextStyle} onClick={(e) => getPostsSafe(e, currPage + 1)}>
        Next Page
      </Link>
      <RangeButtons currPage={currPage} numPages={numPages} getPosts={getPostsSafe} />
    </nav>
  );
};

Paginator.propTypes = {
  currPage: PropTypes.number,
  numPages: PropTypes.number,
};

export default Paginator;
