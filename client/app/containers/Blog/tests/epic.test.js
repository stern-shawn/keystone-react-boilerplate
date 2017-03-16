import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import {
  // getAllBlogPostsEpic,
  getPageOfPostsEpic,
  // getBlogPostBySlugEpic,
} from '../epic';
import {
  // GET_ALL_POSTS,
  GET_PAGINATED_POSTS,
  // GET_POST_BY_SLUG,
  // GET_POSTS_FAILED,
  // SET_PAGINATED_POSTS,
  // SET_POST,
  // SET_POSTS,
} from '../constants';
import { setPaginatedPosts } from '../actions';
const deepEqual = require('deep-equal');

describe('getAllBlogPostsEpic', () => {
  it('dispatches the correct action when it is successful', () => {
    const action$ = ActionsObservable.of(
      { type: GET_PAGINATED_POSTS, page: 1 }
    );
    const response = {
      posts: {
        results: [{}, {}],
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
