import { GET_SEARCH_QUERY_FAILURE, GET_SEARCH_QUERY, CLEAR_DROPDOWN_RESULT } from './Search-ActionTypes'
import * as SearchApi from "./Search-Api";



const getSearchQueryResult = payload => {
  return {
    type: GET_SEARCH_QUERY,
    payload
  };
};


const getSearchQueryResultFailure = payload => {
  return {
    type: GET_SEARCH_QUERY_FAILURE,
    payload
  };
};



const clearDropDownResult = () => {
  return {
    type: CLEAR_DROPDOWN_RESULT
  };
};

export const getMessagesDropDownRequest = (query) => {
    return dispatch => {
      return SearchApi.getMessagesDropDownRequest(query).then(results => {
        return dispatch(getSearchQueryResult(results));
      });
    };
  };
  
export const clearDropDownRequest = (data= "") => {
    return dispatch => {
        return dispatch(clearDropDownResult());
    };
  };

  export const getConversationsDropDownRequest = (query) => {
    return dispatch => {
      return SearchApi.getConversationsDropDownRequest(query).then(results => {
        return dispatch(getSearchQueryResult(results));
      });
    };
  };
  

  export const getSingleSearchResult = (query) => async (dispatch) => {
    let obj = query
    try {
      const response = await fetch(`api/v1/conversations/search/?search=${obj}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      });
      const res = await response
      const jsonRes = await response.json()
      if (res.status === 200) {
  
        dispatch(getSearchQueryResult(jsonRes))
      } else {
        dispatch(getSearchQueryResultFailure('Did not find anything that matches your search'))
      }
    } catch (e) {
      dispatch(getSearchQueryResultFailure('Did not find anything that matches your search'))
    }
  };
