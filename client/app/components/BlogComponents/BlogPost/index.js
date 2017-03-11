// Element for displaying blog previews
import React, { PropTypes } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

// Get a human-readable date format for post time
const getDate = (date) => {
  if (date === 'Invalid Date') {
    return null;
  }

  const d = new Date(date);
  // We only care about the date it was posted, use split to discard the time
  return `Posted on ${d.toLocaleString().split(',')[0]}`;
};

const BlogPost = ({ post }) => {
  const brief = post.content.brief.html || post.content.brief;
  const postBody = post.content.extended.html || post.content.markdown.html;
  const date = getDate(post.publishedDate);
  return (
    <Card style={{ width: 'auto' }}>
      {post.image &&
      <CardMedia
        aspectRatio="wide"
        image={post.image.url}
      />
      }
      <CardTitle
        title={post.title}
        subtitle={date}
      />
      <CardText>
        <blockquote dangerouslySetInnerHTML={{ __html: brief }} />
        <section dangerouslySetInnerHTML={{ __html: postBody }} />
      </CardText>
      <CardActions>
      </CardActions>
    </Card>
  );
};

BlogPost.propTypes = {
  post: PropTypes.object,
};

export default BlogPost;
