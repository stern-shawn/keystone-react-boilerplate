/*
 * BlogReducer
 */
import { fromJS } from 'immutable';

import {
  GET_POSTS,
  SET_POSTS,
  GET_POSTS_FAILED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  isLoading: false,
  posts: [],
});

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      console.log('Beginning action to get posts');
      return state
        .set('isLoading', true);
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
