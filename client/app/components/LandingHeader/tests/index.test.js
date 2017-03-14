import React from 'react';
import { shallow } from 'enzyme';

import LandingHeader from '../index';

describe('<LandingHeader />', () => {
  it('should render a header element', () => {
    const renderedComponent = shallow(
      <LandingHeader />
    );
    expect(renderedComponent.find('header').length).toEqual(1);
  });
});
