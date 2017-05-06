import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';

import BlogPreviewList from 'components/BlogComponents/BlogPreviewList';
import BlogPost from 'components/BlogComponents/BlogPost';
import LoadingIndicator from 'components/LoadingIndicator';
import Paginator from 'components/Paginator';

import bulma from 'styles/bulma.scss';
import styles from './styles.scss';
import transitions from './transitions.scss';

import {
  getPostBySlug,
  getPageOfPosts,
} from './actions';
import {
  makeSelectCurrentPage,
  makeSelectFocusedPost,
  makeSelectPosts,
  makeSelectLoading,
  makeSelectLoadSuccess,
  makeSelectMaxPages,
} from './selectors';

export class Blog extends Component {
  componentDidMount() {
    const {
      currentPage,
      focusedPost,
      onGetPost,
      onGetPosts,
      posts,
      prefetchPage,
      routeParams,
    } = this.props;

    // Only fetch if there are no posts, or requested page not already cached
    // Similarly, don't reload if the focusedPost is already loaded
    if ((routeParams && focusedPost && routeParams.postSlug !== focusedPost.post.slug)
        || (routeParams && focusedPost === null)
        || posts === null
        || posts[currentPage] === undefined) {
      // Load content based on if this container is being used to display
      // all posts or a single post specified by the route pathing
      if (routeParams) {
        // Get and render the single post focused by the user
        console.log(`Retrieve blog post: ${routeParams.postSlug}`);
        onGetPost(routeParams.postSlug);
      } else {
        // On mount, fetch posts from the API to populate the redux store
        // If a prefetchPage is defined, load that instead
        // The template below will populate itself based on the store's contents
        console.log(`Blog mounted, loading posts for page ${prefetchPage || currentPage}`);
        onGetPosts(prefetchPage || currentPage);
      }
    }
  }

  render() {
    const {
      currentPage,
      focusedPost,
      loading,
      loadSuccess,
      maxPages,
      posts,
      routeParams,
    } = this.props;

    const errStyle = classNames(
      bulma.content,
      bulma['has-text-centered'],
      styles.errMessage
    );

    // Display a single blog post or a list of previews depending on location in the app
    const BlogContainerContent = routeParams ?
      focusedPost && <BlogPost key={focusedPost.fullPostUrl} postData={focusedPost} /> :
      // Update posts={posts} -> posts{posts[currentPage]} to still send an array from the object
      posts && <BlogPreviewList key={currentPage} posts={posts[currentPage]} />;

    return (
      <section id="content" className={bulma.container}>
        {!routeParams && loadSuccess
          ? <Paginator
            currPage={currentPage}
            numPages={maxPages}
          />
          : null
        }
        <ReactCSSTransitionGroup
          transitionName={transitions}
          transitionAppear
          transitionAppearTimeout={250}
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          {loading
            ? <LoadingIndicator key="loadingIndicator" />
            : BlogContainerContent
          }
        </ReactCSSTransitionGroup>
        {!loading && !loadSuccess &&
          <div className={errStyle}>
            <h2>Invalid page requested or connection failed, <Link to={'/page/1'}>click here</Link> to start at the first page or use the navigation options below!</h2>
          </div>
        }
        {!routeParams
          ? <Paginator
            currPage={currentPage}
            numPages={maxPages}
          />
          : null
        }
      </section>
    );
  }
}

Blog.propTypes = {
  currentPage: PropTypes.number,
  focusedPost: PropTypes.object,
  loading: PropTypes.bool,
  loadSuccess: PropTypes.bool,
  maxPages: PropTypes.number,
  onGetPost: PropTypes.func,
  onGetPosts: PropTypes.func,
  posts: PropTypes.object,
  prefetchPage: PropTypes.number,
  routeParams: PropTypes.object,
};

// Need to export so we can test and have full test coverage in Jest
export const mapDispatchToProps = (dispatch) => ({
  onGetPost: (slug) => dispatch(getPostBySlug(slug)),
  onGetPosts: (page) => dispatch(getPageOfPosts(page)),
});

const mapStateToProps = createStructuredSelector({
  currentPage: makeSelectCurrentPage(),
  focusedPost: makeSelectFocusedPost(),
  maxPages: makeSelectMaxPages(),
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  loadSuccess: makeSelectLoadSuccess(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
