/*
 * Blog selectors
 */

import { createSelector } from 'reselect';

const selectBlog = (state) => state.get('blog');

const makeSelectCurrentPage = () => createSelector(
  selectBlog,
  (blogState) => blogState.get('currentPage')
);

const makeSelectFocusedPost = () => createSelector(
  selectBlog,
  (blogState) => blogState.get('focusedPost')
);

const makeSelectPosts = () => createSelector(
  selectBlog,
  (blogState) => blogState.get('posts')
);

const makeSelectLoading = () => createSelector(
  selectBlog,
  (blogState) => blogState.get('isLoading')
);

const makeSelectLoadSuccess = () => createSelector(
  selectBlog,
  (blogState) => blogState.get('loadSuccess')
);

const makeSelectMaxPages = () => createSelector(
  selectBlog,
  (blogState) => blogState.get('maxPages')
);

export {
  selectBlog,
  makeSelectCurrentPage,
  makeSelectFocusedPost,
  makeSelectPosts,
  makeSelectLoading,
  makeSelectLoadSuccess,
  makeSelectMaxPages,
};
