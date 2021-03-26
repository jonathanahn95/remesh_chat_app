import { GET_ALL_THOUGHTS_FOR_MESSAGE_SUCCESS, CREATE_THOUGHT_SUCCESS, CREATE_THOUGHT_FAILURE } from './Thoughts-ActionTypes'
import * as ThoughtsApi from "./Thoughts-Api";




const getThoughts = payload => {
  return {
    type: GET_ALL_THOUGHTS_FOR_MESSAGE_SUCCESS,
    payload
  };
};

const setCreateThought = payload => {
  return {
    type: CREATE_THOUGHT_SUCCESS,
    payload
  };
};
 

const setCreateThoughtFailure = payload => {
  return {
    type: CREATE_THOUGHT_FAILURE,
    payload
  };
};
 
export const getAllThoughtsForMessage = (id) => {
    return dispatch => {
      return ThoughtsApi.getAllThoughtsForMessage(id).then(thoughts => {
        return dispatch(getThoughts(thoughts));
      });
    };
  };
  
  export const createThought = (data) => async (dispatch) => {
    let obj = data
    try {
      const response = await fetch('/api/v1/thoughts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      })
   
      const res = await response
      const jsonRes = await response.json()
      if (res.status === 200) {
  
        dispatch(setCreateThought(jsonRes))
      } else {
        dispatch(setCreateThoughtFailure("A comment can not be a space and must be of length 1"))
      }
    } catch (e) {

      dispatch(setCreateThoughtFailure("A comment can not be a space and must be of length 1"))
    }
  };