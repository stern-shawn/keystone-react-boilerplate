import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import classnames from 'classnames';

import layout from 'styles/layout.scss';
import BlogCard from 'components/BlogComponents/BlogCard';

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
        <li key={index}>
          <BlogCard post={post} date={published} />
        </li>
      );
    }) : null;

    return (
      <div className={layout.container}>
        <h1>
          Blog Page
        </h1>
        <section>
          <h2>Recent Posts</h2>
          <ul>
            {postList}
          </ul>
        </section>
      </div>
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
