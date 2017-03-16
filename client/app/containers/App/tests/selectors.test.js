import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectDrawerActive,
  makeSelectLocationState,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectDrawerActive', () => {
  const drawerActiveSelector = makeSelectDrawerActive();
  it('should select the current nav drawer state', () => {
    const mockedState = fromJS({
      global: {
        drawerActive: false,
      },
    });
    expect(drawerActiveSelector(mockedState)).toEqual(false);
  });
});

describe('makeSelectLocationState', () => {
  const locationStateSelector = makeSelectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
  });
});
