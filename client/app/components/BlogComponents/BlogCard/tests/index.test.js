import React from 'react';
import { shallow, mount } from 'enzyme';

import { Card } from 'react-toolbox/lib/card';
import BlogCard from '../index';

describe('<BlogCard />', () => {
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
      publishedDate: '3/19/17', // Since 3/19 is coming up and it's my birthday
      slug: 'test-post',
    };
  });

  it('should render a Card', () => {
    const renderedComponent = shallow(<BlogCard post={examplePost} />);
    expect(renderedComponent.find(Card).length).toBe(1);
  });

  it('should have a post attribute', () => {
    const renderedComponent = mount(<BlogCard post={examplePost} />);
    expect(renderedComponent.prop('post')).toBeDefined();
  });

  it('should adopt the post attribute', () => {
    const renderedComponent = mount(<BlogCard post={examplePost} />);
    expect(renderedComponent.prop('post')).toEqual(examplePost);
  });
});
