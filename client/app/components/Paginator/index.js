import React, { PropTypes } from 'react';
import classNames from 'classnames';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

// Components
import RangeButtons from './RangeButtons';

const Paginator = ({ currPage, numPages, getPosts }) => {
  // Wrapper function to prevent out of range page requests
  const getPostsSafe = (target) => {
    if (target > 0 && target <= numPages) {
      getPosts(target);
    } else {
      console.warn(`User attempted to request invalid page number: ${target}`);
    }
  };

  const paginatorStyle = classNames(
    bulma.pagination,
    styles.paginator,
    bulma['is-centered'],
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
      <button className={prevStyle} onClick={() => getPostsSafe(currPage - 1)}>Previous</button>
      <button className={nextStyle} onClick={() => getPostsSafe(currPage + 1)}>Next Page</button>
      <RangeButtons currPage={currPage} numPages={numPages} getPosts={getPosts} />
    </nav>
  );
};

Paginator.propTypes = {
  currPage: PropTypes.number,
  numPages: PropTypes.number,
  getPosts: PropTypes.func,
};

export default Paginator;
