import {
  GET_PAGINATED_POSTS,
  GET_ALL_POSTS,
  GET_POST_BY_SLUG,
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

        // .catch((err) => {
        //   // Error :(
        //   console.error(`Error retrieving posts: ${err}`);
        // })
    );

const getPageOfPostsEpic = (action$, store, { blogApi }) =>
  action$.ofType(GET_PAGINATED_POSTS)
    .mergeMap((action) =>
      blogApi.fetchPageOfPosts(action.page)
        .map((json) => setPaginatedPosts(json.posts))
    );

const getBlogPostBySlugEpic = (action$, store, { blogApi }) =>
  action$.ofType(GET_POST_BY_SLUG)
    .mergeMap((action) =>
      blogApi.fetchPostBySlug(action.slug)
        .map((json) => setPost(json.post))
    );

export {
  getAllBlogPostsEpic,
  getPageOfPostsEpic,
  getBlogPostBySlugEpic,
};
