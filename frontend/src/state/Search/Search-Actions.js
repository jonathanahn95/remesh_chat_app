import { GET_SEARCH_RESULT } from './Search-ActionTypes'
import * as SearchApi from "./Search-Api";




const getSearchResults = payload => {
  return {
    type: GET_SEARCH_RESULT,
    payload
  };
};

export const querySearchResults = (query) => {
    return dispatch => {
      return SearchApi.querySearchResults(query).then(results => {
        return dispatch(getSearchResults(results));
      });
    };
  };