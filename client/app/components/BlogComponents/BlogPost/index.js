// Element for displaying blog previews
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { getDate } from 'utils/postFormatter';
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';
import theme from './theme.scss';

const BlogPost = ({ post }) => {
  const brief = post.content.brief.html || post.content.brief;
  const postBody = post.content.extended.html || post.content.markdown.html;
  const date = getDate(post.publishedDate);

  return (
    <section className={`${styles.postArea} ${styles.dropCard} ${bulma.content}`}>
      <Helmet
        title={`${post.title} - Blog`}
        meta={post.meta && [
          {
            name: post.meta.title,
            content: post.meta.description,
          },
        ]}
      />
      <Card style={{ width: 'auto' }}>
        {post.image &&
          <CardMedia
            aspectRatio="wide"
            image={post.image.url}
          />
        }
        <CardTitle
          theme={theme}
          title={post.title}
          subtitle={date}
        />
        <CardText className="content" theme={theme}>
          <hr />
          <p className={bulma.subtitle} dangerouslySetInnerHTML={{ __html: brief }} />
          <section dangerouslySetInnerHTML={{ __html: postBody }} />
        </CardText>
        <CardActions>
        </CardActions>
      </Card>
    </section>
  );
};

BlogPost.propTypes = {
  post: PropTypes.object,
};

export default BlogPost;
