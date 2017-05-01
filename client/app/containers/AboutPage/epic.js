import { Observable } from 'rxjs';
import {
  GET_ABOUT_CONTENT,
  GET_ABOUT_CONTENT_FAILED,
} from './constants';
import {
  noAboutContent,
  setAboutContent,
} from './actions';

const getAboutPageEpic = (action$, store, { aboutPageApi }) =>
  action$.ofType(GET_ABOUT_CONTENT)
    .mergeMap(() =>
      aboutPageApi.fetchAboutContent()
        .map((json) => {
          // Check for user-defined content so we don't push partial content to the reducer
          // ... the API likes to return partial JSON instead of erroring even if there's no content
          if (json.content[0].content.extended) {
            return setAboutContent(json.content[0]);
          }
          return noAboutContent();
        })
        .catch((error) => Observable.of({
          type: GET_ABOUT_CONTENT_FAILED,
          payload: error,
          error: true,
        }))
    );

export {
  getAboutPageEpic,
};
