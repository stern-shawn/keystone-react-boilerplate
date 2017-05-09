import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';

// Styles
import bulma from 'styles/bulma.scss';

// Given a range of pages, render the numeric buttons for accessing respective pages
const RangeButtons = ({ currPage, numPages }) => {
  const midPoint = Math.floor(numPages / 2);

  let pageRange;
  switch (true) {
    case numPages < 10:
      // Build up an array of the page indicies from 1...numPages for our li's
      pageRange = Array(numPages).fill(0).map((e, i) => i + 1);
      break;
    case currPage <= 3:
      // Directly show 1-3 at this low range and show midpoint/end for sense of scale
      pageRange = [1, 2, 3, '...', midPoint, '...', numPages];
      break;
    case currPage >= (numPages - 2):
      // Likewise, show last three at this range and beginning/midpoint for sense of scale
      pageRange = [1, '...', midPoint, '...', numPages - 2, numPages - 1, numPages];
      break;
    default:
      // In all other cases, we want the current page to be focused and centered
      pageRange = [1, '...', currPage - 1, currPage, currPage + 1, '...', numPages];
      break;
  }

  const buttons = pageRange.map((val, idx) => {
    // Conditionally add the is-current class from bulma if the current page,
    // and apply proper styling to ellipses vs link elements
    const buttonStyle = classNames({
      [bulma['pagination-link']]: val !== '...',
      [bulma['pagination-ellipsis']]: val === '...',
      [bulma['is-current']]: currPage === val,
    });

    return (
      <li key={idx}>
        {val !== '...' ?
          <Link to={`/page/${val}`} className={buttonStyle}>{val}</Link> :
          <button className={buttonStyle}>{val}</button>}
      </li>
    );
  });

  return (
    <ul className={bulma['pagination-list']}>
      {buttons}
    </ul>
  );
};

RangeButtons.propTypes = {
  currPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default RangeButtons;
