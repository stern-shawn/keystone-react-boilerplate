import { combineEpics } from 'redux-observable';
import {
  closeNavEpic,
} from 'containers/App/epic';
import {
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
} from 'containers/Blog/epic';

const rootEpic = combineEpics(
  closeNavEpic,
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
);

export default rootEpic;
