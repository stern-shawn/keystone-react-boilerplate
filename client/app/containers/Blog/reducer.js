/*
 * BlogReducer
 */
import { fromJS } from 'immutable';

import {
  CHANGE_PAGE,
  GET_PAGINATED_POSTS,
  GET_POST_BY_SLUG,
  GET_POSTS_FAILED,
  INVALID_PAGE_REQUEST,
  SET_PAGINATED_POSTS,
  SET_POST,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  isLoading: true,
  focusedPost: null,
  posts: null,
  currentPage: 1,
  maxPages: 1,
  loadSuccess: true,
});

// Inject a new page object at the given page key
// Use spread operator instead of Object.assign for brownie points
const appendPostsPage = (currPosts, latestPageNum, latestPage) => ({
  ...currPosts,
  [latestPageNum]: latestPage,
});

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return state
        .set('currentPage', action.page);
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
      return state
        .set('isLoading', false)
        .set('posts', null)
        .set('loadSuccess', false);
    case INVALID_PAGE_REQUEST:
      console.log('User asked for out of range page');
      // User requested an invalid page. Update flags, but also update maxPages
      // so that Paginator can still render correct number of pages
      return state
        .set('isLoading', false)
        .set('loadSuccess', false)
        .set('maxPages', action.failData.totalPages)
        .set('posts', null);
    case SET_PAGINATED_POSTS:
      console.log(`Posts from page ${action.paginatedData.currentPage} retrieved successfully, adding to store`);
      // Update the contents of the posts array and pagination data
      return state
        .set('posts', appendPostsPage(state.get('posts'), action.paginatedData.currentPage, action.paginatedData.results))
        .set('currentPage', action.paginatedData.currentPage)
        .set('maxPages', action.paginatedData.totalPages)
        .set('isLoading', false)
        .set('loadSuccess', true);
    case SET_POST:
      console.log('Setting focused post');
      // Update the currently focused post object
      return state
        .set('focusedPost', action.post)
        .set('isLoading', false)
        .set('loadSuccess', true);
    default:
      return state;
  }
}

export default blogReducer;
