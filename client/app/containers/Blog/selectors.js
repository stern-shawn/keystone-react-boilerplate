/*
 * Blog selectors
 */

import { createSelector } from 'reselect';

const selectBlog = (state) => state.get('blog');

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

export {
  selectBlog,
  makeSelectFocusedPost,
  makeSelectPosts,
  makeSelectLoading,
};
