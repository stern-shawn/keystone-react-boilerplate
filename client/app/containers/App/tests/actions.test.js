import {
  CLOSE_DRAWER,
  TOGGLE_DRAWER,
} from '../constants';

import {
  closeDrawer,
  toggleDrawer,
} from '../actions';

describe('App Actions', () => {
  describe('closeDrawer', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CLOSE_DRAWER,
      };

      expect(closeDrawer()).toEqual(expectedResult);
    });
  });

  describe('toggleDrawer', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: TOGGLE_DRAWER,
      };

      expect(toggleDrawer()).toEqual(expectedResult);
    });
  });
});
