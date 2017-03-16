/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';

import LandingHeader from 'components/LandingHeader';
import Blog from 'containers/Blog';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render the header and blog components', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(<LandingHeader />)).toEqual(true);
    expect(renderedComponent.contains(<Blog />)).toEqual(true);
  });
});
