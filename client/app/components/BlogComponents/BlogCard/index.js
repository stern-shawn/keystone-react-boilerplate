// Element for displaying blog previews
import React, { PropTypes } from 'react';
import he from 'he';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

// Helper function to strip tags from blog text for consistent display of previews
const htmlToString = (html) => {
  const strippedHtml = html.replace(/<[^>]+>/g, '');
  return he.decode(strippedHtml);
};

// Truncate string down to a maximum of 'limit' characters and add ellipsis if too long.
// From there,
const truncate = (string, limit) => {
  // Do an immediate return for short strings :)
  if (string.length <= limit) {
    return string;
  }
  const substring = string.substr(0, limit);
  // Track back to the end of the last whole word and replace with ellipsis so
  // that we don't have partially split word at the end...
  return substring.substr(0, substring.lastIndexOf(' ')).concat('...');
};

const BlogCard = ({ post, date }) => {
  const brief = htmlToString(post.content.brief.html || post.content.brief);
  const summary = truncate(htmlToString(post.content.extended.html || post.content.markdown.html), 250);
  return (
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
        <blockquote dangerouslySetInnerHTML={{ __html: brief }} />
        <p dangerouslySetInnerHTML={{ __html: summary }} />
      </CardText>
      <CardActions>
        <Button label="Read More..." />
      </CardActions>
    </Card>
  );
};

BlogCard.propTypes = {
  date: PropTypes.string,
  post: PropTypes.object,
};

export default BlogCard;
