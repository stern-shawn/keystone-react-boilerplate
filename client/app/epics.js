import { combineEpics } from 'redux-observable';
import {
  getAboutPageEpic,
} from 'containers/AboutPage/epic';
import {
  closeNavEpic,
  fetchPageEpic,
} from 'containers/App/epic';
import {
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
} from 'containers/Blog/epic';
import {
  getAllStoreItemsEpic,
} from 'containers/Store/epic';
import * as aboutPageApi from 'utils/aboutPageApi';
import * as blogApi from 'utils/blogApi';
import * as storeApi from 'utils/storeApi';

const rootEpic = (...args) => combineEpics(
  closeNavEpic,
  fetchPageEpic,
  getAboutPageEpic,
  getAllBlogPostsEpic,
  getBlogPostBySlugEpic,
  getPageOfPostsEpic,
  getAllStoreItemsEpic,
)(...args, { aboutPageApi, blogApi, storeApi });

export default rootEpic;
