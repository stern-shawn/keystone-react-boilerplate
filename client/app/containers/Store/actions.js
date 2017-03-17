/*
 * Square Store Actions
 */

import {
  GET_ALL_ITEMS,
  GET_ITEMS_FAILED,
  SET_ITEMS,
} from './constants';

/**
 * Submit a request for all items in Square Market
 *
 * @return {object}    An action object with a type of GET_ALL_ITEMS
 */
function getAllItems() {
  return {
    type: GET_ALL_ITEMS,
  };
}

/**
 * Fallback method for if the API failed to respond with items
 *
 * @return {object}    An action object with a type of GET_ITEMS_FAILED
 */
function getItemsFailed() {
  return {
    type: GET_ITEMS_FAILED,
  };
}

/**
 * Creates/Updates the currently cached items
 *
 * @param  {posts} items Array of new items to be set
 *
 * @return {object}    An action object with a type of SET_POSTS
 */
function setItems(items) {
  return {
    type: SET_ITEMS,
    items,
  };
}

export {
  getAllItems,
  getItemsFailed,
  setItems,
};
