import React from 'react';
import { shallow, mount } from 'enzyme';

import BlogCard from 'components/BlogComponents/BlogCard';
import BlogPreviewList from '../index';

describe('<BlogPreviewList />', () => {
  let examplePosts;
  beforeEach(() => {
    examplePosts = [
      {
        title: 'Title',
        content: {
          brief: 'Example blurb text for a blog post',
          extended: {
            html: 'Example full-length post content',
          },
        },
        image: 'shipit.jpg',
        publishedDate: '3/19/17',
        slug: 'test-post',
      },
      {
        title: 'Title2',
        content: {
          brief: 'Example blurb text for a blog post',
          extended: {
            html: 'Example full-length post content',
          },
        },
        image: 'shipit.jpg',
        publishedDate: '3/20/17',
        slug: 'test-post-2',
      },
    ];
  });

  it('should render an unordered list', () => {
    const renderedComponent = shallow(<BlogPreviewList posts={examplePosts} />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('should render an li for each object in posts', () => {
    const renderedComponent = mount(<BlogPreviewList posts={examplePosts} />);
    expect(renderedComponent.find('li').length).toBe(examplePosts.length);
  });

  it('each li should contain a BlogCard component', () => {
    const renderedComponent = mount(<BlogPreviewList posts={examplePosts} />);
    expect(renderedComponent.find(BlogCard).length).toBe(examplePosts.length);
  });
});
