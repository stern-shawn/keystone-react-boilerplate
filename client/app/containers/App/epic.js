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
const closeNavEpic = (action$, store) =>
  action$.ofType(LOCATION_CHANGE)
    .switchMap(() => {
      const drawerActive = store.getState().getIn(['global', 'drawerActive']);
      if (drawerActive) {
        return Observable.of(closeDrawer());
      }
      return Observable.of();
    });

// Intelligently use state to determine if we need to fetch the requested page,
// or can simply use cached content. Also provides support for if we change pages
// using react-router navigation instead of actions.
const fetchPageEpic = (action$, store) =>
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
          return Observable.of(changeToPage(page));
        }
        // If the posts aren't already cached, fetch from back-end
        return Observable.of(getPageOfPosts(page));
      }
      return Observable.of();
    });

export {
  closeNavEpic,
  fetchPageEpic,
};
