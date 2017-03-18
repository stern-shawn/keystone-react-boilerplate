/*
 * AboutPage
 *
 * List information related to the creator of this blog
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Helmet from 'react-helmet';
import LoadingIndicator from 'components/LoadingIndicator';
import bulma from 'styles/bulma.scss';

import { getAboutContent } from './actions';
import {
  makeSelectTitle,
  makeSelectHeroImage,
  makeSelectContent,
  makeSelectLoading,
} from './selectors';

class AboutPage extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // Fetch about page content
    this.props.onGetAboutContent();
  }

  render() {
    const {
      content,
      title,
      heroImage,
      loading,
    } = this.props;

    return (
      <div className={bulma.container}>
        <Helmet
          title="About Me Page"
          meta={[
            { name: 'description', content: 'About page for the author of this blog' },
          ]}
        />
        <div className={bulma.content}>
          <LoadingIndicator />
        </div>

      </div>
    );
  }
}

AboutPage.propTypes = {
  content: PropTypes.object,
  title: PropTypes.string,
  heroImage: PropTypes.string,
  loading: PropTypes.bool,
  onGetAboutContent: PropTypes.func,
};

export const mapDispatchToProps = (dispatch) => ({
  onGetAboutContent: () => dispatch(getAboutContent()),
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  title: makeSelectTitle(),
  heroImage: makeSelectHeroImage(),
  content: makeSelectContent(),
  loading: makeSelectLoading(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
