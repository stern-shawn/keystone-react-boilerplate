import { Observable } from 'rxjs';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  closeDrawer,
} from './actions';
import {
  changeToPage,
  getPageOfPosts,
} from '../Blog/actions';

// Automatically close the nav drawer when the user has selected a new route
// TODO: Filter this so it only catches when the drawer is active, currently
// is a brute force, always fire action...
const closeNavEpic = (action$, store) =>
  action$.ofType(LOCATION_CHANGE)
    .switchMap((action) => {
      // If location change is to blog pages, parse out the page and fetch that data
      if (/page\/\d+/.test(action.payload.pathname)) {
        // Adding parseInt to stop accidentally sending a string into store
        const page = parseInt(/page\/(\d+)/g.exec(action.payload.pathname)[1], 10);
        const cachedPosts = store.getState().getIn(['blog', 'posts']);
        // Change page instead of fetching posts if they're already cached
        // Adding a null check since cachedPosts will be null if they navigated
        // to an invalid page on initial navigation and we can't access [page] of null...
        if (cachedPosts !== null && cachedPosts[page] !== undefined) {
          console.log(`Page ${page} already loaded!`);
          console.log(cachedPosts[page]);
          return Observable.of(
            changeToPage(page),
            closeDrawer()
          );
        }
        // If the posts aren't already cached, fetch from back-end
        // We can do multiple actions in a switchMap by returning
        // an array of Observables, where each Observable wraps an action
        return Observable.of(
          getPageOfPosts(page),
          closeDrawer()
        );
      }
      // Otherwise, just close nav drawer, just in case
      return Observable.of(closeDrawer());
    });

export {
  closeNavEpic,
};
