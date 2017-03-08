/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
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
