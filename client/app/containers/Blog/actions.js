/*
 * Blog Actions
 */

import {
  GET_PAGINATED_POSTS,
  GET_POST_BY_SLUG,
  GET_POSTS,
  SET_POST,
  SET_POSTS,
  SET_PAGINATED_POSTS,
  GET_POSTS_FAILED,
} from './constants';

/**
 * Submit a request for one post by slug
 *
 * @return {object}    An action object with a type of GET_POST_BY_SLUG
 */
function getPostBySlug(slug) {
  return {
    type: GET_POST_BY_SLUG,
    slug,
  };
}

/**
 * Submit a request for all posts
 *
 * @return {object}    An action object with a type of GET_POSTS
 */
function getAllPosts() {
  return {
    type: GET_POSTS,
  };
}

/**
 * Submit a request for all posts from one 'page' in the DB
 *
 * @return {object}    An action object with a type of GET_PAGINATED_POSTS
 */
function getPageOfPosts(page) {
  return {
    type: GET_PAGINATED_POSTS,
    page,
  };
}

/**
 * Updates the currently focused post
 *
 * @param  {post} post Post object to be set
 *
 * @return {object}    An action object with a type of SET_POST
 */
function setPost(post) {
  return {
    type: SET_POST,
    post,
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
 * Updates the currently page of posts and updates the store with page stats
 * such as which page is active and how many pages are in the DB
 *
 * @param  {posts} posts Object of post counts, includes an array of posts
 *
 * @return {object}    An action object with a type of SET_PAGINATED_POSTS
 */
function setPaginatedPosts(paginatedData) {
  return {
    type: SET_PAGINATED_POSTS,
    paginatedData,
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
  getPageOfPosts,
  getPostBySlug,
  getAllPosts,
  setPost,
  setPosts,
  setPaginatedPosts,
  getPostsFailed,
};
