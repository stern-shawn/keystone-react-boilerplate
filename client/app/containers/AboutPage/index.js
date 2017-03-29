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
import styles from './styles.scss';

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

    const aboutPageContent = content && (
      <div className={`${bulma.column} ${styles.dropCard}`}>
        <div className={bulma.card}>
          <div className={bulma['card-image']}>
            <figure className={`${bulma.image} ${bulma['is-16by9']}`}>
              <img src={heroImage.url} alt={heroImage.public_id} />
            </figure>
          </div>
          <header className={bulma['card-header']}>
            <p className={bulma['card-header-title']}>
              {title}
            </p>
          </header>
          <div className={bulma['card-content']}>
            <div className={bulma.content}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className={`${bulma.container} ${styles.aboutContainer}`}>
        <Helmet
          title="About Me"
          meta={[
            {
              name: 'description',
              content: 'About page for the author of this blog',
            },
          ]}
        />
        <div className={bulma.columns}>
          {loading ? <LoadingIndicator /> : aboutPageContent}
        </div>
      </div>
    );
  }
}

AboutPage.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  heroImage: PropTypes.object,
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
