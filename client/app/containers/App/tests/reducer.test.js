import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  closeDrawer,
  toggleDrawer,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      drawerActive: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the closeDrawer action correctly', () => {
    const expectedResult = state
      .set('drawerActive', false);

    expect(appReducer(state, closeDrawer())).toEqual(expectedResult);
  });

  it('should handle the toggleDrawer action correctly', () => {
    const expectedResult = state
      .set('drawerActive', true);

    const expectedResultNext = state
      .set('drawerActive', true);

    expect(appReducer(state, toggleDrawer())).toEqual(expectedResult);
    expect(appReducer(state, toggleDrawer())).toEqual(expectedResultNext);
  });
});
