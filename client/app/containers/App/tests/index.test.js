import React from 'react';
import { shallow } from 'enzyme';

import { Layout } from 'react-toolbox';
import Footer from 'components/Footer';
import { App } from '../index';

describe('<App />', () => {
  it('should render two react-toolbox layouts (nested)', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Layout).length).toBe(2);
  });

  it('should render the footer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.contains(<Footer />)).toBe(true);
  });
});
