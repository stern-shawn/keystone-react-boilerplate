import { ajax } from 'rxjs/observable/dom/ajax';
const config = require('../../../env.json');

// Bring in authorization details specific to this account
const accessToken = config.SQUARE_ACCESS_TOKEN;
const location = config.SQUARE_LOCATION;

// Configuration for the HTTP request since Square requires authorization, factor out into secure file
const itemsRequest = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  url: `https://connect.squareup.com/v1/${location}/items`,
  responseType: 'json',
  crossDomain: true,
  createXHR() {
    return new XMLHttpRequest();
  },
};

// Square Store API methods
export const fetchItems = () => ajax(itemsRequest);
