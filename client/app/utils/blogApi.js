import { Observable } from 'rxjs';

// Best practice to encapsulate fetch's Promise in an Observable

const fetchAllFullPosts = () => {
  const request = fetch('/api/post/paginated/')
    .then((response) => response.json());
  return Observable.from(request);
};

const fetchPageOfPosts = (page) => {
  const request = fetch(`/api/post/paginated/${page}`)
    .then((response) => response.json());
  return Observable.from(request);
};

const fetchPostBySlug = (slug) => {
  const request = fetch(`/api/post/slug/${slug}`)
    .then((response) => response.json());
  return Observable.from(request);
};

export {
  fetchAllFullPosts,
  fetchPageOfPosts,
  fetchPostBySlug,
};
