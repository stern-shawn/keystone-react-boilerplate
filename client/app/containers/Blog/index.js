import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import classnames from 'classnames';
import layout from 'styles/layout.scss';

import { setPosts } from './actions';
import { makeSelectPosts } from './selectors';

class Blog extends Component {
  componentDidMount() {
    console.log('Blog mounted');
    this.getPosts();
    console.log('Posts fetched');
  }

  getPosts = () => {
    // Fetch from KeystoneJS API, convert to JSON, then update the store
    fetch('/api/post/list')
      .then((res) => res.json())
      .then((json) => {
        // Dispatch SET_POSTS action w/ json.posts as payload
        this.props.onUpdatePosts(json.posts);
      })
      .catch((err) => {
        // Error :(
        console.error(`Error retrieving posts: ${err}`);
      });
  }

  render() {
    const {
      posts,
    } = this.props;

    const postList = posts.length > 0 ? posts.reverse().map((post, index) => {
      // Get a human-readable date format for post times
      const d = new Date(post.publishedDate);
      const published = d.toLocaleString();

      return (
        <li key={index}>
          <h3>{post.title}</h3>
          <h4>Published on: {published}</h4>
          <blockquote dangerouslySetInnerHTML={{ __html: post.content.markdown.html }} />
        </li>
      );
    }) : null;

    return (
      <div className={layout.container}>
        <h1>
          Blog Page
        </h1>
        <section>
          <button onClick={this.getPosts}>Fetch All Posts</button>
        </section>
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
  onUpdatePosts: PropTypes.func,
  posts: PropTypes.array,
};

export function mapDispatchToProps(dispatch) {
  return {
    onUpdatePosts: (posts) => dispatch(setPosts(posts)),
  };
}

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
