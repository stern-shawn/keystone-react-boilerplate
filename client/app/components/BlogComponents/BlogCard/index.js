// Element for displaying blog previews
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
  getDate,
  htmlToString,
  truncate,
} from 'utils/blogUtils';
import bulma from 'styles/bulma.scss';

import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import LinkButton from 'components/LinkedComponents/LinkButton';

import theme from './theme.scss';

const BlogCard = ({ post }) => {
  const brief = htmlToString(post.content.brief.html || post.content.brief);
  const summary = truncate(htmlToString(post.content.extended.html || post.content.markdown.html), 250);
  const date = getDate(post.publishedDate);
  return (
    <Card style={{ width: 'auto' }} className={bulma.content}>
      <Link to={`/blog/${post.slug}`}>
        <CardTitle
          theme={theme}
          title={post.title}
          subtitle={date}
        />
      </Link>
      <CardText theme={theme}>
        <hr />
        <p className={bulma.subtitle} dangerouslySetInnerHTML={{ __html: brief }} />
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
