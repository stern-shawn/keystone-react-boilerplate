import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';

// Styles
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';

// Components
import RangeButtons from './RangeButtons';

const Paginator = ({ currPage, numPages }) => {
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
      {currPage > 1
        ? <Link to={`/page/${currPage - 1}`} className={prevStyle}>Previous</Link>
        : <Link to={`/page/${currPage}`} className={prevStyle} onClick={(e) => e.preventDefault()}>Previous</Link>
      }
      {currPage < numPages
        ? <Link to={`/page/${currPage + 1}`} className={nextStyle}>Next</Link>
        : <Link to={`/page/${currPage}`} className={nextStyle} onClick={(e) => e.preventDefault()}>Next</Link>
      }
      <RangeButtons currPage={currPage} numPages={numPages} />
    </nav>
  );
};

Paginator.propTypes = {
  currPage: PropTypes.number,
  numPages: PropTypes.number,
};

export default Paginator;
