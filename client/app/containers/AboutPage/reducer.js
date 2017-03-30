/*
 * StoreReducer
 */
import { fromJS } from 'immutable';

import {
  GET_ABOUT_CONTENT,
  GET_ABOUT_CONTENT_FAILED,
  NO_ABOUT_CONTENT,
  SET_ABOUT_CONTENT,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  isLoading: true,
  title: null,
  heroImage: null,
  content: null,
  loadSuccess: true,
});

function aboutPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ABOUT_CONTENT:
      console.log('Grabbing about page content');
      return state
        .set('isLoading', true);
    case GET_ABOUT_CONTENT_FAILED:
      console.log('Failed to get about page content...');
      return state
        .set('isLoading', false)
        .set('title', null)
        .set('heroImage', null)
        .set('content', null)
        .set('loadSuccess', false);
    case NO_ABOUT_CONTENT:
    console.log('User has not defined an about page');
      return state
        .set('loadSuccess', false);
    case SET_ABOUT_CONTENT:
      console.log('About page successfully retrieved, splitting content and adding to store');
      return state
        .set('title', action.content.title)
        .set('heroImage', action.content.heroImage)
        .set('content', action.content.content.extended.html)
        .set('isLoading', false)
        .set('loadSuccess', true);
    default:
      return state;
  }
}

export default aboutPageReducer;
