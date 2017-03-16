import { Observable } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

// Best practice to encapsulate fetch's Promise in an Observable

export const fetchAllFullPosts = () => {
  const request = fetch('/api/post/paginated/')
    .then((response) => response.json());
  return Observable.from(request);
};

export const fetchPageOfPosts = (page) =>
  ajax.getJSON(`/api/post/paginated/${page}`);
  // const request = fetch(`/api/post/paginated/${page}`)
  //   .then((response) => response.json());
  // return Observable.from(request);
// };

export const fetchPostBySlug = (slug) => {
  const request = fetch(`/api/post/slug/${slug}`)
    .then((response) => response.json());
  return Observable.from(request);
};
