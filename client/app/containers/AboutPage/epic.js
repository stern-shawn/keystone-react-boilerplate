import { Observable } from 'rxjs';
import {
  GET_ABOUT_CONTENT,
  GET_ABOUT_CONTENT_FAILED,
} from './constants';
import {
  setAboutContent,
} from './actions';

const getAboutPageEpic = (action$, store, { aboutPageApi }) =>
  action$.ofType(GET_ABOUT_CONTENT)
    .mergeMap(() =>
      aboutPageApi.fetchAboutContent()
        .map((json) => setAboutContent(json.content[0]))
        .catch((error) => Observable.of({
          type: GET_ABOUT_CONTENT_FAILED,
          payload: error,
          error: true,
        }))
    );

export {
  getAboutPageEpic,
};
