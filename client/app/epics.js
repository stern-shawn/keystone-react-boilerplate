import { combineEpics } from 'redux-observable';
import {
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
} from 'containers/Blog/epic';

const rootEpic = combineEpics(
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
);

export default rootEpic;
