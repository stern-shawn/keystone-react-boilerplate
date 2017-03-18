import React from 'react';
import { shallow } from 'enzyme';

import Helmet from 'react-helmet';
import AboutPage from '../index';

describe('<AboutPage />', () => {
  xit('should render its heading', () => {
    const renderedComponent = shallow(
      <AboutPage />
    );
    expect(renderedComponent.contains(<Helmet />)).toBe(true);
  });
});
