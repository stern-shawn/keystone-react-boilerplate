/*
 * BlogReducer
 */
import { fromJS } from 'immutable';

import {
  GET_POST_BY_SLUG,
  GET_POSTS,
  SET_POST,
  SET_POSTS,
  GET_POSTS_FAILED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  isLoading: false,
  focusedPost: {},
  posts: [],
});

// Show posts in newest first order
// const makeChronological = (posts) => posts.reverse();

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_BY_SLUG:
      console.log('Beginning action to get specified post');
      return state
        .set('isLoading', true);
    case GET_POSTS:
      console.log('Beginning action to get posts');
      return state
        .set('isLoading', true);
    case SET_POST:
      console.log('Setting focused post');
      // Update the currently focused post object
      return state
        .set('focusedPost', action.post)
        .set('isLoading', false);
    case SET_POSTS:
      console.log('Posts retrieved successfully, adding to store');
      // Update the contents of the posts array
      return state
        .set('posts', action.posts)
        .set('isLoading', false);
    case GET_POSTS_FAILED:
      console.log('Failed to get posts');
      // More, actual behavior later...
      return state
        .set('isLoading', false)
        .set('posts', []);
    default:
      return state;
  }
}

export default blogReducer;
