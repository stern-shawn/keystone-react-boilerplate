import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import layout from 'styles/layout.scss';
import BlogCard from 'components/BlogComponents/BlogCard';
import BlogPost from 'components/BlogComponents/BlogPost';
import LoadingIndicator from 'components/LoadingIndicator';
import styles from './styles.scss';

import {
  getPostBySlug,
  getPosts,
} from './actions';
import {
  makeSelectFocusedPost,
  makeSelectPosts,
  makeSelectLoading,
} from './selectors';

class Blog extends Component {
  componentDidMount() {
    const {
      onGetPost,
      onGetPosts,
      routeParams,
    } = this.props;

    // Load content based on if this container is being used to display
    // all posts or a single post specified by the route pathing
    if (routeParams) {
      // Get and render the single post foxued by the user
      console.log(`Retrieve blog post: ${routeParams.postSlug}`);
      onGetPost(routeParams.postSlug);
    } else {
      // On mount, fetch posts from the API to populate the redux store
      // The template below will populate itself based on the store's contents
      console.log('Blog mounted, loading all posts');
      onGetPosts();
    }
  }

  render() {
    const {
      focusedPost,
      loading,
      posts,
      routeParams,
    } = this.props;

    let BlogContainerContent;
    if (routeParams) {
      BlogContainerContent = focusedPost && <div className={styles.dropCard}><BlogPost post={focusedPost} /></div>;
    } else {
      // Create a li for each post using data from the redux store
      BlogContainerContent = posts && posts.map((post, index) => (
        <li key={index} className={styles.dropCard}>
          <BlogCard post={post} />
        </li>
      ));
    }

    return (
      <section id="content" className={layout.container}>
        <ul className={styles.postList}>
          {loading ? <LoadingIndicator /> : BlogContainerContent}
        </ul>
      </section>
    );
  }
}

Blog.propTypes = {
  focusedPost: PropTypes.object,
  loading: PropTypes.bool,
  onGetPost: PropTypes.func,
  onGetPosts: PropTypes.func,
  posts: PropTypes.oneOfType([  // eslint-disable-line react/no-unused-prop-types
    PropTypes.object,
    PropTypes.array,
  ]),
  routeParams: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  onGetPost: (slug) => dispatch(getPostBySlug(slug)),
  onGetPosts: () => dispatch(getPosts()),
});

const mapStateToProps = createStructuredSelector({
  focusedPost: makeSelectFocusedPost(),
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
