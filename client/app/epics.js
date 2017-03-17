import { combineEpics } from 'redux-observable';
import {
  closeNavEpic,
} from 'containers/App/epic';
import {
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
} from 'containers/Blog/epic';
import {
  getAllStoreItemsEpic,
} from 'containers/Store/epic';
import * as blogApi from 'utils/blogApi';
import * as storeApi from 'utils/storeApi';

const rootEpic = (...args) => combineEpics(
  closeNavEpic,
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
  getAllStoreItemsEpic,
)(...args, { blogApi, storeApi });

export default rootEpic;
