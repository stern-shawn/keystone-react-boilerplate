/*
 * AppReducer
 */

import { fromJS } from 'immutable';

import {
  CLOSE_DRAWER,
  TOGGLE_DRAWER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  drawerActive: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CLOSE_DRAWER:
      return state
        .set('drawerActive', false);
    case TOGGLE_DRAWER:
      return state
        .set('drawerActive', !state.get('drawerActive'));
    default:
      return state;
  }
}

export default appReducer;
