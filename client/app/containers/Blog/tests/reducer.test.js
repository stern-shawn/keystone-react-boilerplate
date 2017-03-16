import { fromJS } from 'immutable';

import blogReducer from '../reducer';
import {
  getAllPosts,
  getPageOfPosts,
  getPostBySlug,
  getPostsFailed,
  setPaginatedPosts,
  setPost,
  setPosts,
} from '../actions';

describe('blogReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      isLoading: true,
      focusedPost: null,
      posts: null,
      currentPage: 1,
      maxPages: 1,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(blogReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getAllPosts action correctly', () => {
    const expectedResult = state.set('isLoading', true);

    expect(blogReducer(state, getAllPosts())).toEqual(expectedResult);
  });

  it('should handle the getPageOfPosts action correctly', () => {
    const expectedResult = state.set('isLoading', true);

    expect(blogReducer(state, getPageOfPosts())).toEqual(expectedResult);
  });

  it('should handle the getPostBySlug action correctly', () => {
    const expectedResult = state.set('isLoading', true);

    expect(blogReducer(state, getPostBySlug())).toEqual(expectedResult);
  });

  it('should handle the getPostsFailed action correctly', () => {
    const expectedResult = state.set('isLoading', false)
                                .set('posts', []);

    expect(blogReducer(state, getPostsFailed())).toEqual(expectedResult);
  });

  it('should handle the setPaginatedPosts action correctly', () => {
    const paginatedData = {
      currentPage: 5,
      totalPages: 10,
      results: [{}, {}, {}],
    };
    const expectedResult = state.set('posts', paginatedData.results)
                                .set('currentPage', paginatedData.currentPage)
                                .set('maxPages', paginatedData.totalPages)
                                .set('isLoading', false);

    expect(blogReducer(state, setPaginatedPosts(paginatedData))).toEqual(expectedResult);
  });

  it('should handle the setPost action correctly', () => {
    const post = {
      title: 'my-face',
    };
    const expectedResult = state.set('focusedPost', post)
                                .set('isLoading', false);

    expect(blogReducer(state, setPost(post))).toEqual(expectedResult);
  });

  it('should handle the setPosts action correctly', () => {
    const posts = [
      { title: 'my-face' },
      { title: 'test-post-2' },
    ];
    const expectedResult = state.set('posts', posts)
                                .set('isLoading', false);

    expect(blogReducer(state, setPosts(posts))).toEqual(expectedResult);
  });
});
