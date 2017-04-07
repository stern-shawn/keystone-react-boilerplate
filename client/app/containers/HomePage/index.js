/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

// Components
import LandingHeader from 'components/LandingHeader';
import Blog from 'containers/Blog';

const HomePage = ({ routeParams }) => (
  <article>
    <Helmet
      title="Home Page"
      meta={[
        {
          name: 'description',
          content: 'A React-Redux and RxJS-powered platform built on top of KeystoneJS CMS and NodeJS',
        },
      ]}
    />
    <LandingHeader compact={routeParams.pageId !== undefined} />
    <Blog />
  </article>
);

HomePage.propTypes = {
  routeParams: PropTypes.object.isRequired,
};

export default HomePage;
