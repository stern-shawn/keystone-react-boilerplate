import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';

import layout from 'styles/layout.scss';
import BlogCard from 'components/BlogComponents/BlogCard';
import styles from './styles.scss';

import { getPosts } from './actions';
import { makeSelectPosts } from './selectors';

class Blog extends Component {
  componentDidMount() {
    // Guess we have to destructure the less cool way...
    const {
      onGetPosts,
    } = this.props;

    // On mount, fetch posts from the API to populate the redux store
    // The template below will populate itself based on the store's contents
    console.log('Blog mounted');
    onGetPosts();
  }

  render() {
    // Guess we have to destructure the less cool way...
    const {
      posts,
    } = this.props;

    // Create a li for each post using data from the redux store
    const postList = posts && posts.length > 0 ? posts.map((post, index) => {
      // Get a human-readable date format for post times
      const d = new Date(post.publishedDate);
      // We only care about the date it was posted, use split to discard the time
      const published = d.toLocaleString().split(',')[0];

      // extended vs markdown is only a patch since my old example posts had
      // markdown as a back-up. Should be primarily markdown going forward so
      // this can be removed eventually
      return (
        <li key={index} className={styles.dropCard}>
          <BlogCard post={post} date={published} />
        </li>
      );
    }) : null;

    const loaderIcon = classNames(
      'fa',
      'fa-refresh',
      'fa-spin',
      'fa-5x',
      'fa-fw',
      `${styles.loadIcon}`
    );

    return (
      <section id="content" className={layout.container}>
        <ul className={styles.postList}>
          {postList || <i className={loaderIcon} />}
        </ul>
      </section>
    );
  }
}

Blog.propTypes = {
  onGetPosts: PropTypes.func,
  posts: PropTypes.oneOfType([  // eslint-disable-line react/no-unused-prop-types
    PropTypes.object,
    PropTypes.array,
  ]),
};

const mapDispatchToProps = (dispatch) => ({
  onGetPosts: () => dispatch(getPosts()),
});

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
