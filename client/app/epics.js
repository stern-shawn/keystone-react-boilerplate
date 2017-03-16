import { combineEpics } from 'redux-observable';
import {
  closeNavEpic,
} from 'containers/App/epic';
import {
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
} from 'containers/Blog/epic';
import * as blogApi from 'utils/blogApi';

const rootEpic = (...args) => combineEpics(
  closeNavEpic,
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
)(...args, { blogApi });

export default rootEpic;
