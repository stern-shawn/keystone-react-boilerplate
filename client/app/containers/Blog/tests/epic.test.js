import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';

// import configureMockStore from 'redux-mock-store';

// import fetchMock from 'fetch-mock';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/toArray';
// import 'rxjs';
// import 'isomorphic-fetch';
import {
  // getAllBlogPostsEpic,
  getPageOfPostsEpic,
  // getBlogPostBySlugEpic,
} from '../epic';
import {
  // GET_ALL_POSTS,
  GET_PAGINATED_POSTS,
  // GET_POST_BY_SLUG,
  // GET_POSTS_FAILED,
  // SET_PAGINATED_POSTS,
  // SET_POST,
  // SET_POSTS,
} from '../constants';
import { setPaginatedPosts } from '../actions';
const deepEqual = require('deep-equal');

// const epicMiddleware = createEpicMiddleware(getPageOfPostsEpic);
// const mockStore = configureMockStore([epicMiddleware]);

// const fetchMock = require('fetch-mock');

// const mockResponse = (status, statusText, response) => (
//   new window.Response(response, {
//     status,
//     statusText,
//     headers: {
//       'Content-type': 'application/json',
//     },
//   })
// );
// const fetchMock = require('fetch-mock');
// fetchMock.get('*',
//   {
//     post: {
//       slug: 'my-face',
//       title: 'My Face',
//     },
//   }
// );

describe('getAllBlogPostsEpic', () => {
  // Before each test, stub the fetch function
  // beforeEach(() => {
    // window.fetch = jest.fn();
    // fetchMock.get('*',
    //   {
    //     post: {
    //       slug: 'my-face',
    //       title: 'My Face',
    //     },
    //   }
    // );
    //
    //
    // window.fetch = jest.fn().mockImplementation(() =>
    //   Promise.resolve(mockResponse(200, null, '{"post":{"slug":"my-face","title":"My Face"}}')));

    // Before each test, pretend we got a successful response
    // const res = new Response('{"post":{"slug":"my-face","title":"My Face"}}', {
    //   status: 200,
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // });

    // global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true, post: { slug: 'my-face', title: 'My Face' } }));

    // global.fetch = jest.fn().mockReturnValue(Promise.resolve({ ok: true, post: { slug: 'my-face', title: 'My Face' } }));
  // });

  // let store;
  // beforeEach(() => {
  //   store = mockStore();
  // });
  //
  // afterEach(() => {
  //   epicMiddleware.replaceEpic(getPageOfPostsEpic);getAllBlogPostsEpic
  // });

  it('dispatches the correct action when it is successful', () => {
    // const posts = {
    //   post: {
    //     slug: 'my-face',
    //     title: 'My Face',
    //   },
    // };

    // fetchMock.get('*', posts);

    // fetch('http://fake.com').then((response) => response.json()).then((json) => console.log(json));

    // store.dispatch({ type: GET_PAGINATED_POSTS });
    //
    // expect(store.getActions()).toEqual([
    //   { type: GET_PAGINATED_POSTS },
    //   { type: SET_PAGINATED_POSTS, posts },
    // ]);
    const action$ = ActionsObservable.of(
      { type: GET_PAGINATED_POSTS, page: 1 }
    );
    const response = {
      posts: {
        results: [{}, {}],
      },
    };
    const blogApi = { fetchPageOfPosts: () => Observable.of(response) };

    // const expectedOutputActions = [{ type: SET_POSTS, posts }];

    // return getAllBlogPostsEpic(action$)
    //         .then((actionReceived) => {
    //           expect(actionReceived.type).toBe(SET_POSTS);
    //         });
    // const fetch = () => Observable.of({});
    //
    getPageOfPostsEpic(action$, null, { blogApi })
      .toArray()
      .subscribe((actions) => {
        // console.log(actions);
        // console.log([setPaginatedPosts(response)]);
        expect(deepEqual(actions, [setPaginatedPosts(response.posts)])).toBe(true);
      });
  });
});
