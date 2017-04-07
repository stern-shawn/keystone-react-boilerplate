import { Observable } from 'rxjs';
import {
  GET_ALL_ITEMS,
  GET_ITEMS_FAILED,
} from './constants';
import {
  setItems,
} from './actions';

const getAllStoreItemsEpic = (action$, store, { storeApi }) =>
  action$.ofType(GET_ALL_ITEMS)
    .switchMap(() =>
      storeApi.fetchItems()
        .map((json) => setItems(json.response))
        .catch((error) => Observable.of({
          type: GET_ITEMS_FAILED,
          payload: error.xhr.response,
          error: true,
        }))
    );

export {
  getAllStoreItemsEpic,
};
