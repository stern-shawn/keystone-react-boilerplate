import React from 'react';
import { shallow } from 'enzyme';

import bulma from 'styles/bulma.scss';
import Footer from '../index';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <p>
        <strong>KeystoneJS + React-Redux</strong> by <a href="https://github.com/stern-shawn">Shawn Stern</a>. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </p>
    )).toBe(true);
  });

  it('should render the GitHub source link', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(
      <a className={bulma.icon} href="https://github.com/stern-shawn/keystone-react-boilerplate">
        <i className="fa fa-github"></i>
      </a>
    )).toBe(true);
  });
});
