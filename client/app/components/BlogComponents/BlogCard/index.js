// Element for displaying blog previews
import React, { PropTypes } from 'react';
import he from 'he';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import LinkButton from 'components/LinkedComponents/LinkButton';

// Get a human-readable date format for post time
const getDate = (date) => {
  if (date === 'Invalid Date') {
    return null;
  }

  const d = new Date(date);
  // We only care about the date it was posted, use split to discard the time
  return `Posted on ${d.toLocaleString().split(',')[0]}`;
};

// Helper function to strip tags from blog text for consistent display of previews
const htmlToString = (html) => {
  const strippedHtml = html.replace(/<[^>]+>/g, '');
  return he.decode(strippedHtml);
};

// Truncate string down to a maximum of 'limit' characters and add ellipsis if too long.
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
