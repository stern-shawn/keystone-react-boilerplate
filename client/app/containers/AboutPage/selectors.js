/*
 * About Page selectors
 */

import { createSelector } from 'reselect';

const selectStore = (state) => state.get('aboutPage');

const makeSelectTitle = () => createSelector(
  selectStore,
  (storeState) => storeState.get('title')
);

const makeSelectHeroImage = () => createSelector(
  selectStore,
  (storeState) => storeState.get('heroImage')
);

const makeSelectContent = () => createSelector(
  selectStore,
  (storeState) => storeState.get('content')
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
  makeSelectTitle,
  makeSelectHeroImage,
  makeSelectContent,
  makeSelectLoading,
  makeSelectLoadSuccess,
};
