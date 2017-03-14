import { Observable } from 'rxjs';
import {
  GET_PAGINATED_POSTS,
  GET_POSTS,
  GET_POST_BY_SLUG,
} from './constants';
import {
  setPost,
  setPosts,
} from './actions';

// Best practice to encapsulate fetch's Promise in an Observable
const api = {
  fetchAllFullPosts: () => {
    const request = fetch('/api/post/paginated/')
      .then((response) => response.json());
    return Observable.from(request);
  },
  fetchPageOfPosts: (page) => {
    const request = fetch(`/api/post/paginated/${page}`)
      .then((response) => response.json());
    return Observable.from(request);
  },
  fetchPostBySlug: (slug) => {
    const request = fetch(`/api/post/slug/${slug}`)
      .then((response) => response.json());
    return Observable.from(request);
  },
};

const getAllBlogPostsEpic = (action$) =>
  action$.ofType(GET_POSTS)
    .mergeMap(() =>
      api.fetchAllFullPosts()
        .map((json) => setPosts(json.posts))

        // .catch((err) => {
        //   // Error :(
        //   console.error(`Error retrieving posts: ${err}`);
        // })
    );

const getPageOfPostsEpic = (action$) =>
  action$.ofType(GET_PAGINATED_POSTS)
    .mergeMap((action) =>
      api.fetchPageOfPosts(action.page)
        .map((json) => setPosts(json.posts.results))
    );

const getBlogPostBySlugEpic = (action$) =>
  action$.ofType(GET_POST_BY_SLUG)
    .mergeMap((action) =>
      api.fetchPostBySlug(action.slug)
        .map((json) => setPost(json.post))
    );

export {
  getAllBlogPostsEpic,
  getPageOfPostsEpic,
  getBlogPostBySlugEpic,
};
