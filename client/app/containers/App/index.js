/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
// Sadly Scrollbars seems to be breaking useScroll middleware...
// import { Scrollbars } from 'react-custom-scrollbars';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  // padding: 0 16px;
  flex-direction: column;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - KeystoneJS + React-Redux!"
        defaultTitle="KeystoneJS + React-Redux!"
        meta={[
          { name: 'description', content: 'A meshing of KeystoneJS CMS and MXSTBR\'s React.js Boilerplate' },
        ]}
      />
      {/* <Scrollbars style={{ height: '100vh' }}> */}
      <Header />
      <NavBar />
      {React.Children.toArray(props.children)}
      <Footer />
      {/* </Scrollbars> */}
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
