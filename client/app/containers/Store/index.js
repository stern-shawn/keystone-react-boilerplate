import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import bulma from 'styles/bulma.scss';

export class Store extends Component { // eslint-disable-line
  render() {
    return (
      <div className={bulma.container}>
        {'This is a store page'}
      </div>
    );
  }
}

export const mapDispatchToProps = () => ({

});

const mapStateToProps = createStructuredSelector({

});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(Store);
