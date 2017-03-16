import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import BlogPost from 'components/BlogComponents/BlogPost';
import BlogPreviewList from 'components/BlogComponents/BlogPreviewList';
import LoadingIndicator from 'components/LoadingIndicator';
import { Blog, mapDispatchToProps } from '../index';
import { getPageOfPosts, getPostBySlug } from '../actions';

describe('<Blog />', () => {
  it('should render content in a <section>', () => {
    const renderedComponent = shallow(<Blog />);
    expect(renderedComponent.type()).toEqual('section');
  });

  it('should render the LoadingIndicator in the absence of content', () => {
    const renderedComponent = shallow(
      <Blog loading />
    );
    expect(renderedComponent.contains(<LoadingIndicator />)).toBe(true);
  });

  it('should call componentDidMount', () => {
    sinon.spy(Blog.prototype, 'componentDidMount');
    const onGetPosts = () => null;
    const renderedComponent = mount( // eslint-disable-line
      <Blog onGetPosts={onGetPosts} />
    );
    expect(Blog.prototype.componentDidMount.calledOnce).toEqual(true);
    Blog.prototype.componentDidMount.restore();
  });

  it('should fetch multiple posts when not given routeParams', () => {
    const onGetPostsSpy = jest.fn();
    const renderedComponent = mount( // eslint-disable-line
      <Blog onGetPosts={onGetPostsSpy} />
    );
    expect(onGetPostsSpy).toHaveBeenCalled();
  });

  it('should fetch a single post when given routeParams', () => {
    const onGetPostSpy = jest.fn();
    const renderedComponent = mount( // eslint-disable-line
      <Blog routeParams={{ slug: 'test-post-1' }} onGetPost={onGetPostSpy} />
    );
    expect(onGetPostSpy).toHaveBeenCalled();
  });

  it('should render one BlogPost when given routeParams', () => {
    const routeParams = { postSlug: 'test-post-1' };
    const examplePost = {};
    const renderedComponent = shallow(
      <Blog loading={false} routeParams={routeParams} focusedPost={examplePost} />
    );
    expect(renderedComponent.contains(<BlogPost post={examplePost} />)).toBe(true);
  });

  it('should render BlogPreviewList otherwise', () => {
    const examplePosts = [];
    const renderedComponent = shallow(
      <Blog loading={false} posts={examplePosts} />
    );
    expect(renderedComponent.contains(<BlogPreviewList posts={examplePosts} />)).toBe(true);
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const result = mapDispatchToProps(dispatch);

    describe('onGetPosts', () => {
      it('should be injected', () => {
        expect(result.onGetPosts).toBeDefined();
      });

      it('should dispatch getPageOfPosts when called', () => {
        const page = 1;
        result.onGetPosts(page);
        expect(dispatch).toHaveBeenCalledWith(getPageOfPosts(page));
      });
    });

    describe('onGetPost', () => {
      it('should be injected', () => {
        expect(result.onGetPost).toBeDefined();
      });

      it('should dispatch getPostBySlug when called', () => {
        const slug = 'test-post-1';
        result.onGetPost(slug);
        expect(dispatch).toHaveBeenCalledWith(getPostBySlug(slug));
      });
    });
  });
});
