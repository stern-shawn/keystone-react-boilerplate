import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import deepEqual from 'deep-equal';
import {
  getAllBlogPostsEpic,
  getPageOfPostsEpic,
  getBlogPostBySlugEpic,
} from '../epic';
import {
  GET_ALL_POSTS,
  GET_PAGINATED_POSTS,
  GET_POST_BY_SLUG,
} from '../constants';
import {
  setPaginatedPosts,
  setPost,
  setPosts,
} from '../actions';

describe('Blog Epics', () => {
  describe('getPageOfPostsEpic', () => {
    it('dispatches the correct action and payload when it is successful', () => {
      const action$ = ActionsObservable.of(
        { type: GET_PAGINATED_POSTS, page: 1 }
      );
      const response = {
        posts: {
          results: [{ title: 'My Face' }, { title: 'test-post-1' }],
        },
      };
      const blogApi = { fetchPageOfPosts: () => Observable.of(response) };

      getPageOfPostsEpic(action$, null, { blogApi })
        .toArray()
        .subscribe((actions) => {
          expect(deepEqual(actions, [setPaginatedPosts(response.posts)])).toBe(true);
        });
    });
  });

  describe('getAllBlogPostsEpic', () => {
    it('dispatches the correct action and payload when it is successful', () => {
      const action$ = ActionsObservable.of({ type: GET_ALL_POSTS });
      const response = {
        posts: [{ title: 'My Face' }, { title: 'test-post-1' }, { title: 'hello world' }],
      };
      const blogApi = { fetchAllFullPosts: () => Observable.of(response) };

      getAllBlogPostsEpic(action$, null, { blogApi })
        .toArray()
        .subscribe((actions) => {
          expect(deepEqual(actions, [setPosts(response.posts)])).toBe(true);
        });
    });
  });

  describe('getBlogPostBySlugEpic', () => {
    it('dispatches the correct action and payload when it is successful', () => {
      const action$ = ActionsObservable.of({ type: GET_POST_BY_SLUG, slug: 'my-face' });
      const response = {
        post: { title: 'My face' },
      };
      const blogApi = { fetchPostBySlug: () => Observable.of(response) };

      getBlogPostBySlugEpic(action$, null, { blogApi })
        .toArray()
        .subscribe((actions) => {
          expect(deepEqual(actions, [setPost(response.post)])).toBe(true);
        });
    });
  });
});
