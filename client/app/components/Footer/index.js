import React from 'react';
import bulma from 'styles/bulma.scss';

const Footer = () => (
  <footer className={bulma.footer}>
    <div className={bulma.container}>
      <div className={`${bulma.content} ${bulma['has-text-centered']}`}>
        <p>
          <strong>KeystoneJS + React-Redux + RxJS</strong> by <a href="https://github.com/stern-shawn">Shawn Stern</a>. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
        <p>
          <a className={bulma.icon} href="https://github.com/stern-shawn/keystone-react-boilerplate">
            <i className="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
