import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { spinalCase } from 'utils/storeUtils';
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';
import { getAllItems } from './actions';
import { makeSelectItems } from './selectors';

export class Store extends Component { // eslint-disable-line
  componentDidMount() {
    this.props.onGetItems();
    this.appendNode();
    this.appendScript();
  }

  componentDidUpdate() {
    console.log('New props received, attaching script again');
    this.appendScript();
  }

  appendNode = () => {
    const nodes = [
      {
        text: 'Pledge on Square Market',
        link: 'https://squareup.com/market/wergittep/book',
      },
      {
        text: 'Black Keychain on Square Market',
        link: 'https://squareup.com/market/joshu/black-keychain',
      },
      {
        text: 'Pledge on Square Market',
        link: 'https://squareup.com/market/wergittep/shawn-lifts-the-book',
      },
      {
        text: 'Black Keychain on Square Market',
        link: 'https://squareup.com/market/joshu/black-keychain',
      },
      {
        text: 'Pledge on Square Market',
        link: 'https://squareup.com/market/wergittep/book',
      },
    ];
    nodes.forEach((node) => {
      const squareNode = document.createElement('li');
      squareNode.className = styles.storeItem;
      const squareLink = document.createElement('a');
      squareLink.className = 'sq-embed-item';
      squareLink.href = node.link;
      squareLink.target = '_blank';
      squareLink.text = node.text;
      squareNode.appendChild(squareLink);
      this.ulNode.appendChild(squareNode);
    });
  };

  appendScript = () => {
    // First check to see if it's already been loaded. It won't fire again so we'll need to remove and re-append
    if (document.getElementById('sq-embed-js')) {
      const scriptToRemove = document.getElementById('sq-embed-js');
      scriptToRemove.remove(scriptToRemove);
    }
    const squareScript = document.createElement('script');
    squareScript.id = 'sq-embed-js';
    squareScript.type = 'text/javascript';
    squareScript.async = true;
    squareScript.src = 'https://d2dyi2pd86a6cw.cloudfront.net/market/embed.js';
    document.body.appendChild(squareScript);
  }

  render() {
    const {
      items,
    } = this.props;

    const urlName = items && spinalCase(items[1].name);

    return (
      <div ref={(div) => { this.divNode = div; }} className={`${bulma.container} ${styles.storeContainer} ${bulma.content}`}>
        <h1 className={styles.mainHeader}>Welcome to my store!</h1>
        <h2>{items && items[0].name}</h2>
        {items && <img src={items[0].master_image.url} alt={items[0].name} />}
        {items && <a href={`https://squareup.com/store/wergittep/item/${urlName}`}>{items[1].name} at Sqaure Market</a>}
        <ul ref={(ul) => { this.ulNode = ul; }} className={styles.storeList}>
        </ul>
      </div>
    );
  }
}

// <div className={bulma.container}>
//   <a href="https://squareup.com/market/joshu/black-keychain" className="sq-embed-item">Black Keychain on Square Market</a>
//   <script src="https://d2dyi2pd86a6cw.cloudfront.net/market/embed.js" id="sq-embed-js" charSet="utf-8"></script>
// </div>

Store.propTypes = {
  items: React.PropTypes.array,
  onGetItems: React.PropTypes.func,
};

export const mapDispatchToProps = (dispatch) => ({
  onGetItems: () => dispatch(getAllItems()),
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  items: makeSelectItems(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(Store);
