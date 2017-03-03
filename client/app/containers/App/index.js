/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Package Imports
import React from 'react';
import Helmet from 'react-helmet';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
// Sadly Scrollbars seems to be breaking useScroll middleware...
// import { Scrollbars } from 'react-custom-scrollbars';

// Styling
import styles from './styles.scss';

export function App(props) {
  return (
    <div className={styles.appWrapper}>
      <Helmet
        titleTemplate="%s - KeystoneJS + React-Redux!"
        defaultTitle="KeystoneJS + React-Redux!"
        meta={[
          {
            name: 'description',
            content: 'A meshing of KeystoneJS CMS and MXSTBR\'s React.js Boilerplate',
          },
        ]}
      />
      <Header />
      <div id="content" className={styles.contentWrapper}>
        {React.Children.toArray(props.children)}
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
