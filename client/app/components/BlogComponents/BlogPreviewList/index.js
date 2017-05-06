// Element for displaying blog previews
import React, { PropTypes } from 'react';
import BlogCard from 'components/BlogComponents/BlogCard';

import styles from './styles.scss';

// Given an array of posts, produce a BlogCard of each
const BlogPreviewList = ({ posts }) => {
  const postList = posts.map((post, index) => (
    <li key={index}>
      <BlogCard post={post} />
    </li>
  ));

  return (
    <ul className={styles.postList}>
      {postList}
    </ul>
  );
};

BlogPreviewList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogPreviewList;
