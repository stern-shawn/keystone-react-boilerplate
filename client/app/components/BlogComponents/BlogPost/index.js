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
  const postUrl = postData.fullPostUrl;

  // Get meta data for dat SEO and social sharing :3
  const metaData = createMetaData(post, postUrl);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
  const googlePlusUrl = `https://plus.google.com/share?url=${postUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${metaData.metaTitle}&url=${postUrl}`;

  // Pull out post elements that might exist in different places or needs
  // formatting before injection
  const brief = post.content.brief.html || post.content.brief;
  const postBody = post.content.extended.html || post.content.markdown.html;
  const date = getDate(post.publishedDate);

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
        <CardText className={bulma.content} theme={theme}>
          <hr />
          <p className={bulma.subtitle} dangerouslySetInnerHTML={{ __html: brief }} />
          <section dangerouslySetInnerHTML={{ __html: postBody }} />
        </CardText>
        <CardActions>
          <a className={styles.facebookIcon} href={facebookUrl} onClick={(e) => { e.preventDefault(); window.open(facebookUrl, 'facebook-share', 'width=580, height=296'); return false; }}>
            <i className={'fa fa-3x fa-facebook-square'} />
          </a>
          <a className={styles.googlePlusIcon} href={googlePlusUrl} onClick={(e) => { e.preventDefault(); window.open(googlePlusUrl, 'google-plus-share', 'width=530, height=490'); return false; }}>
            <i className={'fa fa-3x fa-google-plus-square'} />
          </a>
          <a className={styles.twitterIcon} href={twitterUrl} onClick={(e) => { e.preventDefault(); window.open(twitterUrl, 'twitter-share', 'width=550, height=235'); return false; }}>
            <i className={'fa fa-3x fa-twitter-square'} />
          </a>
        </CardActions>
      </Card>
    </section>
  );
};

BlogPost.propTypes = {
  postData: PropTypes.object,
};

export default BlogPost;
