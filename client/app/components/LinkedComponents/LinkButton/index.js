// react-toolbox Button component enhanced to work with react-router-redux's
// push() functionality since react-toolbox doesn't support router by default

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import { Link } from 'react-router';

import styles from './styles.scss';

// Use destructuring like a boss
const LinkButton = ({ label, to }) => (
  <Link to={to}>
    <Button label={label} className={styles.linkButton} />
  </Link>
);

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkButton;
