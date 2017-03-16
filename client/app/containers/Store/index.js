import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import bulma from 'styles/bulma.scss';

export class Store extends Component { // eslint-disable-line
  componentDidMount() {
    this.appendNode();
    this.appendScript();
  }

  appendNode = () => {
    const squareStoreNode = document.createElement('a');
    squareStoreNode.className = 'sq-embed-item';
    squareStoreNode.setAttribute('href', 'https://squareup.com/market/wergittep/book');
    squareStoreNode.setAttribute('target', '_blank');
    this.divNode.appendChild(squareStoreNode);
  };

  appendScript = () => {
    // First check to see if it's already been loaded. It won't fire again so we'll need to remove and re-append
    if (document.getElementById('sq-embed-js')) {
      const scriptToRemove = document.getElementById('sq-embed-js');
      scriptToRemove.remove(scriptToRemove);
    }
    const squareScript = document.createElement('script');
    squareScript.id = 'sq-embed-js';
    squareScript.async = true;
    squareScript.src = 'https://d2dyi2pd86a6cw.cloudfront.net/market/embed.js';
    document.body.appendChild(squareScript);
  }

  render() {
    return (
      <div ref={(div) => { this.divNode = div; }} className={bulma.container} />
    );
  }
}

// <div className={bulma.container}>
//   <a href="https://squareup.com/market/joshu/black-keychain" className="sq-embed-item">Black Keychain on Square Market</a>
//   <script src="https://d2dyi2pd86a6cw.cloudfront.net/market/embed.js" id="sq-embed-js" charSet="utf-8"></script>
// </div>

export const mapDispatchToProps = () => ({

});

const mapStateToProps = createStructuredSelector({

});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(Store);
