import { FETCH_THOUGHTS, CREATE_THOUGHT } from './Thoughts-ActionTypes'
import * as ThoughtsApi from "./Thoughts-Api";




const getThoughts = payload => {
  return {
    type: FETCH_THOUGHTS,
    payload
  };
};

const setCreateThought = payload => {
  return {
    type: CREATE_THOUGHT,
    payload
  };
};
 
export const fetchThoughts = (id) => {
    return dispatch => {
      return ThoughtsApi.fetchThoughts(id).then(thoughts => {
        return dispatch(getThoughts(thoughts));
      });
    };
  };
  

export const createThought = (data) => {
  return dispatch => {
    return ThoughtsApi.createThought(data).then(thought => {
      return dispatch(setCreateThought(thought));
    });
  };
};
