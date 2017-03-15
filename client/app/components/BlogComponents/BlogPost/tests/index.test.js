import React from 'react';
import { shallow, mount } from 'enzyme';

import { Card, CardMedia } from 'react-toolbox/lib/card';
import BlogPost from '../index';

describe('<BlogPost />', () => {
  let examplePost;
  beforeEach(() => {
    examplePost = {
      title: 'Title',
      content: {
        brief: 'Example blurb text for a blog post',
        extended: {
          html: 'Example full-length post content',
        },
      },
      image: 'shipit.jpg',
      publishedDate: '3/19/17', // Since 3/19 is coming up and it's my birthday
      slug: 'test-post',
    };
  });

  it('should render a Card', () => {
    const renderedComponent = shallow(<BlogPost post={examplePost} />);
    expect(renderedComponent.find(Card).length).toBe(1);
  });

  it('should render a CardMedia object if given an image path', () => {
    const renderedComponent = shallow(<BlogPost post={examplePost} />);
    expect(renderedComponent.find(CardMedia).length).toBe(1);
  });

  it('should NOT render a CardMedia object if image is undefined', () => {
    examplePost.image = null; // Simulate no image passed from props
    const renderedComponent = shallow(<BlogPost post={examplePost} />);
    expect(renderedComponent.find(CardMedia).length).toBe(0);
  });

  it('should have a post attribute', () => {
    const renderedComponent = mount(<BlogPost post={examplePost} />);
    expect(renderedComponent.prop('post')).toBeDefined();
  });

  it('should adopt the post attribute', () => {
    const renderedComponent = mount(<BlogPost post={examplePost} />);
    expect(renderedComponent.prop('post')).toEqual(examplePost);
  });
});
