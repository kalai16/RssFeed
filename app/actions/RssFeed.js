import { fetchData } from '../lib/api';

export class types {
  static INIT_FEED = 'INIT_FEED';
}

export function getFeed() {
  return (dispatch) => {
    return fetchData().then((feed) => {
      return dispatch({
        type: types.INIT_FEED,
        payload: feed,
      });
    });
  };
}
