import { Observable } from 'rxjs';
import {
  GET_PAGINATED_POSTS,
  GET_ALL_POSTS,
  GET_POST_BY_SLUG,
  GET_POSTS_FAILED,
} from './constants';
import {
  setPost,
  setPosts,
  setPaginatedPosts,
} from './actions';

const getAllBlogPostsEpic = (action$, store, { blogApi }) =>
  action$.ofType(GET_ALL_POSTS)
    .mergeMap(() =>
      blogApi.fetchAllFullPosts()
        .map((json) => setPosts(json.posts))
        .catch((error) => Observable.of({
          type: GET_POSTS_FAILED,
          payload: error.xhr.response,
          error: true,
        }))
    );

const getPageOfPostsEpic = (action$, store, { blogApi }) =>
  action$.ofType(GET_PAGINATED_POSTS)
    .mergeMap((action) =>
      blogApi.fetchPageOfPosts(action.page)
        .map((json) => setPaginatedPosts(json.posts))
        .catch((error) => Observable.of({
          type: GET_POSTS_FAILED,
          payload: error.xhr.response,
          error: true,
        }))
    );

const getBlogPostBySlugEpic = (action$, store, { blogApi }) =>
  action$.ofType(GET_POST_BY_SLUG)
    .mergeMap((action) =>
      blogApi.fetchPostBySlug(action.slug)
        .map((json) => setPost(json))
        .catch((error) => Observable.of({
          type: GET_POSTS_FAILED,
          payload: error.xhr.response,
          error: true,
        }))
    );

export {
  getAllBlogPostsEpic,
  getPageOfPostsEpic,
  getBlogPostBySlugEpic,
};
