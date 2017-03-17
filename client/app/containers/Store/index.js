import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LoadingIndicator from 'components/LoadingIndicator';
import { monify, spinalCase } from 'utils/storeUtils';
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';
import { getAllItems } from './actions';
import { makeSelectItems, makeSelectLoading } from './selectors';

export class Store extends Component {
  componentDidMount() {
    // Fetch store items from Square Market
    this.props.onGetItems();
  }

  render() {
    const {
      items,
      loading,
    } = this.props;

    const shopCards = items && items.map((item, index) => {
      const marketUrl = `https://squareup.com/market/wergittep/${spinalCase(item.name)}`;
      const price = monify(item.variations[0].price_money.amount);
      return (
        <div className={`${bulma.column} ${bulma['is-one-quarter']}`}>
          <div key={index} className={bulma.card}>
            <div className={bulma['card-image']}>
              <figure className={`${bulma.image} ${bulma['is-1by1']}`}>
                <img src={item.master_image.url} alt={item.name} />
                <div className={styles.buyOverlay}>
                  <a href={marketUrl} target="_blank" className={`${styles.hiddenButton} ${bulma.button} ${bulma['is-success']}`}>
                      Buy
                    </a>
                </div>
              </figure>
            </div>

            <div className={bulma['card-content']}>
              <div className={bulma.content}>
                <h5>
                  <a href={marketUrl} target="_blank">
                    {item.name}
                  </a>
                </h5>
                <h6>
                  <a href={marketUrl} target="_blank" className={styles.storeLink}>
                    Browse my store
                  </a>
                </h6>
                <a href={marketUrl} target="_blank" className={`${bulma.button} ${bulma['is-success']} ${bulma['is-outlined']} ${bulma['is-fullwidth']}`}>
                  Buy now for ${price}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className={`${bulma.container} ${styles.storeContainer} ${bulma.content}`}>
        <h1 className={styles.mainHeader}>Welcome to my store!</h1>
        <div className={bulma.columns}>
          {loading ? <LoadingIndicator /> : shopCards}
        </div>
      </div>
    );
  }
}

Store.propTypes = {
  items: React.PropTypes.array,
  loading: React.PropTypes.bool,
  onGetItems: React.PropTypes.func,
};

export const mapDispatchToProps = (dispatch) => ({
  onGetItems: () => dispatch(getAllItems()),
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  items: makeSelectItems(),
  loading: makeSelectLoading(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(Store);
