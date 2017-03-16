/*
 * BlogReducer
 */
import { fromJS } from 'immutable';

import {
  GET_ALL_POSTS,
  GET_PAGINATED_POSTS,
  GET_POST_BY_SLUG,
  GET_POSTS_FAILED,
  SET_PAGINATED_POSTS,
  SET_POST,
  SET_POSTS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  isLoading: true,
  focusedPost: null,
  posts: null,
  currentPage: 1,
  maxPages: 1,
});

// Show posts in newest first order
// const makeChronological = (posts) => posts.reverse();

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      console.log('Beginning action to get all posts');
      return state
        .set('isLoading', true);
    case GET_PAGINATED_POSTS:
      console.log('Beginning action to get page of posts');
      return state
        .set('isLoading', true);
    case GET_POST_BY_SLUG:
      console.log('Beginning action to get specified post');
      return state
        .set('isLoading', true);
    case GET_POSTS_FAILED:
      console.log('Failed to get posts');
      // More, actual behavior later...
      return state
        .set('isLoading', false)
        .set('posts', []);
    case SET_PAGINATED_POSTS:
      console.log(`Posts from page ${action.paginatedData.currentPage} retrieved successfully, adding to store`);
      // Update the contents of the posts array and pagination data
      return state
        .set('posts', action.paginatedData.results)
        .set('currentPage', action.paginatedData.currentPage)
        .set('maxPages', action.paginatedData.totalPages)
        .set('isLoading', false);
    case SET_POST:
      console.log('Setting focused post');
      // Update the currently focused post object
      return state
        .set('focusedPost', action.post)
        .set('isLoading', false);
    case SET_POSTS:
      console.log('Posts retrieved successfully, adding to store');
      // Update the contents of the posts array
      return state
        .set('posts', action.posts)
        .set('isLoading', false);
    default:
      return state;
  }
}

export default blogReducer;
