import { ajax } from 'rxjs/observable/dom/ajax';

// API string to request list of store items from the backend
const itemsRequest = '/api/store/items';

// Square Store API methods
export const fetchItems = () => ajax(itemsRequest);
