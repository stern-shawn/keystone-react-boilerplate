import { Observable } from 'rxjs';
import {
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
    const request = fetch('/api/post/latestList')
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

const getBlogPostBySlugEpic = (action$) =>
  action$.ofType(GET_POST_BY_SLUG)
    .mergeMap((action) =>
      api.fetchPostBySlug(action.slug)
        .map((json) => setPost(json.post))
    );

export {
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
};
