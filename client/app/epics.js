import { combineEpics } from 'redux-observable';
import {
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
} from 'containers/Blog/epic';

const rootEpic = combineEpics(
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
);

export default rootEpic;
