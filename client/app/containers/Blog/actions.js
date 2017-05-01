/*
 * Blog Actions
 */

import {
  CHANGE_PAGE,
  GET_ALL_POSTS,
  GET_PAGINATED_POSTS,
  GET_POST_BY_SLUG,
  GET_POSTS_FAILED,
  INVALID_PAGE_REQUEST,
  SET_PAGINATED_POSTS,
  SET_POST,
} from './constants';

/**
 * Update focused page in the Blog
 *
 * @return {object}    An action object with a type of CHANGE_PAGE
 */
function changeToPage(page) {
  return {
    type: CHANGE_PAGE,
    page,
  };
}

/**
 * Submit a request for all posts
 *
 * @return {object}    An action object with a type of GET_ALL_POSTS
 */
function getAllPosts() {
  return {
    type: GET_ALL_POSTS,
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
 * Fallback method for if the API failed to respond with posts
 *
 * @return {object}    An action object with a type of GET_POSTS_FAILED
 */
function getPostsFailed() {
  return {
    type: GET_POSTS_FAILED,
  };
}

/**
 * Fallback method for if the user requested an invalid page
 *
 * @return {object}    An action object with a type of INVALID_POSTS_REQUEST
 *
 */
function invalidPageRequest(failData) {
  return {
    type: INVALID_PAGE_REQUEST,
    failData,
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

export {
  changeToPage,
  getAllPosts,
  getPageOfPosts,
  getPostBySlug,
  getPostsFailed,
  invalidPageRequest,
  setPaginatedPosts,
  setPost,
};
