import {
  GET_ALL_POSTS,
  GET_PAGINATED_POSTS,
  GET_POST_BY_SLUG,
  GET_POSTS_FAILED,
  SET_PAGINATED_POSTS,
  SET_POST,
  SET_POSTS,
} from '../constants';

import {
  getAllPosts,
  getPageOfPosts,
  getPostBySlug,
  getPostsFailed,
  setPaginatedPosts,
  setPost,
  setPosts,
} from '../actions';

describe('Blog Actions', () => {
  describe('getAllPosts', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_ALL_POSTS,
      };

      expect(getAllPosts()).toEqual(expectedResult);
    });
  });

  describe('getPageOfPosts', () => {
    it('should return the correct type and the passed page', () => {
      const page = 1;
      const expectedResult = {
        type: GET_PAGINATED_POSTS,
        page,
      };

      expect(getPageOfPosts(page)).toEqual(expectedResult);
    });
  });

  describe('getPostBySlug', () => {
    it('should return the correct type and the passed slug', () => {
      const slug = 'my-face';
      const expectedResult = {
        type: GET_POST_BY_SLUG,
        slug,
      };

      expect(getPostBySlug(slug)).toEqual(expectedResult);
    });
  });

  describe('getPostsFailed', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_POSTS_FAILED,
      };

      expect(getPostsFailed()).toEqual(expectedResult);
    });
  });

  describe('setPaginatedPosts', () => {
    it('should return the correct type and the passed object of paginatedData', () => {
      const paginatedData = {};
      const expectedResult = {
        type: SET_PAGINATED_POSTS,
        paginatedData,
      };

      expect(setPaginatedPosts(paginatedData)).toEqual(expectedResult);
    });
  });

  describe('setPost', () => {
    it('should return the correct type and the passed post', () => {
      const post = {};
      const expectedResult = {
        type: SET_POST,
        post,
      };

      expect(setPost(post)).toEqual(expectedResult);
    });
  });

  describe('setPosts', () => {
    it('should return the correct type and the passed post', () => {
      const posts = [];
      const expectedResult = {
        type: SET_POSTS,
        posts,
      };

      expect(setPosts(posts)).toEqual(expectedResult);
    });
  });
});
