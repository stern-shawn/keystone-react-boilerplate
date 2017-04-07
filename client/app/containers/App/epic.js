import { Observable } from 'rxjs';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  closeDrawer,
} from './actions';
import {
  getPageOfPosts,
} from '../Blog/actions';

// Automatically close the nav drawer when the user has selected a new route
// TODO: Filter this so it only catches when the drawer is active, currently
// is a brute force, always fire action...
const closeNavEpic = (action$) =>
  action$.ofType(LOCATION_CHANGE)
    .switchMap((action) => {
      // If location change is to blog pages, parse out the page and fetch that data
      if (action.payload.pathname.indexOf('/page/') > -1) {
        const page = /page\/(\d+)/g.exec(action.payload.pathname);
        // We still want the closeDrawer effect, just in case user hits nav buttons
        // while in the menu. We can do multiple actions in a switchMap by returning
        // an array of Observables, where each Observable wraps an action
        return Observable.concat(
          Observable.of(getPageOfPosts(page[1])),
          Observable.of(closeDrawer())
        );
      }
      return Observable.of(closeDrawer());
    });

export {
  closeNavEpic,
};
