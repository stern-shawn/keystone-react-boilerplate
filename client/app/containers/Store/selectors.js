/*
 * Store selectors
 */

import { createSelector } from 'reselect';

const selectStore = (state) => state.get('store');

const makeSelectItems = () => createSelector(
  selectStore,
  (storeState) => storeState.get('items')
);

const makeSelectLoading = () => createSelector(
  selectStore,
  (storeState) => storeState.get('isLoading')
);

const makeSelectLoadSuccess = () => createSelector(
  selectStore,
  (storeState) => storeState.get('loadSuccess')
);

export {
  selectStore,
  makeSelectItems,
  makeSelectLoading,
  makeSelectLoadSuccess,
};
