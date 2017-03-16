import { fromJS } from 'immutable';

import {
  selectBlog,
  makeSelectCurrentPage,
  makeSelectFocusedPost,
  makeSelectPosts,
  makeSelectLoading,
  makeSelectMaxPages,
} from '../selectors';

const blogState = fromJS({
  isLoading: true,
  focusedPost: 'test-post-1',
  posts: 'so many posts',
  currentPage: 1,
  maxPages: 5,
});
const mockedState = fromJS({
  global: null,
  blog: blogState,
  location: null,
});

describe('selectBlog', () => {
  it('should select only the blog state object from the store', () => {
    expect(selectBlog(mockedState)).toEqual(blogState);
  });
});

describe('makeSelectCurrentPage', () => {
  const pageSelector = makeSelectCurrentPage();
  it('should select the current page number for posts', () => {
    const page = 1;
    expect(pageSelector(mockedState)).toEqual(page);
  });
});

describe('makeSelectFocusedPost', () => {
  const postSelector = makeSelectFocusedPost();
  it('should select the focused post', () => {
    const post = 'test-post-1';
    expect(postSelector(mockedState)).toEqual(post);
  });
});

describe('makeSelectPosts', () => {
  const postsSelector = makeSelectPosts();
  it('should select the cached list of posts', () => {
    const posts = 'so many posts';
    expect(postsSelector(mockedState)).toEqual(posts);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading state', () => {
    const loading = true;
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectMaxPages', () => {
  const maxPagesSelector = makeSelectMaxPages();
  it('should select the max number of blog pages', () => {
    const maxPages = 5;
    expect(maxPagesSelector(mockedState)).toEqual(maxPages);
  });
});
