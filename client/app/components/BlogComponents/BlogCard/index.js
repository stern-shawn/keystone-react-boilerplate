// Element for displaying blog previews
import React, { PropTypes } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

const BlogCard = ({ post, date }) => (
  <Card style={{ width: 'auto' }}>
    <CardTitle
      title={post.title}
      subtitle={`Published on ${date}`}
    />
    <CardMedia
      aspectRatio="wide"
      image={post.image ? post.image.url : 'https://placeimg.com/800/450/nature'}
    />
    <CardText>
      <p dangerouslySetInnerHTML={{ __html: post.content.extended.html || post.content.markdown.html }} />
    </CardText>
    <CardActions>
      <Button label="Read More..." />
    </CardActions>
  </Card>
);

BlogCard.propTypes = {
  date: PropTypes.string,
  post: PropTypes.object,
};

export default BlogCard;
