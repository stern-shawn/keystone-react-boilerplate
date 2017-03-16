import React from 'react';
import { shallow } from 'enzyme';

import LinkButton from 'components/LinkedComponents/LinkButton';
import NavBar from '../index';

describe('<NavBar />', () => {
  it('should render a <nav> tag', () => {
    const renderedComponent = shallow(<NavBar />);
    expect(renderedComponent.find('nav').node).toBeDefined();
  });

  it('should contain two link buttons', () => {
    const renderedComponent = shallow(<NavBar />);
    expect(renderedComponent.find(LinkButton).length).toBe(2);
  });
});
