// Element for displaying blog previews
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { createMetaData, getDate } from 'utils/blogUtils';
import bulma from 'styles/bulma.scss';
import styles from './styles.scss';
import theme from './theme.scss';

const BlogPost = ({ postData }) => {
  const post = postData.post;
  // Pull out post elements that might exist in different places or needs
  // formatting before injection
  const brief = post.content.brief.html || post.content.brief;
  const postBody = post.content.extended.html || post.content.markdown.html;
  const date = getDate(post.publishedDate);

  // Get meta data for dat SEO :3
  const metaData = createMetaData(post, postData.fullPostUrl);

  return (
    <section className={`${styles.postArea} ${styles.dropCard} ${bulma.content}`}>
      <Helmet
        title={`${metaData.metaTitle} - Blog`}
        meta={metaData.metaTags}
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
  postData: PropTypes.object,
};

export default BlogPost;
