/*
 * StoreReducer
 */
import { fromJS } from 'immutable';

import {
  GET_ALL_ITEMS,
  GET_ITEMS_FAILED,
  SET_ITEMS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  isLoading: true,
  items: null,
  loadSuccess: true,
});

function StoreReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ITEMS:
      console.log('Beginning action to get all items');
      return state
        .set('isLoading', true);
    case GET_ITEMS_FAILED:
      console.log('Failed to get items from Square');
      return state
        .set('isLoading', false)
        .set('posts', null)
        .set('loadSuccess', false);
    case SET_ITEMS:
      console.log('Items retrieved successfully, adding to store... ha');
      return state
        .set('items', action.items)
        .set('isLoading', false)
        .set('loadSuccess', true);
    default:
      return state;
  }
}

export default StoreReducer;
