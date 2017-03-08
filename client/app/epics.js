import { combineEpics } from 'redux-observable';
import blogEpic from 'containers/Blog/epic';

const rootEpic = combineEpics(
  blogEpic,
);

export default rootEpic;
