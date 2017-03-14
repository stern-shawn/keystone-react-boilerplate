import { LOCATION_CHANGE } from 'react-router-redux';
import {
  closeDrawer,
} from './actions';

// Automatically close the nav drawer when the user has selected a new route
// TODO: Filter this so it only catches when the drawer is active, currently
// is a brute force, always fire action...
const closeNavEpic = (action$) =>
  action$.ofType(LOCATION_CHANGE)
    .map(() => closeDrawer());

export {
  closeNavEpic,
};
