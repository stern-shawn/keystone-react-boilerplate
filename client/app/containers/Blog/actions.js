/*
 * Blog Actions
 */

import {
  GET_POSTS,
  SET_POSTS,
  GET_POSTS_FAILED,
} from './constants';

/**
 * Submit a request for all posts
 *
 * @return {object}    An action object with a type of GET_POSTS
 */
function getPosts() {
  return {
    type: GET_POSTS,
  };
}

/**
 * Updates the currently cached posts
 *
 * @param  {posts} posts Array of new posts to be set
 *
 * @return {object}    An action object with a type of SET_POSTS
 */
function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts,
  };
}

/**
 * Fallback method for if the API failed to respond with posts
 *
 * @return {object}    An action object with a type of GET_POSTS_FAILED
 */
function getPostsFailed() {
  return {
    type: GET_POSTS_FAILED,
  };
}

export {
  getPosts,
  setPosts,
  getPostsFailed,
};
