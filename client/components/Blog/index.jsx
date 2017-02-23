import React, { Component } from 'react';
import classnames from 'classnames';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
    this.getPosts = this.getPosts.bind(this);
    this.clearPosts = this.clearPosts.bind(this);
  }

  getPosts() {
    // Fetch from KeystoneJS API, convert to JSON, then map to li's
    fetch('/api/post/list')
      .then(res => res.json())
      .then(json => {
        this.setState({
          posts: json.posts,
        });
      })
      .catch(function(err) {
      	// Error :(
        console.error("Error retrieving posts: " + err);
      });
  }

  clearPosts() {
    this.setState({
      posts: [],
    });
  }

  render() {
    const posts = this.state.posts.length > 0 ? this.state.posts.map((post, index) =>
      <li key={index}>
        <h3>{post.title}</h3>
        <section>
          <blockquote dangerouslySetInnerHTML={{ __html: post.content.markdown.html }}>
          </blockquote>
        </section>
      </li>
    ) : null;

    return (
      <div>
        <h1>
          Blog Page
        </h1>
        <section>
          <button onClick={this.clearPosts}>Clear Posts</button>
          <button onClick={this.getPosts}>Fetch All Posts</button>
        </section>
        <section>
          <h2>Recent Posts</h2>
          <ul>
            {posts}
          </ul>
        </section>
      </div>
    );
  }
}

export default Blog;
