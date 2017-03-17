/*
 * AboutPage
 *
 * List information related to the creator of this blog
 */
import React from 'react';
import Helmet from 'react-helmet';
import bulma from 'styles/bulma.scss';

export default class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={bulma.container}>
        <Helmet
          title="About Me Page"
          meta={[
            { name: 'description', content: 'About page for the author of this blog' },
          ]}
        />

      </div>
    );
  }
}
