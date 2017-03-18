/*
 * About Page Actions
 */

import {
  GET_ABOUT_CONTENT,
  GET_ABOUT_CONTENT_FAILED,
  SET_ABOUT_CONTENT,
} from './constants';

/**
 * Submit a request for about page content
 *
 * @return {object}    An action object with a type of GET_ABOUT_CONTENT
 */
function getAboutContent() {
  return {
    type: GET_ABOUT_CONTENT,
  };
}

/**
 * Fallback method for if the API failed to respond with content
 *
 * @return {object}    An action object with a type of GET_ABOUT_CONTENT_FAILED
 */
function getAboutContentFailed() {
  return {
    type: GET_ABOUT_CONTENT_FAILED,
  };
}

/**
 * Creates/Updates the currently cached about page content
 *
 * @param  {posts} content Content object for the about page
 *
 * @return {object}    An action object with a type of SET_ABOUT_CONTENT
 */
function setAboutContent(content) {
  return {
    type: SET_ABOUT_CONTENT,
    content,
  };
}

export {
  getAboutContent,
  getAboutContentFailed,
  setAboutContent,
};
