// react-toolbox Button component enhanced to work with react-router-redux's
// push() functionality since react-toolbox doesn't support router by default

import React, { PropTypes } from 'react';
import { push } from 'react-router-redux';
import { Button } from 'react-toolbox/lib/button';
import { connect } from 'react-redux';

// Use destructuring like a boss
const LinkButton = ({ label, to, changeRoute }) => (
  <Button label={label} onClick={() => { changeRoute(to); }} />
);

const mapDispatchToProps = (dispatch) => ({
  changeRoute: (url) => dispatch(push(url)),
  dispatch,
});

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  changeRoute: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LinkButton);
