// Element for displaying blog previews
import React, { PropTypes } from 'react';
import {
  getDate,
  htmlToString,
  truncate,
} from 'utils/postFormatter';

import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import LinkButton from 'components/LinkedComponents/LinkButton';

const BlogCard = ({ post }) => {
  const brief = htmlToString(post.content.brief.html || post.content.brief);
  const summary = truncate(htmlToString(post.content.extended.html || post.content.markdown.html), 250);
  const date = getDate(post.publishedDate);
  return (
    <Card style={{ width: 'auto' }}>
      <CardTitle
        title={post.title}
        subtitle={date}
      />
      <CardMedia
        aspectRatio="wide"
        image={post.image ? post.image.url : 'https://placeimg.com/800/450/nature'}
      />
      <CardText>
        <blockquote dangerouslySetInnerHTML={{ __html: brief }} />
        <p dangerouslySetInnerHTML={{ __html: summary }} />
      </CardText>
      <CardActions>
        <LinkButton label="Read More..." to={`/blog/${post.slug}`} />
      </CardActions>
    </Card>
  );
};

BlogCard.propTypes = {
  post: PropTypes.object,
};

export default BlogCard;
