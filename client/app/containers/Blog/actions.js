/*
 * Blog Actions
 */

import {
  SET_POSTS,
} from './constants';

/**
 * Updates the currently cached posts
 *
 * @param  {posts} posts Array of new posts to be set
 *
 * @return {object}    An action object with a type of SET_POSTS
 */
export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts,
  };
}
