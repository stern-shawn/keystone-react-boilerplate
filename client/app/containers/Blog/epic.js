import {
  fetchAllFullPosts,
  fetchPageOfPosts,
  fetchPostBySlug,
} from 'utils/blogApi';
import {
  GET_PAGINATED_POSTS,
  GET_POSTS,
  GET_POST_BY_SLUG,
} from './constants';
import {
  setPost,
  setPosts,
} from './actions';

const getAllBlogPostsEpic = (action$) =>
  action$.ofType(GET_POSTS)
    .mergeMap(() =>
      fetchAllFullPosts()
        .map((json) => setPosts(json.posts))

        // .catch((err) => {
        //   // Error :(
        //   console.error(`Error retrieving posts: ${err}`);
        // })
    );

const getPageOfPostsEpic = (action$) =>
  action$.ofType(GET_PAGINATED_POSTS)
    .mergeMap((action) =>
      fetchPageOfPosts(action.page)
        .map((json) => setPosts(json.posts.results))
    );

const getBlogPostBySlugEpic = (action$) =>
  action$.ofType(GET_POST_BY_SLUG)
    .mergeMap((action) =>
      fetchPostBySlug(action.slug)
        .map((json) => setPost(json.post))
    );

export {
  getAllBlogPostsEpic,
  getPageOfPostsEpic,
  getBlogPostBySlugEpic,
};
