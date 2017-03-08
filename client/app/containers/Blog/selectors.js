/**
 * Blog selectors
 */

import { createSelector } from 'reselect';

const selectBlog = (state) => state.get('blog');

const makeSelectPosts = () => createSelector(
  selectBlog,
  (blogState) => blogState.get('posts')
);

export {
  selectBlog,
  makeSelectPosts,
};
