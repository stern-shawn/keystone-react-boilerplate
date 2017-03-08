import { Observable } from 'rxjs';
import { GET_POSTS } from './constants';
import { setPosts } from './actions';

// Best practice to encapsulate fetch's Promise in an Observable
const api = {
  fetchAllFullPosts: () => {
    const request = fetch('/api/post/list')
      .then((response) => response.json());
    return Observable.from(request);
  },
};

const blogEpic = (action$) =>
  action$.ofType(GET_POSTS)
    .mergeMap(() =>
      api.fetchAllFullPosts()
        .map((json) => setPosts(json.posts))

        // .catch((err) => {
        //   // Error :(
        //   console.error(`Error retrieving posts: ${err}`);
        // })
    );

export default blogEpic;
