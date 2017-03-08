/*
 * BlogReducer
 */
import { fromJS } from 'immutable';

import {
  SET_POSTS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  posts: [],
});

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      // Update the contents of the posts array
      return state
        .set('posts', action.posts);
    default:
      return state;
  }
}

export default blogReducer;
